import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence, ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-detailresidancerayendhaoui',
  templateUrl: './detailresidancerayendhaoui.component.html',
  styleUrls: ['./detailresidancerayendhaoui.component.css']
})
export class DetailresidancerayendhaouiComponent implements OnInit {
  residence: Residence | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.residenceService.getById(id).subscribe(
        data => {
          this.residence = data;
          this.loading = false;
        },
        err => {
          this.error = 'Impossible de récupérer les détails';
          this.loading = false;
        }
      );
    } else {
      this.error = 'Identifiant invalide';
      this.loading = false;
    }
  }

  goBack() {
    this.router.navigate(['/list']);
  }
}
