import { FbservisService } from '../../services/fbservis.service';
import { Urun } from '../../models/urunler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urunekle',
  templateUrl: './urunekle.component.html',
  styleUrls: ['./urunekle.component.css']
})
export class UrunekleComponent implements OnInit {
  secUrun: Urun = new Urun();
  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  Kaydet() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.secUrun.uid = user.uid;
    var tarih = new Date();
    this.secUrun.kayTarih = tarih.getTime().toString();
    this.secUrun.duzTarih = tarih.getTime().toString();
    this.fbServis.UrunEkle(this.secUrun).then(d => {
      this.router.navigate(['/']);
    });
  }
}
