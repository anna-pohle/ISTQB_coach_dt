# ISTQB CTFL v4.0.2 – Vollständiges Lernkompendium (Deutsch)

> **Zweck:** Dieses Dokument fasst den gesamten Prüfungsstoff des ISTQB Certified Tester Foundation Level (CTFL) v4.0.2 zusammen – basierend auf dem offiziellen deutschsprachigen Lehrplan, den GTB Sample Exams (Sets A–F) und deren Musterlösungen. Es eignet sich als Prompt-Vorlage für KI-gestützte Erstellung von Lerngrafiken, Mindmaps oder Karteikarten.
>
> **Umfang:** ~10–15 A4-Seiten | **Prüfung:** 40 Fragen, 65% zum Bestehen, 60 Min.
>
> **Kapitel-Farbkodierung (App-konform):**
> - Kap.1 Grün `#10b981` | Kap.2 Blau `#3b82f6` | Kap.3 Violett `#8b5cf6`
> - Kap.4 Pink `#ec4899` | Kap.5 Orange `#f97316` | Kap.6 Gelb `#eab308`

---

## Kapitelübergreifende Zusammenhänge (Backbone)

Die sechs Kapitel bilden **keinen linearen Ablauf**, sondern ein **Netz aus Konzepten**, die sich gegenseitig bedingen:

```
SDLC-Kontext (Kap.2) ──bestimmt──▶ Teststrategie (Kap.5)
       │                                    │
       ▼                                    ▼
Testprozess (Kap.1) ◀──steuert── Risikomanagement (Kap.5)
       │
       ├── Statisches Testen (Kap.3) ◀── früheste Aktivität
       ├── Testanalyse & -entwurf (Kap.4) ── Verfahren anwenden
       └── Testdurchführung ── unterstützt durch ──▶ Werkzeuge (Kap.6)
                                                         │
                                          ◀── Ergebnisse fließen zurück in ──▶ Berichte (Kap.5)
```

**Schlüssel-Verknüpfungen:**
- **Kap.1↔Kap.2:** Die 7 Grundsätze (1) gelten in jedem SDLC (2). „Frühes Testen" (Grundsatz 3) = Shift-Left (2.1.5).
- **Kap.1↔Kap.3:** Statisches Testen (3) ist Teil des Testprozesses (1.4), findet Fehlerzustände direkt (ohne Ausführung).
- **Kap.1↔Kap.5:** Testprozess-Aktivitäten (1.4) werden durch Testkonzept (5.1) geplant und durch Metriken (5.3) überwacht.
- **Kap.2↔Kap.4:** Teststufen (2.2) bestimmen, welche Testverfahren (4) sinnvoll sind (z.B. White-Box bei Komponententest).
- **Kap.2↔Kap.5:** SDLC-Modell (2.1) beeinflusst Testplanung (5.1) und Priorisierung (5.1.5).
- **Kap.3↔Kap.6:** Statische Analyse (3.3) wird durch Werkzeuge (6.1) automatisiert (z.B. SonarQube, Linter).
- **Kap.4↔Kap.5:** Risikoanalyse (5.2) bestimmt Testintensität; Überdeckungsmaße (4.3) dienen als Endekriterien (5.1.3).
- **Kap.4↔Kap.6:** Testautomatisierung (6.2) implementiert Testverfahren (4) maschinell.
- **Kap.5↔Kap.6:** Testmanagement-Tools (6.1) unterstützen Planung, Überwachung und Berichterstattung (5).

---

## Kapitel 1: Grundlagen des Testens (~8 Prüfungsfragen)

### 1.1 Was ist Testen?

**Kernaussage:** Testen ist ein **Prozess** (nicht eine einzelne Aktivität), der auf den SDLC abgestimmt sein muss. Er umfasst statische und dynamische Aktivitäten.

**Zentrale Begriffe und ihre Beziehungen:**

```
Verifizierung ──────────────────────── Validierung
"Bauen wir es RICHTIG?"              "Bauen wir das RICHTIGE?"
(gegen Spezifikation)                (gegen Benutzerbedürfnisse)
        │                                     │
        ▼                                     ▼
Statischer Test ◀──────────▶ Dynamischer Test
(ohne Ausführung:              (mit Ausführung:
 Reviews, Analyse)              Testverfahren)
        │                            │
        └────────── TESTEN ──────────┘
                     │
              ≠ Debugging
              (Tester FINDEN,
               Entwickler BEHEBEN)
```

**Testziele:** Bewertung, Fehlerfindung, Überdeckung sicherstellen, Risiko verringern, Vertrauen aufbauen.

> **⚠️ Prüfungsfalle:** „Nachweisen, dass keine Fehler vorhanden sind" ist **KEIN** erreichbares Testziel (Grundsatz 1). Auch „alle Kombinationen testen" ist unmöglich (Grundsatz 2). Richtig: „Risiko verringern und Vertrauen aufbauen."

> **⚠️ Prüfungsfalle – Testen vs. Debugging:**
> - Testen = Fehler **FINDEN** (Fehlerwirkungen auslösen / Fehlerzustände identifizieren)
> - Debugging = Ursache **FINDEN** und **BEHEBEN** (Entwickleraufgabe)
> - Testen ist **keine** Fehlervermeidung!

### 1.2 Warum ist Testen notwendig?

**Fehlerkette** (Kausalmodell – prüfungskritisch!):

```
Grundursache ──▶ Fehlhandlung ──▶ Fehlerzustand ──▶ Fehlerwirkung
(mangelnde        (menschlicher    (Bug im Code/     (sichtbares
 Schulung)         Irrtum, z.B.     Dokument,         Symptom: System
                   '>' statt '>=')  existiert still)   zeigt falsches
                                                       Ergebnis)
```

> **Beispiel:** Entwickler ist müde (Grundursache) → tippt `>` statt `>=` (Fehlhandlung) → Code enthält `if (x > 10)` statt `if (x >= 10)` (Fehlerzustand) → User gibt 10 ein, wird abgelehnt (Fehlerwirkung).

> **⚠️ Prüfungsfalle:** „Failure" = Fehlerwirkung (was der Nutzer sieht), „Defect/Bug" = Fehlerzustand (was im Code steht), „Error/Mistake" = Fehlhandlung (was der Mensch falsch gemacht hat). Nicht verwechseln!

**Testen vs. Qualitätssicherung (QS):**
- **Testen** = Qualitäts**steuerung** (QC) = produktorientiert, korrigierend → „Ist das Ding kaputt?"
- **QS** = prozessorientiert, präventiv → „Warum bauen wir kaputte Dinge?"

### 1.3 Die sieben Grundsätze des Testens

| # | Grundsatz | Kernaussage | Prüfungsrelevanz |
|---|-----------|-------------|------------------|
| 1 | Anwesenheit, nicht Abwesenheit | Testen kann Fehler **zeigen**, nicht deren Abwesenheit **beweisen** | Jede Aussage „keine Fehler nachweisen" = FALSCH |
| 2 | Vollständigkeit unmöglich | Alle Kombinationen testen ist nicht machbar | → Risikobasiertes Testen |
| 3 | Frühes Testen | Shift-Left: Fehler früh finden = billiger | Verknüpfung zu Kap.2 (Shift-Left) |
| 4 | Fehlerhäufung | 20% Module = 80% Fehler (Pareto) | „Bug gefunden? Such in der Nähe!" |
| 5 | Pestizid-Paradoxon | Gleiche Tests → keine neuen Fehler | Tests müssen **regelmäßig angepasst** werden |
| 6 | Kontextabhängigkeit | Sicherheitskritisch ≠ E-Commerce | Kein „One Size Fits All" |
| 7 | Trugschluss: Keine Fehler = brauchbar | Fehlerfreiheit ≠ Benutzerzufriedenheit | → Validierung! Abnahmetest einbeziehen |

> **⚠️ Prüfungsfalle – Grundsatz 5 vs. 7:** Szenario „Regressionstests finden keine neuen Fehler" → Grundsatz 5 (Pestizid). **Nicht** verwechseln mit Grundsatz 7 (Trugschluss).

### 1.4 Testprozess

**Aktivitäten und ihre Arbeitsergebnisse (Testmittel):**

| Aktivität | Frage | Erzeugt (Testmittel) |
|-----------|-------|---------------------|
| **Planung** | Wie organisieren? | Testkonzept |
| **Überwachung/Steuerung** | Sind wir auf Kurs? | Testfortschrittsbericht |
| **Analyse** | WAS testen? | Priorisierte Testbedingungen |
| **Entwurf** | WIE testen? | Testüberdeckungskriterien, Testfälle |
| **Realisierung** | In welcher Reihenfolge? | Testausführungsplan |
| **Durchführung** | Jetzt testen! | Testergebnisse, Fehlermeldungen |
| **Abschluss** | Was nehmen wir mit? | Testabschlussbericht, Änderungsanforderungen |

> **⚠️ Prüfungsfalle – Aktivitäten zuordnen:**
> - „Testbedingung definieren" → **Testanalyse** (nicht Entwurf!)
> - „Grenzwerte ableiten" → **Testentwurf** (nicht Analyse!)
> - „Aufwand schätzen" → **Testplanung** (nicht Analyse!)
> - „Testdaten-Werkzeug" → **Testentwurf + Testrealisierung** (nicht Überwachung!)

**Verfolgbarkeit:** Verknüpft Testbasis ↔ Testmittel ↔ Ergebnisse. Ermöglicht: Überdeckungsbewertung, Auswirkungsanalyse bei Änderungen, verständliche Berichte.

### 1.5 Rollen, Skills, Unabhängigkeit

**Zwei Hauptrollen:**
- **Testmanagement:** Planung, Überwachung, Steuerung, Abschluss → Koordination + Berichterstattung an Stakeholder
- **Testen:** Analyse, Entwurf, Realisierung, Durchführung → operative Testarbeit

**Whole-Team-Ansatz:** Alle im Team sind für Qualität verantwortlich. Tester + Fachbereich → Abnahmetests erstellen (nicht Teststrategie!).

> **⚠️ Prüfungsfalle:** „Testteam trägt Verantwortung für Qualität" → FALSCH. Qualität = Verantwortung ALLER.

**Unabhängigkeit:**
- **Vorteil:** Andere Perspektive, hinterfragt Annahmen des Entwicklers
- **Nachteil:** Gefahr der Isolation, „Wir gegen Die"-Denken

---

## Kapitel 2: Testen im SDLC (~6 Prüfungsfragen)

### 2.1 SDLC-Modelle und Testen

```
Sequenziell (V-Modell, Wasserfall)    Iterativ/Inkrementell (Agile, Scrum)
├── Phasen nacheinander               ├── Kurze Zyklen (Sprints)
├── Dynamische Tests erst SPÄT         ├── Häufiges Testen pro Iteration
├── Mehr formale Dokumentation        ├── Weniger Doku, mehr Kommunikation
└── Statische Tests FRÜH möglich      └── CI/CD fördert Automatisierung
```

**Gute Praxis (gilt für ALLE SDLCs):**
- Zu **jeder Entwicklungsaktivität** gibt es eine entsprechende **Testaktivität**
- Testanalyse + Testentwurf beginnen in der **jeweiligen Entwicklungsphase**

**Test-First-Ansätze:**

| Ansatz | Beschreibung | Testbasis |
|--------|--------------|-----------|
| **TDD** | Tests ZUERST schreiben, dann Code | Komponententests |
| **ATDD** | Tests aus **Akzeptanzkriterien** als Teil des **Systementwurfs** | Akzeptanzkriterien |
| **BDD** | Tests im **GIVEN/WHEN/THEN**-Format | Gewünschtes Verhalten |

> **⚠️ Prüfungsfalle – TDD/ATDD/BDD verwechseln:**
> - „GIVEN/WHEN/THEN" → **BDD** (nicht ATDD!)
> - „Aus Akzeptanzkriterien als Teil des Systementwurfs" → **ATDD**
> - „Tests zuerst, dann Code inkrementell" → **TDD**
> - „Komponententestgetriebene Entwicklung" → **existiert nicht!**

**Shift-Left:** Testaktivitäten **früher** im SDLC durchführen (Reviews, TDD, statische Analyse).

> **⚠️ Prüfungsfalle:** Shift-Left ≠ Automatisierung! Es geht um den **Zeitpunkt**, nicht die **Art** des Testens. „Nicht-funktionale Tests erst auf Systemtest-Ebene" = **KEIN** Shift-Left.

**DevOps:** Fördert CI/CD, schnelles Feedback, Testautomatisierung. Ersetzt aber **nicht** die Unabhängigkeit des Testens.

**Retrospektiven:** Zweck = **kontinuierliche Prozessverbesserung** (nicht Lob, nicht Kundenfeedback).

### 2.2 Teststufen

```
Komponententest (Unit) ──▶ Komponentenintegrationstest ──▶ Systemtest ──▶ Abnahmetest
  │                           │                              │               │
  Isolierte Komponente        Schnittstellen                 Gesamtsystem    Benutzerbedürfnisse
  Entwickler testet           zwischen Komponenten           gegen Spec      Kunde/Fachbereich
  White-Box typisch           API, Datenfluss                Black-Box       Validierung!
```

> **⚠️ Prüfungsfalle – Teststufen zuordnen:**
> - „Fehler in isolierter Komponente" → **Komponententest**
> - „Kommunikation zwischen Komponenten" → **Integrationstest**
> - „Nicht korrekt implementierte User-Story" → **Systemtest**
> - „Geschäftsanforderungen abweichend" → **Abnahmetest** (nicht Systemtest!)

### 2.3 Testarten & Wartungstest

**Testarten** (können auf jeder Teststufe angewendet werden):
- **Funktional:** WAS das System tut (Black-Box)
- **Nicht-funktional:** WIE es funktioniert (Performance, Usability, Sicherheit)
- **Black-Box:** Spezifikation/Verhalten, ohne Code
- **White-Box:** Code/Struktur wird einbezogen

**Fehlernachtest vs. Regressionstest:**
1. Erst **Fehlernachtest** → „Ist DER Bug jetzt weg?"
2. Dann **Regressionstest** → „Neues kaputt durch Änderung?"

**Wartungstest:** Bei Änderung, Migration oder Ablösung eines Systems. Typischer Auslöser: Datenmigration bei Systemablösung.

---

## Kapitel 3: Statisches Testen (~2 Prüfungsfragen)

### 3.1 Statisch vs. Dynamisch

| | Statischer Test | Dynamischer Test |
|--|----------------|-----------------|
| **Ausführung?** | NEIN (Code/Doku lesen) | JA (Software läuft) |
| **Findet** | Fehlerzustände DIREKT | Fehlerwirkungen (Symptome) |
| **Wann?** | Sehr FRÜH möglich | Braucht ausführbaren Code |
| **Methoden** | Reviews, Statische Analyse | Testverfahren (Kap. 4) |

**Vorteil statischer Tests:** Frühe Fehlererkennung, kostengünstig, findet Inkonsistenzen in Anforderungen, verbessert Kommunikation.

> **⚠️ Einziger Nachteil laut Lehrplan:** „Bewertung und Behebung kann aufwendig sein."

### 3.2 Reviews

**Reviewarten (Formalitätsgrad aufsteigend):**

| Reviewart | Leitung | Hauptzweck | Erkennungsmerkmal |
|-----------|---------|------------|-------------------|
| **Informell** | Keiner/Peer | Schnelles Feedback | Keine formale Sitzung |
| **Walkthrough** | **AUTOR** | Kommunikation/Schulung | Autor leitet! |
| **Technisches Review** | **Moderator** | Konsens, techn. Probleme | Moderator + Konsens |
| **Inspektion** | **Moderator** | Fehlerfindung | **Metriken** gesammelt! |

> **⚠️ Prüfungsfalle:** „Wer leitet?" → Walkthrough = **AUTOR**, alle anderen = **Moderator**. „Metriken" in der Antwort → **Inspektion**.

**Reviewprozess:** Planung → Reviewbeginn → Individuelles Review → Kommunikation & Analyse → Behebung → Berichterstattung

**Rollen:** Manager (Ressourcen), Autor (Arbeitsergebnis), Moderator (Leitung), Gutachter (Prüfung), Protokollant

**Erfolgsfaktoren:** Kleine Arbeitsprodukte, klare Ziele, ausreichend Zeit, Checklisten.

> **⚠️ Prüfungsfalle:** „Management bei Befund-Kommunikation beteiligt" = **KEIN** Erfolgsfaktor (führt zu politischem Druck)!

### 3.3 Statische Analyse

Werkzeuggestützt (automatisch): Findet nicht erreichbaren Code, undefinierte Variablen, Coding-Standard-Verletzungen. → Verknüpfung zu Kap.6 (Testwerkzeuge).

---

## Kapitel 4: Testanalyse und -entwurf (~12 Prüfungsfragen)

### Drei Kategorien von Testverfahren

```
Testverfahren
├── Black-Box (Testbasis: SPEZIFIKATION)
│   ├── Äquivalenzklassenbildung
│   ├── Grenzwertanalyse
│   ├── Entscheidungstabellentest
│   └── Zustandsübergangstest
├── White-Box (Testbasis: CODE)
│   ├── Anweisungstest → Anweisungsüberdeckung
│   └── Zweigtest → Zweigüberdeckung
└── Erfahrungsbasiert (Testbasis: ERFAHRUNG)
    ├── Intuitive Testfallermittlung (Error Guessing)
    ├── Explorativer Test
    └── Checklistenbasierter Test
```

> **⚠️ Prüfungsfalle:** Was unterscheidet die drei Kategorien? → Die **TESTBASIS** (nicht Teststufe, Testobjekt oder SDLC)!

### 4.1 Black-Box-Testverfahren

#### Äquivalenzklassenbildung (ÄK)

**Prinzip:** Eingaben in Klassen einteilen, die gleiches Verhalten erwarten lassen. **Ein** repräsentativer Wert pro Klasse.

> **Beispiel:** Zapfsäule, gültig 0,1–50,0 Gallonen → 3 ÄK: ungültig niedrig (<0,1), gültig (0,1–50,0), ungültig hoch (>50,0). **Minimal 3 Testfälle:** z.B. 0,0 / 20,0 / 60,0.

> **⚠️ Prüfungsfalle:** „Minimale Anzahl" = genau **1 Wert pro Klasse** (auch ungültige!). Nicht mehr.

#### Grenzwertanalyse (GWA)

**2-Wert-Analyse:** Pro Grenze **2 Werte** = Grenzwert + direkter Nachbar aus angrenzender Klasse.
**3-Wert-Analyse:** Pro Grenze **3 Werte** = Grenzwert + beide Nachbarn.

> **Beispiel:** Bestellmenge 0,5–25,0 (Genauigkeit 0,1):
> - Untere Grenze: **0,4** (ungültig) + **0,5** (gültig)
> - Obere Grenze: **25,0** (gültig) + **25,1** (ungültig)
> - 2-Wert-GWA: **4 Werte total** (0,4; 0,5; 25,0; 25,1)

> **⚠️ Prüfungsfalle:** 6 Werte = 3-Wert-Analyse, **nicht** 2-Wert! Häufigster Fehler in der Prüfung.

#### Entscheidungstabellentest

**Aufbau:** Spalten = Regeln (Testfälle), Zeilen = Bedingungen + Aktionen.
- J = Ja, N = Nein, - = irrelevant
- Testfälle zählen: Nur **durchführbare** Spalten!

> **⚠️ Prüfungsfalle:** Auf **logische Machbarkeit** prüfen! Z.B.: „Kein Ziel vereinbart (N), aber Ziel erreicht (J)" → logisch UNMÖGLICH.

#### Zustandsübergangstest

**Überdeckungskriterien:**
- **Alle Zustände:** Jeder Zustand mindestens 1× besucht
- **0-Switch-Überdeckung:** Jeder **gültige Übergang** (Pfeil) mindestens 1× durchlaufen
- **Alle Übergänge:** Gültige **UND** ungültige Übergänge (nur 1 ungültiger pro Testfall!)

> **⚠️ Prüfungsfalle:** „0-Switch" = gültige **Übergänge** (Pfeile), nicht Zustände! Zustandsüberdeckung ≠ Übergangsüberdeckung.

### 4.2 White-Box-Testverfahren

#### Anweisungsüberdeckung

**Formel:** (ausgeführte Anweisungen ÷ ausführbare Anweisungen) × 100%

> **Beispiel:** Code mit `if/else`: Testfall `x=5` durchläuft Zeilen 1→2→3 = 3 von 4 ausführbaren Anweisungen = 75%. (`else` ist **keine** ausführbare Anweisung!)

#### Zweigüberdeckung

**Formel:** (ausgeführte Zweige ÷ Gesamtzahl Zweige) × 100%

Jede `if`-Bedingung hat **zwei** Zweige (TRUE + FALSE). **100% Zweig → 100% Anweisung** (aber nicht umgekehrt!).

> **⚠️ Prüfungsfalle:** Ein Testfall kann **100% Anweisungsüberdeckung** erreichen, aber **<100% Zweigüberdeckung**! Beispiel: Code ohne `else`-Block → Testfall `x=5` deckt alle Anweisungen ab, aber nur den TRUE-Zweig.

#### Schwäche von White-Box

White-Box prüft **vorhandenen Code**. Was **nicht implementiert** wurde, kann White-Box **nicht finden** → dafür braucht man Anforderungs-Traceability (Black-Box/Verfolgbarkeit).

### 4.3 Erfahrungsbasierte Testverfahren

| Verfahren | Wann einsetzen? | Basis |
|-----------|----------------|-------|
| **Error Guessing** | Wissen über typische Fehler | Vergangene Fehlerzustände |
| **Exploratives Testen** | Wenig Spezifikation, viel Fachwissen, wenig Zeit | Gleichzeitiges Lernen + Testen |
| **Checklistenbasiert** | Erfahrung, Risiken | Checklisten (regelmäßig aktualisieren!) |

> **⚠️ Prüfungsfalle – Explorativer Test:** Richtig wählen bei „wenig Spezifikation + enger Zeitplan + Detailwissen". **Nicht** bei „viel Zeit und ausführliche Spezifikation".

### 4.4 Kollaborative Testansätze

**User-Storys – Die 3 Cs:**
- **Card** = Medium (Karte)
- **Conversation** = Erklärung der Nutzung
- **Confirmation** = Akzeptanzkriterien

**INVEST-Prinzip** (gute User-Storys): Independent, Negotiable, Valuable, Estimable, Small, Testable

**Akzeptanzkriterien – Zwei Formate:**
- **Szenarioorientiert:** Gegeben/Wenn/Dann (BDD-Format)
- **Regelorientiert:** Listen, Tabellen

**ATDD-Reihenfolge:** 1) Positive Testfälle → 2) Negative Testfälle → 3) Nicht-funktionale Tests

---

## Kapitel 5: Management der Testaktivitäten (~10 Prüfungsfragen)

### 5.1 Testplanung

**Testkonzept:** Übergeordnetes strategisches Dokument mit Testzielen, Umfang, Ansatz, Ressourcen, Zeitplan.

> **⚠️ Prüfungsfalle:** „100% Zweigüberdeckung muss erreicht werden" → gehört zum **Testansatz** im Testkonzept (nicht Testumgebung/Risikoverzeichnis).

**Eingangs- und Endekriterien:**
- **Eingangskriterien** (Entry) = „Dürfen wir starten?" (Testumgebung bereit, Build verfügbar)
- **Endekriterien** (Exit) = „Sind wir fertig?" (Überdeckung erreicht, keine kritischen offenen Fehler)
- Agil: „Definition of Ready" / „Definition of Done"

### 5.1.1 Schätztechniken

| Technik | Beschreibung |
|---------|-------------|
| **Drei-Punkt-Schätzung** | E = (O + 4×W + P) ÷ 6 |
| **Planungspoker** (Wideband Delphi) | Jeder schätzt unabhängig → Diskussion bei Abweichung → erneut bis Konsens |
| **Extrapolation** | E(n) = A(n-1) (nächste Schätzung = letzter tatsächlicher Wert) |
| **Verhältnisschätzung** | Basierend auf Verhältnissen zu ähnlichen Projekten |

> **Rechenbeispiel Drei-Punkt:** O=2, W=11, P=14 → E = (2 + 44 + 14) ÷ 6 = **10**
> ⚠️ Nicht einfacher Durchschnitt: (2+11+14)÷3 = 9 → **FALSCH!**

> **⚠️ Prüfungsfalle – Planungspoker:** Ziel = **Konsens**, nicht Mehrheitsentscheidung. Jeder schätzt **unabhängig**, nicht beeinflusst.

### 5.1.2 Priorisierung

**Regel:** Erst **Abhängigkeiten** erfüllen, dann nach **Priorität** sortieren.

> **Beispiel:** TF1 (Hoch, abhängig von TF4) → TF4 muss **VOR** TF1 kommen, auch wenn TF4 niedrigere Priorität hat!

### 5.1.3 Testpyramide & Testquadranten

**Testpyramide (Cohn):**
```
         ╱  E2E-Tests  ╲     wenige, langsam, komplex
        ╱  Service-Tests ╲    mittlere Anzahl
       ╱   Unit-Tests     ╲   viele, schnell, isoliert
```

**Testquadranten (Marick):**

|  | Team-unterstützend | Produkt-kritisierend |
|--|-------------------|---------------------|
| **Geschäftlich** | **Q2:** Funktionale Tests | **Q3:** Explorative Tests, Usability, UAT |
| **Technisch** | **Q1:** Unit/Integrationstests | **Q4:** Performance, Sicherheit, Zuverlässigkeit |

> **⚠️ Prüfungsfalle:** Usability ist **Q3** (geschäftlich, kritisierend), **NICHT** Q4!

### 5.2 Risikomanagement

**Formel:** Risikoniveau = Eintrittswahrscheinlichkeit × Schadensausmaß

**Projektrisiko vs. Produktrisiko:**
- **Projektrisiko:** Termin, Budget, Ressourcen, Scope Creep, Drittanbieter-Probleme
- **Produktrisiko:** Funktionsfehler, langsame Antwortzeit, Sicherheitslücken

> **⚠️ Prüfungsfalle:** „Scope Creep" = **Projektrisiko** (nicht Produktrisiko). „Langsame Antwortzeit" = **Produktrisiko**.

**Risikoanalyse beeinflusst Testgründlichkeit:**
- Hohes Risiko → gründlichere Tests, früher testen
- Niedriges Risiko → weniger gründlich

**Risikosteuerung:** Testen = **aktive Risikominderung** (nicht Risikoakzeptanz!).

### 5.3 Testüberwachung, -steuerung und Berichte

**Überwachung** = Messen & Berichten (Ist-Zustand) | **Steuerung** = Eingreifen & Korrigieren

**Testmetriken:** Projektfortschritt, Testfortschritt, Produktqualität (MTTF), Fehlerzustände (DDP), Überdeckung, Kosten.

**Zwei Berichtsarten:**

| | Testfortschrittsbericht | Testabschlussbericht |
|--|------------------------|---------------------|
| **Wann?** | Regelmäßig (täglich/wöchentlich) | Einmalig am Ende einer Teststufe |
| **Zweck** | Laufende Steuerung | Zusammenfassung, Lessons Learned |
| **Baut auf** | Metriken, aktueller Stand | Fortschrittsberichten + Abschlussdaten |

### 5.4 Konfigurationsmanagement

Stellt sicher, dass die **richtigen Versionen** von Testobjekten und Testware zusammen verwendet werden.

> **⚠️ Prüfungsfalle – Typisches Szenario:** „Test besteht in Dev, scheitert in Test" → Verdacht: **KM-Problem** (falsche Versionen)!

### 5.5 Fehlermanagement

**Pflichtinhalte eines Fehlerberichts:** Eindeutige ID, Titel, Datum, Autor, Testobjekt-ID, Schweregrad, Priorität, **Schritte zur Reproduktion** (PFLICHT!), erwartetes vs. tatsächliches Ergebnis, Testumgebung.

> **⚠️ Prüfungsfalle:** „Was fehlt oft?" → **Testumgebung** und **Testobjekt-Version** (häufiger als „Name des Testers").

---

## Kapitel 6: Testwerkzeuge (~2 Prüfungsfragen)

### 6.1 Werkzeugkategorien

| Kategorie | Beispiele | Unterstützte Aktivität |
|-----------|-----------|----------------------|
| **Testmanagement** | Jira, TestRail, Zephyr | Planung, Überwachung, Steuerung |
| **Statische Analyse** | SonarQube, ESLint | Vor der Ausführung (→ Kap.3) |
| **Testentwurf/-realisierung** | Testdaten-Generatoren | Entwurf + Realisierung |
| **Testdurchführung** | Selenium, Cypress, Playwright | Testausführung |
| **Performance** | JMeter, Gatling, LoadRunner | Nicht-funktionale Tests |
| **CI/CD** | Jenkins, GitLab CI, GitHub Actions | Continuous Integration |

> **⚠️ Prüfungsfalle:** Testdaten-Werkzeuge → **Testentwurf + Testrealisierung** (nicht Testüberwachung!).

### 6.2 Nutzen und Risiken der Testautomatisierung

**Nutzen:** Zeitersparnis, Konsistenz, Wiederholbarkeit, objektive Bewertung, bessere Regression.

**Risiken:**
- **Unrealistische Erwartungen** (Hauptrisiko!)
- Unterschätzte Einführungskosten
- Wartungsaufwand
- Abhängigkeit vom Werkzeug

> **⚠️ Prüfungsfalle:** „Erhöhte Geschwindigkeit führt zu Qualitätsproblemen" = **KEIN** typisches Risiko. „Unrealistische Erwartungen" = DAS Risiko.

---

## Anhang A: Prüfungsfallen-Schnellreferenz

| Falsche Aussage | Warum falsch? | Richtige Antwort |
|----------------|--------------|-----------------|
| „Nachweisen, dass keine Fehler" | Grundsatz 1 | „Risiko verringern, Vertrauen aufbauen" |
| „Alle Kombinationen testen" | Grundsatz 2 | Risikobasiertes Testen |
| „Testen = Fehlervermeidung" | Testen = Fehler FINDEN | Debugging = Fehler BEHEBEN |
| „Shift-Left = Automatisierung" | Shift-Left = ZEITPUNKT | Testaktivitäten FRÜHER durchführen |
| „GIVEN/WHEN/THEN = ATDD" | Das ist BDD! | ATDD = aus Akzeptanzkriterien |
| „Komponententestgetriebene Entwicklung" | Existiert nicht! | TDD, ATDD, BDD |
| „White-Box findet fehlende Implementierung" | Prüft nur vorhandenen Code | Anforderungs-Traceability nötig |
| „Walkthrough: Moderator leitet" | Autor leitet! | Moderator leitet: Tech. Review, Inspektion |
| „Management bei Befund-Kommunikation" | Politischer Druck | Management stellt nur Ressourcen |
| „Usability = Q4 (technisch)" | Q4 = Performance/Security | Usability = Q3 (geschäftlich) |
| „100% Anweisung = 100% Zweig" | Anweisung < Zweig | 100% Zweig → 100% Anweisung (nicht umgekehrt!) |
| „Testteam = Qualitätsverantwortung" | Whole-Team-Ansatz! | Qualität = ALLE verantwortlich |
| „Planungspoker = Mehrheitsentscheidung" | Konsens durch Diskussion | Jeder schätzt unabhängig → Konsens |
| „Einfacher Durchschnitt bei Drei-Punkt" | W wird 4× gewichtet | E = (O + 4×W + P) ÷ 6 |

---

## Anhang B: Formelsammlung

| Formel | Anwendung |
|--------|----------|
| **E = (O + 4×W + P) ÷ 6** | Drei-Punkt-Schätzung |
| **Risikoniveau = Wahrscheinlichkeit × Auswirkung** | Risikobewertung |
| **Anweisungsüberdeckung = (ausgeführte Anw. ÷ ausführbare Anw.) × 100%** | White-Box-Metrik |
| **Zweigüberdeckung = (ausgeführte Zweige ÷ Gesamtzweige) × 100%** | White-Box-Metrik |
| **2-Wert-GWA: 2 Werte pro Grenze** (Grenzwert + Nachbar) | Testfallentwurf |
| **3-Wert-GWA: 3 Werte pro Grenze** (Grenzwert + beide Nachbarn) | Testfallentwurf |
| **ÄK-Überdeckung: min. 1 Testfall pro Klasse** (gültig + ungültig) | Testfallentwurf |
| **Zustandsübergangs-Überdeckung: Übergänge (Pfeile) zählen** | 0-Switch-Coverage |

---

## Anhang C: Begriffslandkarte (Glossar der Zusammenhänge)

```
Testbasis (Anforderungen, Code, Erfahrung)
    │
    ├──analysiert durch──▶ Testanalyse → erzeugt Testbedingungen
    │                                          │
    │                              ◀──leiten ab──▶ Testentwurf → erzeugt Testfälle, Überdeckungskriterien
    │                                                   │
    │                                        Testverfahren anwenden:
    │                                        ├── Black-Box (ÄK, GWA, DT, ZÜ)
    │                                        ├── White-Box (Anweisung, Zweig)
    │                                        └── Erfahrungsbasiert (EG, ET, CL)
    │                                                   │
    │                              ◀──bereitet vor──▶ Testrealisierung → Testausführungsplan
    │                                                   │
    │                              ◀──führt aus──▶ Testdurchführung → Testergebnisse
    │                                                   │
    │                                          Fehlerwirkung gefunden?
    │                                          ├── JA → Fehlerbericht → Debugging → Fehlernachtest
    │                                          └── NEIN → weiter / Endekriterien prüfen
    │
    └──überwacht durch──▶ Metriken → Testberichte → Stakeholder
```

---

*Erstellt als Prompt-Vorlage für KI-gestützte Lerngrafik-Erstellung. Basierend auf ISTQB CTFL v4.0.2 Lehrplan (DE) und GTB Sample Exams A–F.*
