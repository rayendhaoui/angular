import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence, ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-addresidencerayendhaoui',
  templateUrl: './addresidencerayendhaoui.component.html',
  styleUrls: ['./addresidencerayendhaoui.component.css']
})
export class AddresidencerayendhaouiComponent {
  residence: Residence = { name: '', address: '', image: '', status: '' };
  submitting = false;
  error: string | null = null;

  constructor(
    private residenceService: ResidenceService,
    public router: Router
  ) {}

  onSubmit() {
    this.error = null;
    this.submitting = true;
    this.residenceService.create(this.residence).subscribe(
      () => {
        this.submitting = false;
        this.router.navigate(['/list']);
      },
      err => {
        this.error = 'Erreur lors de la création';
        this.submitting = false;
      }
    );
  }
}

