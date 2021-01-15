
import { Urun } from '../../models/urunler';
import { FbservisService } from '../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-urundetay',
  templateUrl: './urundetay.component.html',
  styleUrls: ['./urundetay.component.css']
})
export class UrunDetayComponent implements OnInit {
  key: string;
  secUrun: Urun = new Urun();
  constructor(
    public route: ActivatedRoute,
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(p => {
      this.key = p.key;
      this.UrunGetir();
    });
  }
  UrunGetir() {
    this.fbServis.UrunByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secUrun = (y as Urun);
    });
  }
}
