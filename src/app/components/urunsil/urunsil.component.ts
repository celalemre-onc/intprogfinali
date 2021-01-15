import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Urun } from 'src/app/models/urunler';
import { FbservisService } from 'src/app/services/fbservis.service';

@Component({
  selector: 'app-urunsil',
  templateUrl: './urunsil.component.html',
  styleUrls: ['./urunsil.component.css']
})
export class UrunsilComponent implements OnInit {
  uid: string;
  key: string;
  secUrun: Urun = new Urun();
  constructor(
    public route: ActivatedRoute,
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
  }
  KayitGetir() {
    this.fbServis.UrunByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secUrun = (y as Urun);
      if (this.uid != this.secUrun.uid) {
        this.router.navigate(['/urunler']);
      }
    });
  }

  Sil() {
    this.fbServis.UrunSil(this.key).then(d => {
      this.router.navigate(['/']);
    });
  }
}
