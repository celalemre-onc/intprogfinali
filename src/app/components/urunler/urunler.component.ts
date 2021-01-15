import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Urun } from 'src/app/models/urunler';
import { FbservisService } from 'src/app/services/fbservis.service';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.css']
})
export class UrunlerComponent implements OnInit {
  adsoyad: string;
  uid: string;
  urun: Urun[];
  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.UrunListele();
  }
  OturumKapat() {
    this.fbServis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });

  }
  UrunListele() {
    this.fbServis.UrunListele().snapshotChanges().subscribe(data => {
      this.urun = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.urun.push(y as Urun);
      });
    });
  }
}
