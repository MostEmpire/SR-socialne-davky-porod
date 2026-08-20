// Generované z rulebase.json — needitovať ručne.
window.RULEBASE = {
 "meta": {
  "nazov": "Sémantická báza pravidiel — sociálne dávky pre rodiny s deťmi (SR)",
  "referencnyDatum": "2026-08-18",
  "zdroj": "www.slov-lex.sk — konsolidované časové znenia účinné k referenčnému dátumu",
  "upozornenie": "Strojovo spracovateľná destilácia zákonov. Právne záväzné sú len texty v Zbierke zákonov SR.",
  "pouziteZnenia": {
   "461/2003": {
    "nazov": "Zákon o sociálnom poistení",
    "znenieOd": "2026-08-01",
    "rozsah": "len nemocenské poistenie, nemocenské dávky, vymeriavacie základy, poistné"
   },
   "383/2013": {
    "nazov": "Zákon o príspevku pri narodení dieťaťa a príspevku na viac súčasne narodených detí",
    "znenieOd": "2023-05-01"
   },
   "571/2009": {
    "nazov": "Zákon o rodičovskom príspevku",
    "znenieOd": "2026-01-01"
   },
   "600/2003": {
    "nazov": "Zákon o prídavku na dieťa",
    "znenieOd": "2026-01-01"
   },
   "561/2008": {
    "nazov": "Zákon o príspevku na starostlivosť o dieťa",
    "znenieOd": "2023-01-01"
   },
   "627/2005": {
    "nazov": "Zákon o príspevkoch na podporu náhradnej starostlivosti o dieťa",
    "znenieOd": "2023-05-01"
   },
   "201/2008": {
    "nazov": "Zákon o náhradnom výživnom",
    "znenieOd": "2026-06-12"
   },
   "417/2013": {
    "nazov": "Zákon o pomoci v hmotnej núdzi",
    "znenieOd": "2026-08-01"
   },
   "595/2003": {
    "nazov": "Zákon o dani z príjmov (§ 33 daňový bonus)",
    "znenieOd": "2026-01-01"
   },
   "544/2010": {
    "nazov": "Zákon o dotáciách v pôsobnosti MPSVR SR",
    "znenieOd": "2026-01-01"
   },
   "131/2002": {
    "nazov": "Zákon o vysokých školách (§ 96b tehotenské štipendium)",
    "znenieOd": "2025-02-01"
   },
   "245/2008": {
    "nazov": "Školský zákon (§ 149a tehotenské štipendium)",
    "znenieOd": "2026-06-12"
   },
   "447/2008": {
    "nazov": "Zákon o peňažných príspevkoch na kompenzáciu ŤZP",
    "znenieOd": "2026-07-01"
   },
   "366/2025": {
    "nazov": "Opatrenie MPSVR SR o ustanovení súm rodičovského príspevku (pre rok 2026)"
   },
   "383/2020": {
    "nazov": "Opatrenie MPSVR SR o úprave súm prídavku na dieťa (historické — od 2023 sú sumy priamo v zákone 600/2003)",
    "stav": "prekonané"
   },
   "238/1998": {
    "nazov": "Zákon o príspevku na pohreb",
    "znenieOd": "2025-01-01"
   },
   "328/2002": {
    "nazov": "Zákon o sociálnom zabezpečení policajtov a vojakov (§ 9 tehotenské, § 10 materské)",
    "znenieOd": "2026-07-01"
   },
   "580/2004": {
    "nazov": "Zákon o zdravotnom poistení (§ 11 — poistenci štátu)",
    "znenieOd": "2026-07-01"
   },
   "311/2001": {
    "nazov": "Zákonník práce (§ 166–169 materská, otcovská a rodičovská dovolenka)",
    "znenieOd": "2026-06-07"
   },
   "102/2006": {
    "nazov": "Vyhláška MŠ SR o priznávaní sociálneho štipendia študentom vysokých škôl",
    "znenieOd": "2014-09-01"
   }
  },
  "vysledokSweep": "Katalóg krížovo overený proti oficiálnym zoznamom MPSVR (podpora rodín s deťmi — 10 nástrojov, všetky pokryté), ÚPSVaR (životná situácia narodenie dieťaťa) a Sociálnej poisťovne (tehotenské, materské, otcovské). Mimo modelu zostávajú: obecné príspevky pri narodení (nie sú v Zbierke zákonov), plný výpočet koordinácie podľa nariadenia (ES) 883/2004 a dávky výsluhového zabezpečenia mimo materskej fázy."
 },
 "ontologia": {
  "zakladneJednotky": {
   "clenskyStat": {
    "definicia": "Členský štát EÚ, zmluvná strana Dohody o EHP alebo Švajčiarska konfederácia. Právny základ pojmu: § 3 ods. 10 zák. 571/2009, § 7 ods. 3 zák. 600/2003; koordinácia dávok: nariadenie (ES) 883/2004 a 987/2009.",
    "enum": {
     "EU": [
      "Belgicko",
      "Bulharsko",
      "Česko",
      "Chorvátsko",
      "Cyprus",
      "Dánsko",
      "Estónsko",
      "Fínsko",
      "Francúzsko",
      "Grécko",
      "Holandsko",
      "Írsko",
      "Litva",
      "Lotyšsko",
      "Luxembursko",
      "Maďarsko",
      "Malta",
      "Nemecko",
      "Poľsko",
      "Portugalsko",
      "Rakúsko",
      "Rumunsko",
      "Slovensko",
      "Slovinsko",
      "Španielsko",
      "Švédsko",
      "Taliansko"
     ],
     "EHP_mimo_EU": [
      "Island",
      "Lichtenštajnsko",
      "Nórsko"
     ],
     "ostatne": [
      "Švajčiarsko"
     ]
    },
    "dosledky": [
     "Pobyt v členskom štáte neruší nárok na rodičovský príspevok ani prídavok (na rozdiel od pobytu v treťom štáte bez povinného verejného ZP v SR).",
     "Obdobná dávka z členského štátu sa započítava/vylučuje podľa koordinačných pravidiel (napr. materské z členského štátu ~ slovenské materské).",
     "Do tretieho (nečlenského) štátu sa rodičovský príspevok, prídavok, príspevok na starostlivosť a náhradné výživné nevyplácajú."
    ]
   },
   "platca": {
    "enum": {
     "SP": "Sociálna poisťovňa (poistné dávky zo zák. 461/2003)",
     "UPSVAR": "Úrad práce, sociálnych vecí a rodiny (štátne sociálne dávky, pomoc v HN, náhradné výživné, dotácie, kompenzácie ŤZP)",
     "FS": "Finančná správa / zamestnávateľ (daňový bonus zo zák. 595/2003)",
     "SKOLA": "Vysoká škola / stredná škola (tehotenské štipendium)",
     "OBEC": "Obec (jednorazová dávka v hmotnej núdzi)"
    }
   },
   "zdrojPoistenia": {
    "definicia": "Spôsoby, ktorými vzniká nemocenské poistenie alebo sa obdobie započítava do podmienky 270 dní.",
    "enum": {
     "zamestnanec": {
      "text": "Povinné nemocenské poistenie zamestnanca",
      "cit": "§ 14 ods. 1 písm. a) zák. 461/2003",
      "sadzbaNP": 0.014,
      "vymeriavaciZaklad": "hrubá mzda (§ 138 ods. 1)",
      "platiPoistenec": true
     },
     "szco": {
      "text": "Povinné nemocenské poistenie SZČO (ak príjem za minulý rok presiahol 12-násobok minimálneho VZ)",
      "cit": "§ 14 ods. 1 písm. b), § 21 zák. 461/2003",
      "sadzbaNP": 0.044,
      "vymeriavaciZaklad": "podľa základu dane (§ 138 ods. 2), min. 50 % VVZ",
      "platiPoistenec": true
     },
     "dobrovolne": {
      "text": "Dobrovoľné nemocenské poistenie (len spolu s dobrovoľným dôchodkovým)",
      "cit": "§ 14 ods. 2 zák. 461/2003",
      "sadzbaBalik": 0.3315,
      "zlozenieBaliku": "nemocenské 4,4 % + starobné 18 % + invalidné 6 % + rezervný fond 4,75 % (§ 130, 131, 132, 137)",
      "vymeriavaciZaklad": "určený poistencom, min. 50 % VVZ, max. 11-násobok 1/12 VVZ (§ 138)",
      "platiPoistenec": true
     },
     "studiumUkoncene": {
      "text": "Doba štúdia na SŠ/VŠ, ktorým poistenkyňa ZÍSKALA príslušný stupeň vzdelania — započítava sa LEN do 270 dní pre materské, nie pre tehotenské",
      "cit": "§ 48 ods. 1 zák. 461/2003",
      "platiPoistenec": false,
      "lenPreDavky": [
       "materske_matka",
       "materske_otec_14dni",
       "materske_iny_poistenec"
      ]
     },
     "rodicovskaDovolenka": {
      "text": "Prerušenie povinného NP z dôvodu rodičovskej dovolenky / poberania RP u SZČO — započítava sa do 270 dní pre materské aj tehotenské",
      "cit": "§ 49a ods. 1, § 47a ods. 3 zák. 461/2003",
      "platiPoistenec": false
     }
    }
   }
  },
  "pojmy": {
   "PDD": {
    "text": "Očakávaný deň pôrodu určený lekárom",
    "pouzitie": "kotva pre tehotenské (27. týždeň pred PDD), materské (6.–8. týždeň pred PDD), ochrannú lehotu (42 týždňov pred PDD), ochranný príspevok HN (8 týždňov pred PDD)"
   },
   "nemocenskePoistenie": {
    "text": "Poistenie pre prípad straty príjmu z dôvodu choroby, tehotenstva a materstva",
    "cit": "§ 2 písm. a), § 14 zák. 461/2003",
    "poznamka": "Zákon používa nemocenské poistenie; invalidné poistenie je iný subsystém — podmienka 270 dní sa viaže na NEMOCENSKÉ poistenie."
   },
   "podmienka270dni": {
    "text": "270 dní nemocenského poistenia v posledných 2 rokoch pred rozhodujúcou udalosťou (pôrod pre materské; začiatok 27. týždňa pred PDD pre tehotenské; deň žiadosti pre materské iného poistenca). Započítavajú sa všetky skončené aj trvajúce NP.",
    "cit": "§ 48 ods. 1, § 47a ods. 1, § 49 ods. 1 zák. 461/2003"
   },
   "rozhodujuceObdobie": {
    "text": "Obdobie, z ktorého sa zisťuje DVZ: (a) NP trvá od 1. 1. minulého roka → minulý kalendárny rok; (b) NP vzniklo neskôr a ≥ 90 dní plateného NP → od vzniku NP do konca predchádzajúceho mesiaca; (c) < 90 dní → predchádzajúci rok u iného zamestnávateľa, inak pravdepodobný DVZ. Vylučujú sa dni PN, OČR, materského, prerušenia.",
    "cit": "§ 54 zák. 461/2003"
   },
   "DVZ": {
    "text": "Denný vymeriavací základ = súčet VZ, z ktorých bolo zaplatené poistné na NP v rozhodujúcom období / počet dní rozhodujúceho obdobia; zaokrúhľuje sa na 4 desatinné miesta nahor; strop 2-násobok VVZ spred 2 rokov / 365.",
    "cit": "§ 55 zák. 461/2003"
   },
   "pravdepodobnyDVZ": {
    "text": "1/30 VZ, z ktorého by sa platilo poistné za mesiac vzniku dôvodu; strop 1/30 z 50 % 1/12 VVZ. Pri reťazovom materskom nesmie byť nižší ako DVZ predchádzajúceho materského z toho istého poistenia.",
    "cit": "§ 57 zák. 461/2003"
   },
   "ochrannaLehota": {
    "text": "7 dní po zániku NP; pre poistenkyňu, ktorej NP zaniklo počas 42 týždňov pred PDD (alebo 1. deň 42. týždňa pred PDD spadá do 180 dní od zániku NP), je 8 MESIACOV.",
    "cit": "§ 32 zák. 461/2003"
   },
   "osamelaPoistenkyna": {
    "text": "Osamelosť predlžuje materské na 37 týždňov (resp. 31 týždňov u iného poistenca).",
    "cit": "§ 48 ods. 3, § 49 ods. 1 písm. c) zák. 461/2003"
   },
   "nezaopatreneDieta": {
    "text": "Dieťa do skončenia povinnej školskej dochádzky; najdlhšie do 25 rokov, ak sa sústavne pripravuje na povolanie štúdiom alebo nemôže pre chorobu/úraz; nie je ním poberateľ invalidného dôchodku ani absolvent 2. stupňa VŠ.",
    "cit": "§ 3 zák. 600/2003"
   },
   "dlhodoboNepriaznivyZdravStav": {
    "text": "Choroba/stav podľa prílohy č. 2 zák. 461/2003 trvajúce (alebo s predpokladom trvania) viac ako 12 mesiacov, vyžadujúce osobitnú starostlivosť.",
    "cit": "§ 5 zák. 600/2003",
    "dosledky": [
     "rodičovský príspevok do 6 rokov veku",
     "príspevok na starostlivosť do 6 rokov veku",
     "štát platí dôchodkové poistenie opatrujúcemu do 18 rokov veku dieťaťa"
    ]
   },
   "riadnaStarostlivost": {
    "text": "Starostlivosť v záujme fyzického a psychického vývinu — výživa, hygiena, výchova, preventívne prehliadky. Môže byť zabezpečená aj inou plnoletou osobou alebo právnickou osobou.",
    "cit": "§ 3 ods. 3 a 4 zák. 571/2009"
   },
   "bydlisko383": {
    "text": "Bydlisko na účely príspevku pri narodení = aspoň 2 z kritérií: (a) evidencia UoZ / štúdium / starostlivosť o ďalšie dieťa do 6 r., (b) dohoda s všeobecným lekárom A gynekológom, (c) povinné verejné ZP v SR, (d) škola ďalšieho dieťaťa v SR.",
    "cit": "§ 2 ods. 4, § 3 ods. 1 zák. 383/2013"
   },
   "starostlivostNahradzajucaRodicov": {
    "text": "Náhradná starostlivosť, poručníctvo s osobnou starostlivosťou, predosvojiteľská starostlivosť, neodkladné opatrenie súdu, ochranná výchova.",
    "cit": "§ 2 ods. 3 zák. 383/2013; § 1 ods. 2 zák. 627/2005"
   },
   "zivotneMinimum": {
    "text": "Referenčná veličina pre odvodené sumy (627/2005, 201/2008, valorizácia RP).",
    "cit": "zák. 601/2003, opatrenie MPSVR k 1. 7. 2026"
   },
   "hmotnaNudza": {
    "text": "Stav, keď príjem členov domácnosti nedosahuje sumy ŽM a členovia si nevedia príjem zabezpečiť. Nárok na pomoc = úhrn nárokovateľných súm (dávka + príspevky) > započítateľný príjem.",
    "cit": "§ 2, § 9 zák. 417/2013"
   },
   "vseobecnyVymeriavaciZaklad": {
    "text": "VVZ = 12-násobok priemernej mesačnej mzdy v hospodárstve SR za kalendárny rok (pre dávky 2026 je rozhodný VVZ 2024 = 12 × 1 524 € = 18 288 €).",
    "cit": "§ 11 zák. 461/2003"
   }
  }
 },
 "parametre": {
  "rok": 2026,
  "priemernaMzda2024": 1524,
  "VVZ2024": 18288,
  "maxDVZ": {
   "hodnota": 100.2083,
   "vzorec": "2 × VVZ(2024) / 365, zaokr. na 4 des. nahor",
   "cit": "§ 55 ods. 2 zák. 461/2003"
  },
  "minVZmesacny": {
   "hodnota": 762,
   "vzorec": "50 % × VVZ(2024)/12",
   "cit": "§ 138 zák. 461/2003"
  },
  "maxVZmesacny": {
   "hodnota": 16764,
   "vzorec": "11 × VVZ(2024)/12",
   "cit": "§ 138 zák. 461/2003"
  },
  "sadzby": {
   "nemocenskeZamestnanec": 0.014,
   "nemocenskeZamestnavatel": 0.014,
   "nemocenskeSZCO": 0.044,
   "nemocenskeDobrovolne": 0.044,
   "dobrovolnyBalikSpolu": 0.3315,
   "cit": "§ 130–137 zák. 461/2003"
  },
  "zivotneMinimum_od_20260701": {
   "plnoletaOsoba": 295.22,
   "dalsiaPlnoleta": 205.96,
   "nezaopatreneDieta": 134.8
  },
  "davkyHodnoty": {
   "tehotenske": {
    "percentoDVZ": 0.15,
    "minPercentoMaxDVZ": 0.1,
    "cit": "§ 47c zák. 461/2003"
   },
   "materske": {
    "percentoDVZ": 0.75,
    "cit": "§ 53 zák. 461/2003"
   },
   "nemocenske": {
    "percentoDVZ": 0.55,
    "cit": "§ 37 zák. 461/2003"
   },
   "osetrovne": {
    "percentoDVZ": 0.55,
    "maxDni": 14,
    "cit": "§ 41, § 42 zák. 461/2003"
   },
   "vyrovnavaciaDavka": {
    "percentoRozdielu": 0.55,
    "cit": "§ 47 zák. 461/2003"
   },
   "prispevokPriNarodeni": {
    "porod1az4": 829.86,
    "porod5plus": 151.37,
    "priplatokViacDeti": 75.69,
    "cit": "§ 4 zák. 383/2013"
   },
   "prispevokViacSucasneNarodenych": {
    "rocne": 110.36,
    "cit": "§ 6 zák. 383/2013"
   },
   "rodicovskyPrispevok": {
    "zakladna": 364.8,
    "poMaterskom": 500.1,
    "zvysenieZaViacDeti": 0.25,
    "znizeniePriZanedbaniSkoly": 0.5,
    "cit": "§ 4 zák. 571/2009 v spojení s opatrením 366/2025 Z. z."
   },
   "pridavokNaDieta": {
    "mesacne": 60,
    "jednorazoveZvysenie1rocnik": 110,
    "cit": "§ 8 ods. 1 zák. 600/2003"
   },
   "priplatokKPridavku": {
    "mesacne": 30,
    "cit": "§ 8 ods. 2 zák. 600/2003"
   },
   "prispevokNaStarostlivost": {
    "zariadenie": 280,
    "detskaSkupina": 160,
    "statnaMaterskaSkola": 80,
    "inaFyzickaOsobaAleboRodic": 41.1,
    "cit": "§ 5 zák. 561/2008"
   },
   "danovyBonus": {
    "do15rokov": 100,
    "od15do18": 50,
    "stropZakladuDane": "1,5 × 12 × priem. mzda spred 2 rokov (2026: 27 432 €), nad strop −1/10 prevyšenia na dieťa",
    "percentualneLimity": {
     "1": 0.29,
     "2": 0.36,
     "3": 0.43,
     "4": 0.5,
     "5": 0.57,
     "6+": 0.64
    },
    "cit": "§ 33 zák. 595/2003"
   },
   "tehotenskeStipendium": {
    "mesacne": 200,
    "cit": "§ 96b zák. 131/2002; § 149a zák. 245/2008"
   },
   "hmotnaNudza": {
    "davka": {
     "jednotlivec": 86.5,
     "jednotlivecSDietatom": 164.5,
     "dvojica": 150.3,
     "dvojicaSDietatom": 224.9,
     "jednotlivecViacAko4Deti": 240.2,
     "dvojicaViacAko4Deti": 303.2
    },
    "ochrannyPrispevok": 88.4,
    "prispevokNaDieta": 24.2,
    "aktivacny": {
     "zamestnany": 176.8,
     "vzdelavanie": 132.6,
     "obecneSluzby": 88.4
    },
    "byvanie": {
     "1": 97,
     "2": 164.7,
     "3": 209,
     "4": 253.3,
     "5+": 297.4
    },
    "cit": "§ 10–14 zák. 417/2013 (znenie od 1. 8. 2026)"
   },
   "nahradnaStarostlivost": {
    "jednorazovyPriZvereni": {
     "vzorec": "= príspevok pri narodení za 1.–4. pôrod",
     "hodnota": 829.86,
     "cit": "§ 3 ods. 6 zák. 627/2005"
    },
    "jednorazovyPriZaniku": {
     "vzorec": "10,2 × ŽM dieťaťa",
     "hodnota": 1374.96,
     "cit": "§ 4 ods. 3 zák. 627/2005"
    },
    "opakovanyDietatu": {
     "do10r": {
      "vzorec": "2 × ŽM dieťaťa",
      "hodnota": 269.6
     },
     "10az15r": {
      "vzorec": "2,3 × ŽM dieťaťa",
      "hodnota": 310.04
     },
     "nad15r": {
      "vzorec": "2,5 × ŽM dieťaťa",
      "hodnota": 337
     },
     "cit": "§ 5 ods. 3 zák. 627/2005"
    },
    "zvyseneVydavky": {
     "maxRocne": 500,
     "cit": "§ 5a zák. 627/2005"
    },
    "opakovanyRodicovi": {
     "vzorec": "1,95 × ŽM dieťaťa",
     "hodnota": 262.86,
     "cit": "§ 6 ods. 4 zák. 627/2005"
    },
    "osobitnyOpakovany": {
     "vzorec": "2,4 × ŽM dieťaťa (dieťa s ŤZP)",
     "hodnota": 323.52,
     "cit": "§ 7 zák. 627/2005"
    },
    "vzdelavanie": {
     "maxRocne": 100,
     "cit": "§ 7a zák. 627/2005"
    }
   },
   "nahradneVyzivne": {
    "sirotske": {
     "vzorec": "0,7 × ŽM dieťaťa",
     "hodnota": 94.36
    },
    "neplatenie": "vo výške súdom určeného (nezaplateného) výživného",
    "cit": "§ 4 zák. 201/2008"
   },
   "dotacie": {
    "stravaMS": 1.4,
    "stravaZS1": 2.1,
    "stravaZS2": 2.3,
    "skolskePotrebyRocne": 33.2,
    "cit": "§ 4 zák. 544/2010"
   },
   "tzp": {
    "opatrovanie_od_20260701": 729,
    "priplatokZaDietaTZP": 200,
    "osobnaAsistenciaHodina_od_20260701": 6.81,
    "cit": "zák. 447/2008, nariadenie vlády k 1. 7. 2026"
   },
   "prispevokNaPohreb": {
    "hodnota": 200,
    "cit": "§ 4 zák. 238/1998 (znenie od 1. 1. 2025)"
   },
   "siloveZlozky": {
    "materskePercentoCistehoPlatu": 1,
    "stropPercentMaxDVZ": 0.75,
    "tehotenskePercentoMaxDVZ": 0.12,
    "cit": "§ 9 ods. 3, § 10 ods. 20 zák. 328/2002",
    "poznamka": "materské = 100 % čistého denného služobného platu, najviac 75 % max. DVZ (2026: 75,1563 €/deň); tehotenské = 12 % max. DVZ (2026: 12,03 €/deň); trvania a podmienka 270 dní zhodné s 461/2003, pričom sa sčítava zabezpečenie podľa 328/2002 aj poistenie podľa 461/2003"
   },
   "socialneStipendiumVS": {
    "min": 10,
    "maxOdhad2026": 410,
    "vzorec": "príjmový test okruhu spoločne posudzovaných osôb voči hranici príjmu odvodenej zo životného minima; pri štúdiu mimo trvalého pobytu × 1,2; zaokrúhľuje sa na celé 5 € nahor",
    "cit": "§ 96 zák. 131/2002; § 2–5 vyhl. 102/2006"
   }
  }
 },
 "davky": [
  {
   "id": "tehotenske",
   "nazov": "Tehotenské",
   "zakon": "461/2003",
   "platca": "SP",
   "typ": "denna",
   "podmienky": [
    {
     "id": "tehotna",
     "text": "Poistenkyňa je tehotná",
     "cit": "§ 47a ods. 1"
    },
    {
     "id": "np270",
     "text": "270 dní nemocenského poistenia v posledných 2 rokoch pred začiatkom 27. týždňa pred PDD (štúdium sa NEzapočítava; rodičovská dovolenka áno)",
     "cit": "§ 47a ods. 1, § 49a"
    }
   ],
   "obdobie": {
    "od": "začiatok 27. týždňa pred PDD",
    "do": "skončenie tehotenstva (deň pôrodu)",
    "cit": "§ 47a ods. 2"
   },
   "suma": {
    "vzorec": "15 % DVZ / deň, najmenej 10 % maximálneho DVZ (2026: min ≈ 10,03 €/deň, max ≈ 15,04 €/deň)",
    "cit": "§ 47c"
   },
   "vztahy": {
    "vylucuje": [
     "tehotenske_stipendium"
    ],
    "poznamka": "Trvá aj počas rodičovskej dovolenky s predchádzajúcim dieťaťom (§ 47a ods. 3). Súbeh s materským je možný — tehotenské beží do pôrodu, materské od 6.–8. týždňa pred PDD."
   }
  },
  {
   "id": "tehotenske_stipendium",
   "nazov": "Tehotenské štipendium",
   "zakon": "131/2002 § 96b; 245/2008 § 149a",
   "platca": "SKOLA",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "studentka",
     "text": "Tehotná študentka VŠ alebo plnoletá tehotná žiačka SŠ (aj so štúdiom prerušeným pre tehotenstvo — len VŠ)",
     "cit": "§ 96b ods. 1, 2; § 149a ods. 1"
    },
    {
     "id": "trvalyPobyt",
     "text": "Trvalý pobyt v SR",
     "cit": "§ 96b ods. 1"
    },
    {
     "id": "bezTehotenskeho",
     "text": "Nemá nárok na výplatu tehotenského zo Sociálnej poisťovne",
     "cit": "§ 96b ods. 1"
    },
    {
     "id": "od27tyzdna",
     "text": "Začal 27. týždeň pred PDD",
     "cit": "§ 96b ods. 1"
    }
   ],
   "obdobie": {
    "od": "mesiac podania žiadosti (najskôr 27. týždeň pred PDD)",
    "do": "skončenie tehotenstva / štúdia",
    "cit": "§ 96b ods. 6, 9"
   },
   "suma": {
    "vzorec": "200 € mesačne (celý mesiac aj pri splnení časti mesiaca; aj júl a august)",
    "cit": "§ 96b ods. 3, 7"
   },
   "vztahy": {
    "vylucuje": [
     "tehotenske"
    ]
   }
  },
  {
   "id": "vyrovnavacia_davka",
   "nazov": "Vyrovnávacia dávka",
   "zakon": "461/2003",
   "platca": "SP",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "zamestnankyna",
     "text": "Zamestnankyňa preradená počas tehotenstva (alebo materstva do 9. mesiaca po pôrode) na inú prácu, lebo pôvodná je tehotným zakázaná alebo ohrozuje tehotenstvo",
     "cit": "§ 44 ods. 1, 2"
    },
    {
     "id": "nizsiPrijem",
     "text": "Po preradení bez vlastného zavinenia nižší príjem",
     "cit": "§ 44 ods. 1"
    }
   ],
   "obdobie": {
    "od": "preradenie",
    "do": "nástup na materské / koniec 9. mesiaca po pôrode",
    "cit": "§ 46"
   },
   "suma": {
    "vzorec": "55 % z rozdielu mesačného VZ (30,4167 × DVZ) a VZ po preradení",
    "cit": "§ 47"
   }
  },
  {
   "id": "materske_matka",
   "nazov": "Materské — matka",
   "zakon": "461/2003",
   "platca": "SP",
   "typ": "denna",
   "podmienky": [
    {
     "id": "np270",
     "text": "270 dní nemocenského poistenia v posledných 2 rokoch pred PÔRODOM; započítava sa štúdium na SŠ/VŠ, ktorým ZÍSKALA stupeň vzdelania, rodičovská dovolenka a všetky skončené aj trvajúce NP",
     "cit": "§ 48 ods. 1, § 49a"
    },
    {
     "id": "poistenaAleboOchranna",
     "text": "Trvá nemocenské poistenie ALEBO plynie ochranná lehota (pre tehotné 8 mesiacov po zániku NP v období 42 týždňov pred PDD)",
     "cit": "§ 30, § 32 ods. 2 písm. b), c)"
    },
    {
     "id": "szcoZaplatene",
     "text": "SZČO/dobrovoľne poistená: zaplatené poistné (dlh < 5 €) za posledných 5 rokov",
     "cit": "§ 31"
    }
   ],
   "obdobie": {
    "od": "začiatok 6. týždňa pred PDD (voliteľne až 8. týždňa); pri skoršom pôrode odo dňa pôrodu",
    "trvanie": {
     "zakladne": "34 týždňov od vzniku nároku",
     "osamela": "37 týždňov",
     "viacDeti": "43 týždňov (2+ súčasne narodené deti, stará sa aspoň o dve)"
    },
    "minimum": "nie menej ako 14 týždňov a nie menej ako 6 týždňov po pôrode",
    "mrtveDieta": "14 týždňov od vzniku nároku",
    "umrtieDietata": "do konca 2. týždňa odo dňa úmrtia",
    "cit": "§ 48 ods. 2–9"
   },
   "suma": {
    "vzorec": "75 % DVZ / deň; DVZ z rozhodujúceho obdobia (§ 54), strop 100,2083 € (2026) → max ≈ 75,16 €/deň",
    "cit": "§ 53, § 55"
   },
   "vztahy": {
    "nadvaznost": "po skončení nadväzuje rodičovský príspevok v sume 500,10 €",
    "suběhRP": "ak materské za celý mesiac < RP, ÚPSVaR dopláca rozdiel (§ 4 ods. 5 zák. 571/2009)"
   }
  },
  {
   "id": "materske_otec_14dni",
   "nazov": "Materské otca („otcovské“) — 14 dní",
   "zakon": "461/2003",
   "platca": "SP",
   "typ": "denna",
   "podmienky": [
    {
     "id": "otec",
     "text": "Otec dieťaťa, ktorý sa o dieťa stará",
     "cit": "§ 49 ods. 1, ods. 3 písm. d)"
    },
    {
     "id": "np270",
     "text": "270 dní NP v posledných 2 rokoch pred dňom žiadosti o materské",
     "cit": "§ 49 ods. 1"
    }
   ],
   "obdobie": {
    "od": "deň žiadosti (v období do 6 týždňov od pôrodu; predlžuje sa o dni hospitalizácie dieťaťa/matky)",
    "trvanie": "2 týždne (14 kalendárnych dní)",
    "cit": "§ 49 ods. 1 písm. a), ods. 3 písm. d)"
   },
   "suma": {
    "vzorec": "75 % DVZ otca / deň",
    "cit": "§ 53"
   },
   "vztahy": {
    "sucasneSMatkou": "môže bežať súčasne s materským matky (výnimka z § 52 ods. 2)",
    "neblokujeRP": "poberanie počas prvých 6 týždňov po pôrode neruší rodičovský príspevok rodiny (§ 3 ods. 11 zák. 571/2009)",
    "zapocet": "vyčerpané dni sa odpočítajú z prípadného dlhšieho materského otca (§ 49 ods. 4); 270 dní sa pri ňom už považuje za splnených (§ 49 ods. 5)"
   }
  },
  {
   "id": "materske_iny_poistenec",
   "nazov": "Materské otca / iného poistenca — dlhé (28–37 týždňov)",
   "zakon": "461/2003",
   "platca": "SP",
   "typ": "denna",
   "podmienky": [
    {
     "id": "kategoria",
     "text": "Otec po 6 týždňoch od pôrodu (ak matka nepoberá materské ani RP na to isté dieťa), otec pri úmrtí/neschopnosti matky, manžel(ka) rodiča, alebo osoba starajúca sa na základe rozhodnutia orgánu",
     "cit": "§ 49 ods. 3"
    },
    {
     "id": "np270",
     "text": "270 dní NP v posledných 2 rokoch pred dňom žiadosti (považuje sa za splnené, ak už čerpal otcovské)",
     "cit": "§ 49 ods. 1, 5"
    }
   ],
   "obdobie": {
    "trvanie": {
     "zakladne": "28 týždňov od priznania",
     "osamely": "31 týždňov",
     "viacDeti": "37 týždňov"
    },
    "maxVek": "do 3 rokov veku dieťaťa",
    "zapocet": "mínus dni vyplateného otcovského",
    "cit": "§ 49 ods. 1, 2, 4"
   },
   "suma": {
    "vzorec": "75 % DVZ / deň",
    "cit": "§ 53"
   }
  },
  {
   "id": "prispevok_pri_narodeni",
   "nazov": "Príspevok pri narodení dieťaťa",
   "zakon": "383/2013",
   "platca": "UPSVAR",
   "typ": "jednorazova",
   "opravnenaOsoba": {
    "text": "matka; otec len ak matka zomrela / je v pátraní / dieťa zverené otcovi súdom",
    "cit": "§ 2 ods. 1"
   },
   "podmienky": [
    {
     "id": "pobyt",
     "text": "Trvalý pobyt A bydlisko v SR (bydlisko = aspoň 2 zo 4 kritérií § 2 ods. 4)",
     "cit": "§ 3 ods. 1"
    },
    {
     "id": "narodenie",
     "text": "Dieťa sa narodilo; na každé dieťa len raz; pri viacpočetnom pôrode na každé dieťa",
     "cit": "§ 3 ods. 2"
    }
   ],
   "vyluky": [
    {
     "text": "neuzavretá dohoda o všeobecnej ambulantnej starostlivosti pre dieťa",
     "cit": "§ 3 ods. 3 písm. a)"
    },
    {
     "text": "súhlas s osvojením",
     "cit": "§ 3 ods. 3 písm. b)"
    },
    {
     "text": "dieťa (alebo ďalšie dieťa osoby) zverené do náhradnej starostlivosti",
     "cit": "§ 3 ods. 3 písm. c), d)"
    },
    {
     "text": "obdobná dávka už vyplatená v štáte narodenia v cudzine",
     "cit": "§ 3 ods. 3 písm. e)"
    },
    {
     "text": "maloletá matka bez priznaných rodičovských práv",
     "cit": "§ 3 ods. 3 písm. f)"
    },
    {
     "text": "matka sa od 4. mesiaca tehotenstva nezúčastňovala mesačne na preventívnych prehliadkach u gynekológa (hospitalizácia sa počíta ako účasť)",
     "cit": "§ 3 ods. 4 písm. a)"
    },
    {
     "text": "matka po pôrode opustila pôrodnicu v rozpore s predpismi",
     "cit": "§ 3 ods. 4 písm. b)"
    }
   ],
   "suma": {
    "vzorec": "829,86 € (1.–4. pôrod) / 151,37 € (5.+ pôrod); + 75,69 € za každé dieťa pri viacpočetnom pôrode. Počíta sa poradie PÔRODU (nie dieťaťa); pôrody pred 1. 4. 2022, pri ktorých sa dieťa nedožilo 28 dní, sa nezohľadňujú.",
    "cit": "§ 4, § 16a ods. 2"
   },
   "lehoty": {
    "vyplata": "automaticky (konanie začína zápisom do registra), najneskôr mesiac po preukázaní",
    "zanik": "12 mesiacov od narodenia",
    "cit": "§ 9, § 10, § 12 ods. 2"
   }
  },
  {
   "id": "prispevok_viac_deti",
   "nazov": "Príspevok na viac súčasne narodených detí",
   "zakon": "383/2013",
   "platca": "UPSVAR",
   "typ": "rocna",
   "podmienky": [
    {
     "id": "trojcata",
     "text": "Súčasne narodené 3+ deti ALEBO v priebehu 2 rokov opakovane narodené dvojčatá (a viac)",
     "cit": "§ 1 ods. 3"
    },
    {
     "id": "vek",
     "text": "Najmenej 3 z detí vo veku najviac 15 rokov",
     "cit": "§ 5 ods. 1 písm. a)"
    },
    {
     "id": "starostlivost",
     "text": "Riadna starostlivosť + trvalý pobyt a bydlisko v SR",
     "cit": "§ 5 ods. 1 písm. b), c)"
    }
   ],
   "suma": {
    "vzorec": "110,36 € na každé dieťa raz ročne",
    "cit": "§ 6"
   },
   "lehoty": {
    "uplatnenie": "každý rok k výročiu narodenia; prvýkrát pri 1. roku veku; nárok zaniká 6 mesiacov od vzniku",
    "cit": "§ 8 ods. 2, § 10 ods. 2"
   }
  },
  {
   "id": "rodicovsky_prispevok",
   "nazov": "Rodičovský príspevok",
   "zakon": "571/2009 + opatrenie 366/2025",
   "platca": "UPSVAR",
   "typ": "mesacna",
   "opravnenaOsoba": {
    "text": "rodič; osoba so zvereným dieťaťom; manžel(ka) rodiča v domácnosti",
    "cit": "§ 2"
   },
   "podmienky": [
    {
     "id": "starostlivost",
     "text": "Riadna starostlivosť o dieťa (možno aj prostredníctvom inej osoby/škôlky)",
     "cit": "§ 3 ods. 1 písm. a), ods. 4"
    },
    {
     "id": "pobyt",
     "text": "Trvalý alebo prechodný pobyt v SR (alebo osoba podľa koordinačných nariadení EÚ)",
     "cit": "§ 3 ods. 1 písm. b)"
    },
    {
     "id": "vekDietata",
     "text": "Dieťa do 3 rokov; do 6 rokov pri dlhodobo nepriaznivom zdravotnom stave; do 6 rokov pri zverení (max 3 roky od rozhodnutia); do 6 rokov ak neprijaté do štátnej MŠ",
     "cit": "§ 3 ods. 2"
    }
   ],
   "vyluky": [
    {
     "text": "len jeden nárok v rodine (aj pri viacerých deťoch do 3 rokov)",
     "cit": "§ 3 ods. 5"
    },
    {
     "text": "pobyt oprávnenej osoby a dieťaťa v NEčlenskom štáte bez povinného verejného ZP v SR",
     "cit": "§ 3 ods. 10"
    },
    {
     "text": "niekto z oprávnených má materské (alebo obdobnú dávku z členského štátu) vyššie ako RP — VÝNIMKA: otcovské do 6 týždňov od pôrodu",
     "cit": "§ 3 ods. 11"
    },
    {
     "text": "maloletý rodič bez priznaných rodičovských práv",
     "cit": "§ 3 ods. 12"
    },
    {
     "text": "nevypláca sa do nečlenského štátu",
     "cit": "§ 5 ods. 4"
    }
   ],
   "suma": {
    "vzorec": "364,80 € / 500,10 € mesačne (vyššia suma, ak sa oprávnenej osobe pred vznikom nároku vyplácalo na TOTO dieťa materské alebo obdobná dávka členského štátu); + 25 % na každé ďalšie súčasne narodené dieťa; 50 % pri zanedbávaní školskej dochádzky iného dieťaťa; ak materské za celý mesiac < RP → dopláca sa rozdiel",
    "cit": "§ 4 ods. 1–5; opatrenie 366/2025 Z. z."
   },
   "valorizacia": {
    "text": "k 1. 1. koeficientom rastu životného minima, opatrenie MPSVR",
    "cit": "§ 4 ods. 7"
   },
   "vyplata": {
    "text": "mesačne pozadu, za celý mesiac aj pri splnení časti mesiaca; retroaktívny nárok zaniká po 6 mesiacoch",
    "cit": "§ 5 ods. 2, 3; § 6 ods. 1"
   }
  },
  {
   "id": "pridavok_na_dieta",
   "nazov": "Prídavok na dieťa",
   "zakon": "600/2003",
   "platca": "UPSVAR",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "nezaopatrene",
     "text": "Starostlivosť o nezaopatrené dieťa (od narodenia do konca povinnej školskej dochádzky, pri štúdiu max do 25 rokov)",
     "cit": "§ 3, § 7 ods. 1 písm. a)"
    },
    {
     "id": "pobyt",
     "text": "Trvalý/prechodný pobyt oprávnenej osoby v SR",
     "cit": "§ 7 ods. 1 písm. b)"
    }
   ],
   "vyluky": [
    {
     "text": "dieťa v zariadení SPOD z rozhodnutia súda / vo väzbe / vo výkone trestu",
     "cit": "§ 7 ods. 2"
    },
    {
     "text": "pobyt v nečlenskom štáte bez povinného verejného ZP v SR",
     "cit": "§ 7 ods. 3"
    }
   ],
   "suma": {
    "vzorec": "60 € mesačne; + 110 € jednorazovo za mesiac prvého nástupu do 1. ročníka ZŠ",
    "cit": "§ 8 ods. 1"
   },
   "vyplata": {
    "text": "na žiadosť; mesačne pozadu; retroaktívne max 6 mesiacov",
    "cit": "§ 9, § 11, § 15"
   }
  },
  {
   "id": "priplatok_k_pridavku",
   "nazov": "Príplatok k prídavku na dieťa",
   "zakon": "600/2003",
   "platca": "UPSVAR",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "pridavok",
     "text": "Nárok na prídavok",
     "cit": "§ 7a písm. a)"
    },
    {
     "id": "dochodca",
     "text": "Poberateľ starobného/invalidného (>70 %)/výsluhového dôchodku alebo príspevku na opatrovanie (aj druhá spoločne posudzovaná osoba)",
     "cit": "§ 7a písm. b)"
    },
    {
     "id": "bezPrace",
     "text": "Nevykonáva zárobkovú činnosť (ani ďalšia osoba s možným daňovým bonusom)",
     "cit": "§ 7a písm. c)"
    },
    {
     "id": "bezBonusu",
     "text": "Na dieťa nebol priznaný daňový bonus",
     "cit": "§ 7a písm. d)"
    }
   ],
   "suma": {
    "vzorec": "30 € mesačne",
    "cit": "§ 8 ods. 2"
   },
   "vztahy": {
    "vylucuje": [
     "danovy_bonus"
    ]
   }
  },
  {
   "id": "prispevok_na_starostlivost",
   "nazov": "Príspevok na starostlivosť o dieťa",
   "zakon": "561/2008",
   "platca": "UPSVAR",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "praca",
     "text": "Rodič vykonáva zárobkovú činnosť alebo študuje dennou formou na SŠ/VŠ (za zárobkovú činnosť sa považuje aj materské max 6 týždňov od narodenia ďalšieho dieťaťa)",
     "cit": "§ 4 ods. 1 písm. a), ods. 3"
    },
    {
     "id": "starostlivostSR",
     "text": "Starostlivosť poskytuje poskytovateľ na území SR",
     "cit": "§ 4 ods. 1 písm. b)"
    },
    {
     "id": "pobyt",
     "text": "Rodič aj dieťa majú pobyt v SR; dieťa do 3 rokov (6 pri dlhodobo nepriaznivom stave)",
     "cit": "§ 4 ods. 1 písm. c), d); § 1 ods. 1"
    }
   ],
   "vyluky": [
    {
     "text": "za mesiac, za ktorý sa poskytuje rodičovský príspevok (alebo obdobná dávka v cudzine) — vzájomne výlučné",
     "cit": "§ 4 ods. 4, § 6 ods. 4"
    },
    {
     "text": "materské po 6 týždňoch od narodenia ďalšieho dieťaťa poberané oprávnenou osobou/manželom za celý mesiac",
     "cit": "§ 4 ods. 4"
    }
   ],
   "suma": {
    "vzorec": "úhrada podľa dohody s poskytovateľom max 280 € (zariadenie/živnosť), max 160 € (detská skupina), max 80 € (štátna MŠ), 41,10 € (iná FO bez oprávnenia alebo rodič pri zárobkovej činnosti); na KAŽDÉ dieťa",
    "cit": "§ 5 ods. 1, § 3 ods. 3"
   }
  },
  {
   "id": "danovy_bonus",
   "nazov": "Daňový bonus na dieťa",
   "zakon": "595/2003 § 33",
   "platca": "FS",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "prijmy",
     "text": "Zdaniteľné príjmy zo závislej činnosti (§ 5) alebo z podnikania (§ 6 ods. 1, 2)",
     "cit": "§ 33 ods. 1"
    },
    {
     "id": "dieta",
     "text": "Vyživované nezaopatrené dieťa v domácnosti (vlastné, osvojené, manželovo, zverené); od mesiaca narodenia",
     "cit": "§ 33 ods. 2, 5"
    },
    {
     "id": "rezident",
     "text": "≥ 90 % celosvetových príjmov zo zdrojov v SR (pri nerezidentoch)",
     "cit": "§ 33 ods. 9"
    }
   ],
   "suma": {
    "vzorec": "100 €/mes. (dieťa do 15 r.) / 50 €/mes. (15–18 r.); strop % zo základu dane podľa počtu detí (29–64 %, možno pripočítať základ dane druhého rodiča); nad základ dane 27 432 € (2026) sa znižuje o 1/10 prevyšenia na každé dieťa",
    "cit": "§ 33 ods. 1, 6, 8, 11"
   },
   "vztahy": {
    "vylucuje": [
     "priplatok_k_pridavku"
    ],
    "jedenRodic": "uplatňuje len jeden daňovník; poradie matka → otec → iná osoba",
    "cit": "§ 33 ods. 4"
   }
  },
  {
   "id": "hmotna_nudza",
   "nazov": "Pomoc v hmotnej núdzi (dávka + príspevky)",
   "zakon": "417/2013",
   "platca": "UPSVAR",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "nudza",
     "text": "Príjem domácnosti pod ŽM a nemožnosť zabezpečiť si príjem (u tehotnej ženy od 8. týždňa pred PDD a osamelého rodiča s dieťaťom do 1 roka sa možnosť práce neskúma)",
     "cit": "§ 2, § 7 ods. 2 písm. e), f)"
    },
    {
     "id": "vypocet",
     "text": "Nárok = (dávka + ochranný + aktivačný + príspevok na dieťa + bývanie) > započítateľný príjem; vypláca sa rozdiel",
     "cit": "§ 9 ods. 1"
    }
   ],
   "zapocitatelnyPrijem": {
    "text": "materské len 75 %; prídavok na dieťa a príspevok na starostlivosť sa NEzapočítavajú; rodičovský príspevok sa započítava; mzda sa započítava len čiastočne (25–100 % nezapočítané podľa mesiaca)",
    "cit": "§ 4 ods. 3"
   },
   "zlozky2026": {
    "davka": "86,50–303,20 € podľa zloženia domácnosti",
    "ochrannyPrispevok": "88,40 € (tehotná od 8. týždňa pred PDD; osamelý rodič s dieťaťom do 1 roka)",
    "prispevokNaDieta": "24,20 € (dieťa v MŠ/škole/príprave na povolanie)",
    "byvanie": "97–297,40 €",
    "cit": "§ 10–14"
   },
   "vztahy": {
    "suvisiace": "dotácie na stravu a školské potreby (544/2010); jednorazová dávka obce (§ 17)"
   }
  },
  {
   "id": "nahradna_starostlivost",
   "nazov": "Príspevky na podporu náhradnej starostlivosti (7 druhov)",
   "zakon": "627/2005",
   "platca": "UPSVAR",
   "typ": "kombinovana",
   "podmienky": [
    {
     "id": "zverenie",
     "text": "Dieťa zverené súdom inej osobe než rodičovi (náhradná osobná starostlivosť, pestúnstvo, poručníctvo, neodkladné opatrenie, predosvojiteľská starostlivosť)",
     "cit": "§ 1 ods. 2"
    }
   ],
   "druhy": [
    {
     "id": "jednorazovy_zverenie",
     "text": "Jednorazový pri zverení = 829,86 € (dieťa z ústavnej starostlivosti alebo dieťa < 6 mes. bez vyplateného príspevku pri narodení)",
     "cit": "§ 3"
    },
    {
     "id": "jednorazovy_zanik",
     "text": "Jednorazový pri zániku (plnoletosť, trvanie ≥ 1 rok) = 10,2 × ŽM dieťaťa = 1 374,96 €",
     "cit": "§ 4"
    },
    {
     "id": "opakovany_dietatu",
     "text": "Opakovaný dieťaťu = 269,60 € (do 10 r.) / 310,04 € (10–15) / 337,00 € (15+) mesačne, mínus príjem dieťaťa (výživné, sirotský dôchodok)",
     "cit": "§ 5"
    },
    {
     "id": "zvysene_vydavky",
     "text": "Na zvýšené výdavky (zdravie/umenie/šport) max 500 €/rok",
     "cit": "§ 5a"
    },
    {
     "id": "opakovany_rodicovi",
     "text": "Opakovaný náhradnému rodičovi = 262,86 € mesačne (nie pre príbuzného v priamom rade; kráti sa pri materskom/RP; súrodenecké zvýšenia +0,975 až +5,85 × ŽM)",
     "cit": "§ 6"
    },
    {
     "id": "osobitny",
     "text": "Osobitný opakovaný (dieťa s ŤZP) = 323,52 € mesačne / dieťa",
     "cit": "§ 7"
    },
    {
     "id": "vzdelavanie",
     "text": "Príspevok na vzdelávanie náhradného rodiča max 100 €/rok",
     "cit": "§ 7a"
    }
   ]
  },
  {
   "id": "nahradne_vyzivne",
   "nazov": "Náhradné výživné",
   "zakon": "201/2008",
   "platca": "UPSVAR",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "dovod",
     "text": "Povinná osoba neplatí súdom určené výživné (podaná exekúcia / vymáhanie v cudzine), ALEBO dieťaťu nevznikol nárok na sirotský dôchodok, ALEBO sirotský dôchodok < 0,7 × ŽM dieťaťa",
     "cit": "§ 2 ods. 1 písm. a)"
    },
    {
     "id": "skola",
     "text": "Dieťa si plní povinné predprimárne vzdelávanie / školskú dochádzku",
     "cit": "§ 2 ods. 1 písm. b)"
    },
    {
     "id": "pobyt",
     "text": "Trvalý pobyt v SR; zdržiava sa v SR (alebo štúdium v cudzine)",
     "cit": "§ 2 ods. 1 písm. c), d)"
    }
   ],
   "suma": {
    "vzorec": "vo výške súdom určeného (nezaplateného) výživného; sirotské prípady: 0,7 × ŽM dieťaťa = 94,36 € (resp. dorovnanie)",
    "cit": "§ 4"
   }
  },
  {
   "id": "dotacie_strava_skola",
   "nazov": "Dotácie na stravu a školské potreby",
   "zakon": "544/2010",
   "platca": "UPSVAR",
   "typ": "denna",
   "podmienky": [
    {
     "id": "skupina",
     "text": "Dieťa v poslednom ročníku MŠ alebo v ZŠ (strava „obedy zadarmo“ podľa aktuálnych podmienok § 4 ods. 3); školské potreby pre deti z rodín v HN alebo pod ŽM",
     "cit": "§ 4"
    }
   ],
   "suma": {
    "vzorec": "strava: 1,40 €/deň (MŠ), 2,10 €/deň (I. stupeň ZŠ), 2,30 €/deň (II. stupeň); školské potreby max 33,20 €/rok",
    "cit": "§ 4 ods. 6, 10"
   }
  },
  {
   "id": "tzp_kompenzacie",
   "nazov": "Peňažné príspevky na kompenzáciu ŤZP dieťaťa",
   "zakon": "447/2008",
   "platca": "UPSVAR",
   "typ": "kombinovana",
   "podmienky": [
    {
     "id": "tzp",
     "text": "Dieťa posúdené ako fyzická osoba s ŤZP (miera funkčnej poruchy ≥ 50 %)",
     "cit": "§ 2, § 3"
    }
   ],
   "druhy": [
    {
     "id": "opatrovanie",
     "text": "Peňažný príspevok na opatrovanie: 729 €/mes. + príplatok 200 €/mes. za opatrovanie dieťaťa s ŤZP (od 1. 7. 2026); opatrovaný musí mať ≥ 6 rokov",
     "cit": "§ 40"
    },
    {
     "id": "asistencia",
     "text": "Osobná asistencia 6,81 €/hod. (od 1. 7. 2026), spravidla od 6 rokov",
     "cit": "§ 20–23"
    },
    {
     "id": "ine",
     "text": "Ďalšie príspevky: kúpa/úprava pomôcky, úprava bytu, preprava, kompenzácia zvýšených výdavkov (diéta, hygiena, opotrebovanie...)",
     "cit": "§ 24 a nasl."
    }
   ],
   "vztahy": {
    "poznamka": "Štát platí dôchodkové poistenie opatrujúcej osobe; príspevok na opatrovanie vylučuje osobitný opakovaný príspevok náhradnému rodičovi (§ 7 ods. 3 zák. 627/2005)"
   }
  },
  {
   "id": "prispevok_na_pohreb",
   "nazov": "Príspevok na pohreb",
   "zakon": "238/1998",
   "platca": "UPSVAR",
   "typ": "jednorazova",
   "podmienky": [
    {
     "id": "pohreb",
     "text": "Plnoletá osoba zabezpečila pohreb",
     "cit": "§ 2, § 3 ods. 1 písm. a)"
    },
    {
     "id": "pobyt",
     "text": "Trvalý/prechodný pobyt oprávnenej osoby v SR; trvalý pobyt zomretého v SR (pri prechodnom aj pochovanie v SR)",
     "cit": "§ 3 ods. 1 písm. b), c)"
    }
   ],
   "suma": {
    "vzorec": "200 € jednorazovo; na zomretého len raz",
    "cit": "§ 4 ods. 1, § 3 ods. 2"
   },
   "lehoty": {
    "zanik": "1 rok od pohrebu",
    "cit": "§ 10"
   }
  },
  {
   "id": "materske_silove_zlozky",
   "nazov": "Tehotenské a materské policajtky / profesionálnej vojačky",
   "zakon": "328/2002",
   "platca": "MV SR / MO SR (útvar sociálneho zabezpečenia)",
   "typ": "denna",
   "podmienky": [
    {
     "id": "sluzba",
     "text": "Nemocenské zabezpečenie podľa 328/2002 (štátna služba policajta / profesionálneho vojaka); nevykonáva štátnu službu pre tehotenstvo/starostlivosť",
     "cit": "§ 10 ods. 1 písm. a)"
    },
    {
     "id": "270",
     "text": "270 dní v posledných 2 rokoch pred pôrodom — sčítava sa zabezpečenie podľa 328/2002 AJ nemocenské poistenie podľa 461/2003; rodičovská dovolenka sa počíta",
     "cit": "§ 10 ods. 1 písm. b)"
    }
   ],
   "suma": {
    "vzorec": "materské = 100 % čistého denného služobného platu, najviac 75 % maximálneho DVZ podľa 461/2003 (2026: max 75,1563 €/deň); tehotenské = 12 % max. DVZ (2026: 12,03 €/deň) od 27. týždňa pred PDD; otcovské 2 týždne a dlhé materské 28/31/37 týždňov zrkadlia § 49 zák. 461/2003",
    "cit": "§ 9 ods. 3, § 10 ods. 3–14, 20"
   },
   "vztahy": {
    "poznamka": "8-mesačná ochrana po zániku zabezpečenia počas tehotenstva (§ 9 ods. 5, § 10 ods. 16, 21); štátne sociálne dávky (RP, prídavok, príspevok pri narodení) patria rovnako ako civilistom"
   }
  },
  {
   "id": "socialne_stipendium_vs",
   "nazov": "Sociálne štipendium študentky/študenta VŠ",
   "zakon": "131/2002 § 96 + vyhl. 102/2006",
   "platca": "SKOLA",
   "typ": "mesacna",
   "podmienky": [
    {
     "id": "student",
     "text": "Študent dennej formy prvého VŠ štúdia; nárokový",
     "cit": "§ 96 zák. 131/2002"
    },
    {
     "id": "prijem",
     "text": "Rozhodujúci príjem okruhu spoločne posudzovaných osôb pod hranicou príjmu (odvodená zo životného minima; dieťa študenta zvyšuje okruh aj hranicu)",
     "cit": "§ 2–4 vyhl. 102/2006"
    }
   ],
   "suma": {
    "vzorec": "10 € až ≈ 410 €/mes. (2026) podľa príjmu; pri štúdiu mimo miesta trvalého pobytu × 1,2; priznáva vysoká škola na žiadosť",
    "cit": "§ 5 vyhl. 102/2006"
   },
   "vztahy": {
    "poznamka": "kombinovateľné s tehotenským štipendiom aj rodičovským príspevkom; narodenie dieťaťa zväčšuje okruh spoločne posudzovaných osôb, takže nárok sa môže zvýšiť"
   }
  },
  {
   "id": "zdravotne_poistenie_stat",
   "nazov": "Zdravotné poistenie platí štát (nie je dávka, ale nárok)",
   "zakon": "580/2004",
   "platca": "zdravotná poisťovňa",
   "typ": "informativna",
   "podmienky": [
    {
     "id": "kategorie",
     "text": "Poistencom štátu je: nezaopatrené dieťa (vrátane novorodenca), poberateľ rodičovského príspevku, poberateľ materského, osoba celodenne a riadne sa starajúca o dieťa do 6 rokov",
     "cit": "§ 11 ods. 7 zák. 580/2004"
    }
   ],
   "suma": {
    "vzorec": "rodič na materskej/rodičovskej neplatí zdravotné odvody — platí ich štát; novorodenca treba prihlásiť do zdravotnej poisťovne do 60 dní",
    "cit": "§ 6 ods. 1, § 11 ods. 7"
   }
  },
  {
   "id": "pracovnopravna_ochrana",
   "nazov": "Materská, otcovská a rodičovská dovolenka (pracovné právo)",
   "zakon": "311/2001 Zákonník práce",
   "platca": "zamestnávateľ (neplatené voľno s ochranou)",
   "typ": "informativna",
   "podmienky": [
    {
     "id": "dovolenky",
     "text": "Materská dovolenka 34/37/43 týždňov; otcovská dovolenka 28/31/37 týždňov od narodenia; rodičovská dovolenka do 3 rokov (do 6 pri dlhodobo nepriaznivom stave)",
     "cit": "§ 166 ods. 1, 2"
    },
    {
     "id": "ochrana",
     "text": "Zákaz výpovede v ochrannej dobe; oznámenie zamestnávateľovi min. 1 mesiac vopred; pri mŕtvom dieťati materská dovolenka 14 týždňov; pri úmrtí dieťaťa ešte 2 týždne",
     "cit": "§ 64, § 166 ods. 3, § 168 ods. 3, 5"
    }
   ],
   "suma": {
    "vzorec": "počas dovolenky patria dávky zo sociálneho poistenia (materské) a štátne dávky (RP) — mzda nepatrí",
    "cit": "—"
   }
  },
  {
   "id": "statne_dochodkove_poistenie",
   "nazov": "Štát platí dôchodkové poistenie za rodiča (nie je dávka, ale nárok)",
   "zakon": "461/2003",
   "platca": "SP",
   "typ": "informativna",
   "podmienky": [
    {
     "id": "starostlivost",
     "text": "Riadna a osobná starostlivosť o dieťa do 6 rokov (do 18 pri dlhodobo nepriaznivom stave); trvalý pobyt; prihláška sa považuje za podanú, ak trvá nárok na RP",
     "cit": "§ 15 ods. 1 písm. c), d), ods. 2"
    }
   ],
   "suma": {
    "vzorec": "štát odvádza starobné aj invalidné poistenie z VZ = 60 % priemernej mzdy — roky rodičovstva sa počítajú do dôchodku",
    "cit": "§ 138 ods. 20 (v znení čl. II zák. 600/2003)"
   }
  }
 ],
 "kolizie": [
  {
   "pravidlo": "materské vs. rodičovský príspevok",
   "text": "RP nepatrí, ak niektorá oprávnená osoba má materské vyššie ako RP; ak je materské nižšie, dopláca sa rozdiel. Výnimka: otcovské (14 dní do 6 týždňov od pôrodu) RP neruší.",
   "cit": "§ 3 ods. 11, § 4 ods. 5 zák. 571/2009"
  },
  {
   "pravidlo": "rodičovský príspevok vs. príspevok na starostlivosť",
   "text": "Za ten istý mesiac len jeden z nich.",
   "cit": "§ 4 ods. 4, § 6 ods. 4 zák. 561/2008"
  },
  {
   "pravidlo": "daňový bonus vs. príplatok k prídavku",
   "text": "Príplatok k prídavku patrí len ak nebol priznaný daňový bonus; ak sa bonus dodatočne prizná, príplatok sa vracia.",
   "cit": "§ 7a písm. d), § 13 ods. 5 zák. 600/2003"
  },
  {
   "pravidlo": "tehotenské vs. tehotenské štipendium",
   "text": "Štipendium len ak nie je nárok na výplatu tehotenského; súbeh sa vracia.",
   "cit": "§ 96b ods. 1, 11 zák. 131/2002"
  },
  {
   "pravidlo": "materské vs. nemocenské",
   "text": "Za dni nároku na materské nepatrí nemocenské; PN tehotnej sa mení na materské od 6. týždňa pred PDD, ak vznikol nárok.",
   "cit": "§ 34 ods. 6, § 35 zák. 461/2003"
  },
  {
   "pravidlo": "materské len raz",
   "text": "Za to isté obdobie len jednému poistencovi — výnimka: otcovské popri materskom matky.",
   "cit": "§ 52 ods. 2 zák. 461/2003"
  },
  {
   "pravidlo": "príspevok pri narodení vs. jednorazový príspevok pri zverení",
   "text": "Dieťaťu do 6 mesiacov zverenému náhradnému rodičovi patrí jednorazový príspevok len ak nebol vyplatený príspevok pri narodení.",
   "cit": "§ 3 ods. 3 zák. 627/2005"
  },
  {
   "pravidlo": "hmotná núdza — započítanie",
   "text": "Do príjmu domácnosti sa nezapočítava prídavok na dieťa, príplatok, príspevok na starostlivosť, daňový bonus (nie je príjem podľa § 4); materské len 75 %; RP sa započítava.",
   "cit": "§ 4 zák. 417/2013"
  },
  {
   "pravidlo": "RP jeden na rodinu",
   "text": "Aj pri viacerých deťoch do 3 rokov len jeden RP (zvyšuje sa len pri súčasne narodených).",
   "cit": "§ 3 ods. 5, § 4 ods. 2 zák. 571/2009"
  },
  {
   "pravidlo": "striedavá osobná starostlivosť",
   "text": "RP, prídavok aj príplatok sa vyplácajú podľa písomnej dohody rodičov; bez dohody striedavo v pomere určenej striedavej starostlivosti (pri spoločnej starostlivosti po 3 mesiacoch).",
   "cit": "§ 3 ods. 6–8 zák. 571/2009; § 2 ods. 5–7 zák. 600/2003"
  },
  {
   "pravidlo": "úmrtie dieťaťa",
   "text": "Materské trvá do konca 2. týždňa od úmrtia (pri mŕtvo narodenom dieťati 14 týždňov od vzniku nároku); RP zaniká smrťou dieťaťa; vzniká nárok na príspevok na pohreb 200 €.",
   "cit": "§ 48 ods. 7, 8 zák. 461/2003; § 6 ods. 2 písm. b) zák. 571/2009; § 4 zák. 238/1998"
  },
  {
   "pravidlo": "koordinácia EÚ pri práci v inom členskom štáte",
   "text": "Rodinné dávky (RP, prídavok, bonus) prednostne vypláca štát výkonu zárobkovej činnosti; SR dopláca rozdiel, ak sú slovenské sumy vyššie. Výplata sa môže zastaviť, kým rozhodne inštitúcia druhého štátu.",
   "cit": "nariadenie (ES) 883/2004 čl. 67–68; § 5 ods. 5 písm. b) zák. 571/2009; § 11 ods. 6 písm. c) zák. 600/2003"
  },
  {
   "pravidlo": "systém 328/2002 vs. 461/2003",
   "text": "Policajti a profesionálni vojaci majú tehotenské a materské zo sociálneho zabezpečenia podľa 328/2002 (vypláca ministerstvo), nie zo Sociálnej poisťovne; obdobia oboch systémov sa na 270 dní sčítavajú.",
   "cit": "§ 9, § 10 zák. 328/2002"
  },
  {
   "pravidlo": "tehotenské štipendium vs. sociálne štipendium",
   "text": "Nie sú vzájomne výlučné — študentka môže poberať obe (tehotenské štipendium vylučuje len tehotenské zo SP).",
   "cit": "§ 96, § 96b zák. 131/2002"
  }
 ]
};
