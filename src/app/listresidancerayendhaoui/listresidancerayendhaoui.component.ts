import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Residence, ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-listresidancerayendhaoui',
  templateUrl: './listresidancerayendhaoui.component.html',
  styleUrls: ['./listresidancerayendhaoui.component.css']
})
export class ListresidancerayendhaouiComponent implements OnInit {
  residences: Residence[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private residenceService: ResidenceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.loading = true;
    this.residenceService.getAll().subscribe(
      data => {
        this.residences = data;
        this.loading = false;
      },
      err => {
        this.error = 'Impossible de charger les données';
        this.loading = false;
      }
    );
  }

  delete(id?: number): void {
    if (id == null) return;
    if (!confirm('Confirmer la suppression ?')) {
      return;
    }
    this.residenceService.delete(id).subscribe(
      () => this.fetch(),
      () => alert('Erreur de suppression')
    );
  }

  viewDetail(id?: number) {
    if (id != null) {
      this.router.navigate(['/detail', id]);
    }
  }
}

