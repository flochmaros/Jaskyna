# Jaskyňa

Osobné úlohy a poznámky v rytme slnka. Farby sa menia podľa skutočného slnka nad Breznom, v noci bez modrého svetla.

**Appka:** https://flochmaros.github.io/Jaskyna/

## Na iPhone
1. Otvor adresu v Safari.
2. Zdieľať → **Pridať na plochu**.
3. Raz ju otvor z plochy s internetom, potom funguje aj offline.

## Ako to funguje
- Úlohy a poznámky sa ukladajú len v zariadení.
- **Priame spárovanie** (Záloha a prenos → Vytvoriť kód / Mám kód): mobil a počítač sa synchronizujú samy, keď je Jaskyňa otvorená na oboch. Spojenie ide priamo medzi zariadeniami (WebRTC cez verejný server PeerJS, ktorý ich len zoznámi) a je šifrované kľúčom z párovacieho kódu.
- Záloha na Google Disk cez Zdieľať; pri načítaní sa dáta spoja.
- Pri pridávaní môžeš napísať termín a čas rovno do textu: „nemčina zajtra o 16“, „basket v piatok 18:30“. Výkričník = dôležité.
- V detaile úlohy s termínom je **Do kalendára**: otvorí Google Kalendár s predvyplnenou udalosťou.

## Úpravy
Po každej zmene súborov zvýš `VERZIA` v `sw.js`, inak mobil môže ukázať starú verziu.
