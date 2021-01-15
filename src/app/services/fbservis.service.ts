import { Uye } from './../models/uye';
import { Urun } from '../models/urunler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FbservisService {
  private dbUrun = '/Urunler';
  private dbUye = '/Uyeler';
  UrunRef: AngularFireList<Urun> = null;
  uyeRef: AngularFireList<Uye> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.UrunRef = db.list(this.dbUrun);
    this.uyeRef = db.list(this.dbUye);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  UrunListele() {
    return this.UrunRef;
  }
  UrunListeleByUID(uid: string) {
    return this.db.list("/Urunler", q => q.orderByChild("uid").equalTo(uid));
  }
  UrunByKey(key: string) {
    return this.db.object("/Urunler/" + key);
  }
  UrunEkle(urun: Urun) {
    return this.UrunRef.push(urun);
  }
  UrunDuzenle(urun: Urun) {
    return this.UrunRef.update(urun.key, urun);
  }
  UrunSil(key: string) {
    return this.UrunRef.remove(key);
  }
  
}
