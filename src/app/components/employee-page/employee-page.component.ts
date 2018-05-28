import {Component, OnInit} from "@angular/core";
import {CV} from "../../model/CV";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {Employee} from "../../model/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../util/customValidators";

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  private currentUserLogin: string;
  public cvs: Array<CV>;
  public employee: Employee;
  public ready = false;
  public addingCV: boolean;
  public addCVForm: FormGroup;
  public successfullyAdded = false;
  public successfullyRemoved = false;

  constructor(private laborExchange: LaborExchangeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.currentUserLogin = this.route.snapshot.paramMap.get('login');
    this.laborExchange.getEmployeeByLogin(this.currentUserLogin).subscribe(data => {
      this.employee = <Employee>data;
      this.ready = true;
    });

    this.laborExchange.getCVListByEmployeeLogin(this.currentUserLogin).subscribe(data => {
      this.cvs = data;
    });

    this.addCVForm = this.fb.group({
      position: ['', Validators.required],
      hoursPerWeek: ['', [Validators.required, CustomValidators.numeric]],
      salary: ['', [Validators.required, CustomValidators.numeric]]
    });
  }

  public startAddingCV(): void {
    this.addingCV = true;
  }

  public finishAddingCV(): void {
    this.addingCV = false;
    this.addCVForm.reset();
  }

  public saveCV(): void {
    Object.keys(this.addCVForm.controls).forEach(key => {
      this.addCVForm.controls[key].markAsTouched();
    });
    if (this.addCVForm.valid) {
      const newCV: CV = new CV(this.currentUserLogin, {
        _careerObjective: {
          _position: this.addCVForm.get('position').value,
          _hoursPerWeek: +this.addCVForm.get('hoursPerWeek').value,
          _salary: +this.addCVForm.get('salary').value
        }
      });
      this.laborExchange.addCV(newCV);

      this.cvs.push(newCV);
      this.showSuccessfullyAdded();
      this.finishAddingCV();
    }
  }

  private showSuccessfullyAdded(): void {
    this.successfullyAdded = true;
    setTimeout(() => {
      this.successfullyAdded = false;
    }, 2000);
  }


  public removeCV(id: string): void {
    this.laborExchange.removeCV(id);
    this.cvs = this.cvs.filter(cv => cv.id !== id);
    this.successfullyRemoved = true;
    setTimeout(() => {
      this.successfullyRemoved = false;
    }, 2000);
  }

}
