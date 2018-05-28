import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../../model/vacancy";
import {Employer} from "../../model/employer";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Message, messages} from "../../util/messages";
import {MessageService} from "../../services/message.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../util/customValidators";

@Component({
  selector: 'app-employer-page',
  templateUrl: './employer-page.component.html',
  styleUrls: ['./employer-page.component.css']
})
export class EmployerPageComponent implements OnInit {

  private currentUserLogin: string;
  public vacancies: Array<Vacancy>;
  public employer: Employer;
  public ready = false;
  public addingVacancy: boolean;
  public addVacancyForm: FormGroup;
  public successfullyAdded = false;
  public successfullyRemoved = false;

  constructor(private laborExchange: LaborExchangeService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.currentUserLogin = this.route.snapshot.paramMap.get('login');
    this.laborExchange.getEmployerByLogin(this.currentUserLogin).subscribe(data => {
      this.employer = data;
      this.ready = true;
    });
    this.laborExchange.getVacancyListByEmployerLogin(this.currentUserLogin).subscribe(data => {
      this.vacancies = data;
    });

    this.addVacancyForm = this.fb.group({
      position: ['', Validators.required],
      hoursPerWeek: ['', [Validators.required, CustomValidators.numeric]],
      city: ['', [Validators.required]]
    });
  }


  public startAddingVacancy(): void {
    this.addingVacancy = true;
  }

  public finishAddingVacancy(): void {
    this.addingVacancy = false;
    this.addVacancyForm.reset();
  }

  public saveVacancy(): void {
    Object.keys(this.addVacancyForm.controls).forEach(key => {
      this.addVacancyForm.controls[key].markAsTouched();
    });
    if (this.addVacancyForm.valid) {
      const newVacancy: Vacancy = new Vacancy(this.currentUserLogin, {
        _position: this.addVacancyForm.get('position').value,
        _hoursPerWeek: +this.addVacancyForm.get('hoursPerWeek').value,
        _city: this.addVacancyForm.get('city').value
      });
      this.laborExchange.addVacancy(newVacancy);

      this.vacancies.push(newVacancy);
      this.showSuccessfullyAdded();
      this.finishAddingVacancy();
    }
  }

  private showSuccessfullyAdded(): void {
    this.successfullyAdded = true;
    setTimeout(() => {
      this.successfullyAdded = false;
    }, 2000);
  }

  public removeVacancy(id: string): void {
    this.laborExchange.removeVacancy(id);
    this.vacancies = this.vacancies.filter(vacancy => vacancy.id !== id);
    this.successfullyRemoved = true;
    setTimeout(() => {
      this.successfullyRemoved = false;
    }, 2000);
  }

}
