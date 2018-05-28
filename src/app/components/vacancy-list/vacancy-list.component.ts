import {Component, OnInit} from "@angular/core";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {Vacancy} from "../../model/vacancy";
import {AuthService} from "../../services/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MessageService} from "../../services/message.service";
import {CV} from "../../model/CV";
import {JobOffer} from "../../util/JobOffer";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  public vacancyList: Array<Vacancy> = [];

  public chosenCV: CV;
  public textMessage: string;
  public userCVs: CV[];
  private chosenVacancy: Vacancy;
  private chosenIndex: number;
  private responded: boolean[];

  constructor(private laborExchange: LaborExchangeService,
              private authService: AuthService,
              private modalService: NgbModal,
              private messageService: MessageService) { }

  ngOnInit() {
    this.laborExchange.getFullVacancyList().subscribe(vacancies => {
      this.vacancyList = vacancies;
    });
    this.laborExchange.getCVListByEmployeeLogin(this.authService.getSignedInUserLogin()).subscribe(data => {
      this.userCVs = data;
      this.chosenCV = this.userCVs[0];
      this.responded = this.userCVs.map(() => false);
    });
  }

  public openVacancyModal(vacancy: Vacancy, index: number, content: any): void {
    this.modalService.open(content, { centered: true });
    this.chosenVacancy = vacancy;
    this.chosenIndex = index;
  }

  public clearData(): void {
    this.chosenCV = this.userCVs[0];
    this.textMessage = '';
  }

  public respondChosenVacancy(): void {
    this.messageService.sendMessage(
      this.textMessage,
      this.authService.getSignedInUserLogin(),
      this.chosenVacancy.ownerLogin,
      new Date(),
      new JobOffer(this.chosenVacancy, this.chosenCV));

    this.responded[this.chosenIndex] = true;
    this.clearData();
  }

}
