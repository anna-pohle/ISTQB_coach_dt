/**
 * ISTQB CTFL v4.0 Prüfungsfragen - Offizielle GTB Sample Exams
 * NUR DEUTSCHE FRAGEN: Ausschließlich deutsche GTB Sample Exams (Sets A–F DE).
 * Quelle: German Testing Board (https://www.gtb.de)
 * Automatisch extrahiert aus den offiziellen Probeprüfungen Sets A-F
 * 
 * WICHTIG: Diese Fragen dürfen nicht in echten Zertifizierungsprüfungen verwendet werden!
 * 
 * Struktur jeder Frage:
 * - id: Eindeutige ID (z.B. "a-1" für Set A, Frage 1)
 * - source: Quellangabe (GTB Sample Exam A/B/C/D/E/F)
 * - lo: Lernziel-Referenz (z.B. "FL-1.1.1")
 * - kLevel: Kognitive Stufe (K1=Erinnern, K2=Verstehen, K3=Anwenden)
 * - chapter: Kapitel-Nummer (1-6)
 * - text: Fragentext
 * - hint: Hinweis zur Antwortauswahl
 * - answers: Array der 4 Antwortmöglichkeiten
 * - correct: Index der korrekten Antwort (0-3)
 * - feedback: Objekt mit Erklärungen
 *   - trap: Warum die falschen Antworten verlockend sind
 *   - principle: Das grundlegende Prinzip hinter der Frage
 *   - explanation: Begründung für die richtige Antwort
 *   - reference: Verweis auf den Lehrplan
 */

const examQuestions = Object.freeze([
    // === KAPITEL 1: Grundlagen des Testens ===
    {
        id: "gtb-a-1",
        source: "GTB Sample Exam A",
        lo: "FL-1.1.1",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt ein erreichbares Testziel?",
        hint: "Denke an die Grundsätze des Testens: Was kann Testen NICHT leisten? Welche Aussagen versprechen zu viel?",
        answers: [
            "Es lässt sich nachweisen, dass das zu prüfende System keine Fehlerzustände mehr hat.",
            "Es lässt sich nachweisen, dass es nach der produktiven Inbetriebnahme des Systems keine Fehlerwirkungen geben wird.",
            "Die Risikostufe des Testobjekts ist verringert und Vertrauen in das Qualitätsniveau ist aufgebaut.",
            "Durch eine Überprüfung lässt sich feststellen, dass alle Kombinationen von Eingabewerten getestet wurden."
        ],
        correct: 2,
        feedback: {
            trap: "Option a) und b) verstoßen gegen Grundsatz 1 (Testen zeigt Anwesenheit von Fehlern, nicht deren Abwesenheit). Option d) verstößt gegen Grundsatz 2 (Vollständiges Testen ist unmöglich – alle Kombinationen können nie getestet werden).",
            principle: "Testen kann nicht beweisen, dass keine Fehler vorhanden sind – nur vorhandene Fehler aufzeigen.",
            explanation: "c) ist RICHTIG: Durch das Testen werden Fehler aufgedeckt, was das Risiko verringert und gleichzeitig mehr Vertrauen in die Qualität des Testobjekts schafft. Dies ist ein realistisches, erreichbares Testziel gemäß Lehrplan.",
            reference: "Lehrplan 1.1.1, Aufzählungspunkt 4 + 8 / Grundsätze 1.3"
        }
    },
    {
        id: "gtb-a-2",
        source: "GTB Sample Exam A",
        lo: "FL-1.1.2",
        kLevel: 2,
        chapter: 1,
        text: "Was ist der Hauptunterschied zwischen Testen und Debuggen?",
        hint: "Wer macht was? Tester vs. Entwickler - welche Aktivität gehört zu wem?",
        answers: [
            "Testen ist der Prozess der Fehlersuche, während Debugging der Prozess der Fehlerbehebung ist.",
            "Beim Testen werden Anforderungen überprüft, während beim Debugging der Entwurf überprüft wird.",
            "Testen ist der Prozess des Ausführens von Software, während das Debugging der Prozess der Analyse der Software ist.",
            "Testen ist der Prozess der Fehlervermeidung, während das Debugging der Prozess der Fehlerbeseitigung ist."
        ],
        correct: 0,
        feedback: {
            trap: "b) ist falsch – Anforderungs-/Entwurfsprüfung beschreibt weder Testen noch Debugging korrekt. c) ist falsch – Testen ist mehr als nur Ausführen, Debugging ist mehr als Analyse. d) verwechselt 'Fehlervermeidung' mit 'Fehlersuche' – Testen findet, vermeidet aber nicht aktiv.",
            principle: "Tester FINDEN Fehler (Fehlerwirkungen/Fehlerzustände), Entwickler BEHEBEN sie (Debugging).",
            explanation: "a) ist RICHTIG: Testen identifiziert Fehlerwirkungen (dynamisch) oder Fehlerzustände (statisch). Debugging ist der Prozess des Auffindens, Analysierens und Beseitigens der Ursachen – typischerweise NACH dem dynamischen Test, durchgeführt von Entwicklern.",
            reference: "Lehrplan 1.1.2"
        }
    },
    {
        id: "gtb-a-3",
        source: "GTB Sample Exam A",
        lo: "FL-1.3.1",
        kLevel: 2,
        chapter: 1,
        text: "Sie sind Mitglied eines Teams, das ein neues System testet. Ihnen ist aufgefallen, dass seit mehreren Iterationen keine Änderungen an den bestehenden Regressionstestfällen vorgenommen und keine neuen Fehler durch einen Regressionstest aufgedeckt wurden. Ihr Vorgesetzter ist zufrieden, aber Sie sind es nicht.\n\nWelcher Grundsatz des Testens erklärt Ihre Skepsis in dieser Situation AM BESTEN?",
        hint: "Was passiert, wenn man immer dieselben Tests wiederholt? Denke an das 'Pesticide Paradox'.",
        answers: [
            "Alte Tests verlieren an Wirksamkeit.",
            "Trugschluss: \"Keine Fehler\" bedeuten ein brauchbares System.",
            "Häufung von Fehlerzuständen.",
            "Vollständiges Testen ist nicht möglich."
        ],
        correct: 0,
        feedback: {
            trap: "b) (Trugschluss 'Keine Fehler') bezieht sich auf den Irrtum, dass Fehlerfreiheit = Geschäftserfolg – nicht auf sich wiederholende Tests. c) (Häufung) erklärt, wo Fehler konzentriert auftreten, nicht warum Tests ineffektiv werden. d) (Vollständigkeit) erklärt Testgrenzen, nicht Effektivitätsverlust.",
            principle: "Grundsatz 5: Tests nutzen sich ab (Pesticide Paradox).",
            explanation: "a) ist RICHTIG: Wenn dieselben Tests immer wieder wiederholt werden, finden sie irgendwann keine neuen Fehler mehr – wie Pestizide, gegen die Schädlinge resistent werden. Um neue Fehler zu finden, müssen Tests modifiziert, erweitert oder durch neue ersetzt werden.",
            reference: "Lehrplan 1.3, Grundsatz 5"
        }
    },
    {
        id: "gtb-a-4",
        source: "GTB Sample Exam A",
        lo: "FL-1.4.1",
        kLevel: 2,
        chapter: 1,
        text: "Sie arbeiten in einem Team, das eine mobile Anwendung für Essensbestellungen entwickelt. In der aktuellen Iteration hat das Team beschlossen, die Zahlungsfunktionalität zu implementieren.\n\nWelche der folgenden Aktivitäten gehören zur Testanalyse?",
        hint: "Testanalyse = WAS soll getestet werden? (Testbedingungen definieren). Unterscheide von Planung, Entwurf und Durchführung.",
        answers: [
            "Die Aufwandsschätzung für den Test der Integration der mobilen Anwendung mit dem Zahlungsdienst durchführen.",
            "Die Entscheidung, ob getestet wird, inwieweit Zahlungen zwischen mehreren Nutzern aufgeteilt werden können.",
            "Mittels Grenzwertanalyse werden die Testdaten für die Testfälle abgeleitet, die die korrekte Zahlungsabwicklung für den zulässigen minimalen Betrag überprüfen.",
            "Die Abweichung zwischen dem tatsächlichen und dem erwarteten Ergebnis nach der Ausführung eines Testfalls analysieren."
        ],
        correct: 1,
        feedback: {
            trap: "a) Aufwandsschätzung gehört zur TESTPLANUNG. c) Ableitung von Testdaten mittels Grenzwertanalyse gehört zum TESTENTWURF. d) Analyse von Testergebnissen gehört zur TESTDURCHFÜHRUNG/TESTABSCHLUSS.",
            principle: "Testanalyse = WAS soll getestet werden? (Testbedingungen definieren)",
            explanation: "b) ist RICHTIG: Die Entscheidung 'ob getestet wird, inwieweit Zahlungen aufgeteilt werden können' ist die Definition einer Testbedingung – das ist Testanalyse. Hier wird noch nicht WIE getestet wird (Entwurf), sondern nur WAS relevant ist.",
            reference: "Lehrplan 1.4.1, Aufzählungspunkte zur Testanalyse"
        }
    },
    {
        id: "gtb-a-5",
        source: "GTB Sample Exam A",
        lo: "FL-1.4.4",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN, wie ein Mehrwert durch Etablierung und Aufrechterhaltung der Verfolgbarkeit zwischen Testbasis und den Testmitteln erzielt wird?",
        hint: "Verfolgbarkeit verbindet Anforderungen mit Tests. Was kann man damit MESSEN oder NACHWEISEN?",
        answers: [
            "Wartungstests können basierend auf Änderungen der ursprünglichen Anforderungen vollständig automatisiert werden.",
            "Es kann effizienter bestimmt werden, ob die angestrebte Überdeckung auch tatsächlich erreicht wurde.",
            "Die Testmanagementrolle kann feststellen, welche Tester die Fehler mit dem höchsten Schweregrad gefunden haben.",
            "Codebereiche, die möglicherweise durch Seiteneffekte einer Änderung beeinflusst werden, können durch Regressionstests gezielt überprüft werden."
        ],
        correct: 1,
        feedback: {
            trap: "a) Verfolgbarkeit ermöglicht KEINE automatische Testautomatisierung – nur bessere Wartungsfähigkeit. c) Die Produktivität einzelner Tester ist kein Ziel der Verfolgbarkeit. d) Regressionstests und Seiteneffekte hängen von Änderungsanalyse ab, nicht primär von Verfolgbarkeit zur Testbasis.",
            principle: "Verfolgbarkeit verbindet Anforderungen mit Tests und zeigt Überdeckungsgrade.",
            explanation: "b) ist RICHTIG: Wenn Testfälle mit Anforderungen verknüpft sind (bidirektionale Verfolgbarkeit), kann EFFIZIENT festgestellt werden, ob alle Anforderungen durch Tests abgedeckt werden – die Überdeckung wird messbar.",
            reference: "Lehrplan 1.4.4, 1. Aufzählungspunkt"
        }
    },
    {
        id: "gtb-a-6",
        source: "GTB Sample Exam A",
        lo: "FL-1.4.5",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen vergleicht AM BESTEN die verschiedenen Rollen beim Testen?",
        hint: "Tester = praktische Testarbeit (Analyse, Entwurf, Ausführung). Testmanager = Koordination, Planung, Berichterstattung.",
        answers: [
            "Die Rolle des Testens führt Testfälle aus, die Testmanagementrolle plant und überwacht die Testaktivitäten und meldet die Abweichungen an alle Tester.",
            "Die Rolle des Testens führt die Aktivitäten der Testanalyse sowie des Testentwurfs aus und erstellt und führt Testfälle aus, die Testmanagementrolle koordiniert die Testressourcen und berichtet an die Stakeholder.",
            "Die Rolle des Testens entscheidet über die zu automatisierenden Tests und priorisiert Testfälle, die Testmanagementrolle analysiert Risiken und setzt Prioritäten für die Tests.",
            "Die Rolle des Testens führt statische und dynamische Komponententests durch, die Testmanagementrolle führt Systemtests und Abnahmetests durch."
        ],
        correct: 1,
        feedback: {
            trap: "Option a) weist 'Abweichungen melden' falsch zu – das macht der Tester, nicht das Testmanagement.",
            principle: "Tester = Analyse + Entwurf + Ausführung | Testmanager = Koordination + Berichterstattung",
            explanation: "Die Rolle des Testens entwirft, erstellt und führt Testfälle aus; die Testmanagementrolle koordiniert Ressourcen und berichtet an Stakeholder.",
            reference: "Lehrplan 1.4.5, 2. + 3. Absatz"
        }
    },
    {
        id: "gtb-a-7",
        source: "GTB Sample Exam A",
        lo: "FL-1.5.3",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen erklärt AM BESTEN einen Vorteil der Unabhängigkeit des Testens?",
        hint: "Warum ist ein 'frischer Blick' wertvoll? Was kann ein unabhängiger Tester, was der Entwickler selbst nicht kann?",
        answers: [
            "Der Einsatz eines unabhängigen Testteams ermöglicht es der Projektleitung, dem Testteam die Verantwortung für die Qualität des Endprodukts zu übertragen.",
            "Wenn man sich ein externes Testteam leisten kann, dann hat das den Vorteil, dass dieses externe Team nicht so leicht von den Bedenken des Projektmanagements beeinflusst werden kann.",
            "Ein unabhängiges Testteam kann getrennt von den Entwicklern arbeiten und die Kommunikation auf die Fehlerberichterstattung beschränken.",
            "Wenn Spezifikationen Mehrdeutigkeiten enthalten, treffen Entwickler Annahmen über ihre Interpretation, und ein unabhängiges Testteam kann nützlich sein, um diese Annahmen zu hinterfragen."
        ],
        correct: 3,
        feedback: {
            trap: "Option a) ist falsch – Qualität liegt in der Verantwortung ALLER, nicht nur des Testteams. Option c) beschreibt schlechte Praxis (Isolation).",
            principle: "Unabhängige Tester haben andere Perspektiven und hinterfragen Annahmen.",
            explanation: "Spezifikationen sind nie perfekt – Entwickler treffen Annahmen. Ein unabhängiges Testteam kann diese Annahmen aus anderer Perspektive prüfen.",
            reference: "Lehrplan 1.5.3, 3. Absatz"
        }
    },
    {
        id: "gtb-a-8",
        source: "GTB Sample Exam A",
        lo: "FL-1.5.2",
        kLevel: 1,
        chapter: 1,
        text: "Wie zeigt sich der Whole-Team-Ansatz in der Interaktion zwischen Testern und Fachbereichsvertretern?",
        hint: "Whole-Team = alle arbeiten ZUSAMMEN. Bei welcher Testart ist die Zusammenarbeit mit Fachbereich besonders wichtig?",
        answers: [
            "Fachbereichsvertreter entscheiden gemeinsam mit der Projektleitung über die Ansätze zur Testautomatisierung.",
            "Tester helfen Fachbereichsvertretern bei der Festlegung der Teststrategie.",
            "Die Beteiligung von Fachbereichsvertretern ist nicht Teil des Whole-Team-Ansatzes.",
            "Tester helfen Fachbereichsvertretern bei der Erstellung geeigneter Abnahmetests."
        ],
        correct: 3,
        feedback: {
            trap: "Option b) ist falsch – die Teststrategie wird mit ENTWICKLERN festgelegt, nicht mit Fachbereichsvertretern.",
            principle: "Whole-Team: Tester + Entwickler + Fachbereich arbeiten ZUSAMMEN.",
            explanation: "Tester arbeiten eng mit Fachbereichsvertretern zusammen, um ihnen bei der Erstellung geeigneter Abnahmetests zu helfen.",
            reference: "Lehrplan 1.5.2, 3. Absatz"
        }
    },

    // === KAPITEL 2: Testen im Softwareentwicklungslebenszyklus ===
    {
        id: "gtb-a-9",
        source: "GTB Sample Exam A",
        lo: "FL-2.1.2",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN eine gute Praktik für das Testen, die für alle Softwareentwicklungslebenszyklen gilt?",
        hint: "Denke an den Grundsatz 'Frühes Testen spart Zeit und Geld'. Was bedeutet das für den Zeitpunkt des Testens?",
        answers: [
            "Testen sollte erst nach Abschluss der Entwicklung durchgeführt werden.",
            "Testen sollte unter Federführung der Entwicklung durchgeführt werden.",
            "Testen sollte frühzeitig im Entwicklungsprozess beginnen.",
            "Testen sollte in einer Entwicklungstestumgebung durchgeführt werden."
        ],
        correct: 2,
        feedback: {
            trap: "Option a) widerspricht dem Shift-Left-Prinzip. Option d) kann Umgebungs-spezifische Probleme übersehen.",
            principle: "Frühes Testen spart Kosten und Zeit.",
            explanation: "Testen sollte frühzeitig beginnen, um Fehler so früh wie möglich zu erkennen und die Kosten für die Fehlerbehebung zu minimieren.",
            reference: "Lehrplan 2.1.2, 3. Aufzählungspunkt und Abschnitt 1.3"
        }
    },
    {
        id: "gtb-a-10",
        source: "GTB Sample Exam A",
        lo: "FL-2.1.3",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN den Ansatz der abnahmetestgetriebenen Entwicklung (ATDD)?",
        hint: "Bei ATDD werden Tests VOR der Implementierung aus etwas abgeleitet – aber aus was genau? Und in welcher Phase des SDLC geschieht das?",
        answers: [
            "In der ATDD werden Akzeptanzkriterien typischerweise basierend auf dem Format GIVEN/WHEN/THEN erstellt.",
            "Bei ATDD werden zunächst die Testfälle entwickelt und dann die Software inkrementell gegen die Testfälle und definierten Akzeptanzkriterien implementiert.",
            "Bei ATDD werden Tests aus Akzeptanzkriterien als Teil des Systementwurfs abgeleitet.",
            "Bei ATDD basieren die Tests auf dem gewünschten Verhalten der Software, was es für die Teammitglieder einfacher macht, die Tests zu verstehen."
        ],
        correct: 2,
        feedback: {
            trap: "Option a) beschreibt BDD (GIVEN/WHEN/THEN). Option b) beschreibt TDD. Option d) beschreibt BDD.",
            principle: "ATDD = Tests aus AKZEPTANZKRITERIEN ableiten | BDD = GIVEN/WHEN/THEN | TDD = Tests zuerst, dann Code",
            explanation: "Bei ATDD werden Tests anhand von Akzeptanzkriterien als Teil des Systementwurfs abgeleitet und erstellt.",
            reference: "Lehrplan 2.1.3, 2. aufgelisteter Ansatz"
        }
    },
    {
        id: "gtb-a-11",
        source: "GTB Sample Exam A",
        lo: "FL-2.1.5",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen ist KEIN Beispiel für den Shift-Left-Ansatz?",
        hint: "Shift-Left = Testaktivitäten FRÜHER im Prozess. Welche Option beschreibt SPÄTES Testen?",
        answers: [
            "Benutzeranforderungen werden überprüft, bevor sie von den Stakeholdern formell akzeptiert werden.",
            "Komponententestfälle werden erstellt, bevor der zugehörige Code programmiert wird.",
            "Der Performanztest einer Komponente wird während des Komponententests ausgeführt.",
            "Nicht-funktionale Tests werden, wenn möglich, beginnend auf der Ebene der Systemtests ausgeführt."
        ],
        correct: 3,
        feedback: {
            trap: "Die ersten drei Optionen sind alle Beispiele für Shift-Left. Option d) beschreibt spätes Testen – das Gegenteil von Shift-Left.",
            principle: "Shift-Left = So FRÜH wie möglich testen, nicht auf spätere Stufen warten.",
            explanation: "Option d) beschreibt spätes Testen (erst auf Systemtest-Ebene) – das ist KEIN Shift-Left, sondern das Gegenteil.",
            reference: "Lehrplan 2.1.5, 5. Aufzählungspunkt"
        }
    },
    {
        id: "gtb-a-12",
        source: "GTB Sample Exam A",
        lo: "FL-2.1.6",
        kLevel: 2,
        chapter: 2,
        text: "Welches der folgenden Argumente ist AM BESTEN geeignet, um Ihren Vorgesetzten davon zu überzeugen, am Ende eines jeden Releasezyklus eine Retrospektive durchzuführen?",
        hint: "Was ist der Hauptzweck einer Retrospektive? Denke an kontinuierliche Verbesserung.",
        answers: [
            "Retrospektiven sind heutzutage sehr beliebt und unsere Kunden würden es zu schätzen wissen.",
            "Die regelmäßige Durchführung von Retrospektiven spart dem Unternehmen Geld, da die Vertreter der Endnutzer kein unmittelbares Feedback geben.",
            "Die bei der Retrospektive festgestellten Prozessschwächen können analysiert werden und als Aufgabenliste für das Programm zur kontinuierlichen Prozessverbesserung dienen.",
            "Retrospektiven ermöglichen es dem Team, sich gegenseitig zu loben und zu motivieren."
        ],
        correct: 2,
        feedback: {
            trap: "Option a) und d) fokussieren auf soziale Aspekte, nicht auf den eigentlichen Zweck. Option b) ist falsch – Endnutzer geben kein Feedback in Retrospektiven.",
            principle: "Retrospektiven = Kontinuierliche PROZESSVERBESSERUNG",
            explanation: "Regelmäßig durchgeführte Retrospektiven mit entsprechenden Folgeaktivitäten sind entscheidend für die kontinuierliche Verbesserung von Entwicklung und Test.",
            reference: "Lehrplan 2.1.6, 2. Absatz"
        }
    },
    {
        id: "gtb-a-13",
        source: "GTB Sample Exam A",
        lo: "FL-2.2.1",
        kLevel: 2,
        chapter: 2,
        text: "Welche Arten von Fehlerzuständen (1-4) werden in welchen Teststufen (A-D) AM EHESTEN gefunden?\n\n1. Fehlerzustände, wenn das Systemverhalten von den geschäftlichen Anforderungen abweicht\n2. Fehlerzustände in der Kommunikation zwischen Komponenten\n3. Fehlerzustände in einer isolierten Komponente\n4. Fehlerzustände in einer nicht korrekt implementierten User-Story\n\nA. Komponententest | B. Komponentenintegrationstest | C. Systemtest | D. Abnahmetest",
        hint: "Überlege bei jedem Fehlertyp: In welcher Teststufe würde man das ZUERST bemerken? Geschäftliche Anforderungen werden spät geprüft, technische Details früh.",
        answers: [
            "1D, 2B, 3A, 4C",
            "1D, 2B, 3C, 4A",
            "1B, 2A, 3D, 4C",
            "1C, 2A, 3B, 4D"
        ],
        correct: 0,
        feedback: {
            trap: "b) ordnet 'isolierte Komponente' falsch dem Systemtest (C) zu – das ist Komponententest (A). c) ordnet Kommunikation falsch Komponententest (A) zu – das ist Integration (B). d) ordnet Geschäftsanforderungen falsch dem Systemtest (C) zu – das ist Abnahmetest (D).",
            principle: "Fehlertyp → Teststufe: Technisch-isoliert→A (Komponente), Schnittstellen→B (Integration), System-Funktion→C (System), Geschäftlich→D (Abnahme).",
            explanation: "a) ist RICHTIG: 1. Geschäftsanforderungen → Abnahmetest (D) – hier prüft der Kunde/Fachbereich. 2. Kommunikation zwischen Komponenten → Integrationstest (B). 3. Isolierte Komponente → Komponententest (A). 4. User-Story → Systemtest (C) – prüft Systemverhalten.",
            reference: "Lehrplan 2.2.1"
        }
    },
    {
        id: "gtb-a-14",
        source: "GTB Sample Exam A",
        lo: "FL-2.2.3",
        kLevel: 2,
        chapter: 2,
        text: "Die Teststrategie Ihres Unternehmens sieht vor, dass die Datenmigration zum Nachfolgesystem getestet werden muss, sobald ein System außer Betrieb genommen wird.\n\nMit welcher Testaktivität wird diese Anforderung AM EHESTEN erfüllt?",
        hint: "Welche Testart wird bei Änderungen, Migrationen oder Ablösungen eines Systems durchgeführt?",
        answers: [
            "Wartungstest",
            "Regressionstest",
            "Komponententest",
            "Komponentenintegrationstest"
        ],
        correct: 0,
        feedback: {
            trap: "Regressionstest prüft Seiteneffekte nach Änderungen, nicht Datenmigration bei Systemablösung.",
            principle: "Wartungstest = Test bei Änderung, Migration oder Ablösung eines Systems.",
            explanation: "Wenn ein System außer Betrieb genommen wird, ist die Datenmigration zum Nachfolgesystem ein typischer Auslöser für Wartungstests.",
            reference: "Lehrplan 2.2.3"
        }
    },

    // === KAPITEL 3: Statisches Testen ===
    {
        id: "gtb-a-15",
        source: "GTB Sample Exam A",
        lo: "FL-3.1.2",
        kLevel: 2,
        chapter: 3,
        text: "Welcher der folgenden Punkte ist ein Vorteil von frühem und häufigem Feedback durch Stakeholder?",
        hint: "Frühes Feedback = Frühe Problemerkennung. Was kann man damit vermeiden?",
        answers: [
            "Es verbessert den Testprozess für zukünftige Projekte.",
            "Es zwingt die Kunden dazu, ihre Anforderungen basierend auf den abgestimmten Risiken zu priorisieren.",
            "Nur so lässt sich die Qualität der Änderungen im Prozess messen.",
            "Es hilft, Missverständnisse bei den Anforderungen zu vermeiden."
        ],
        correct: 3,
        feedback: {
            trap: "a) Testprozess-Verbesserung ist Retrospektive, nicht Stakeholder-Feedback. b) Priorisierung ist ein separater Prozess. c) Qualitätsmessung braucht Metriken, nicht nur Feedback.",
            principle: "Frühes Feedback = Frühe Problemerkennung = Weniger Missverständnisse bei Anforderungen.",
            explanation: "d) ist RICHTIG: Frühes und häufiges Feedback ermöglicht die frühzeitige Aufdeckung potenzieller Qualitätsprobleme wie MISSVERSTANDENER ANFORDERUNGEN – bevor diese zu teuren Fehlern führen.",
            reference: "Lehrplan 3.1.2, 1. Absatz"
        }
    },
    {
        id: "gtb-a-16",
        source: "GTB Sample Exam A",
        lo: "FL-3.2.4",
        kLevel: 1,
        chapter: 3,
        text: "Die in Ihrem Unternehmen durchgeführten Reviews weisen die folgenden Eigenschaften auf:\n• Der Hauptzweck ist die Kommunikation oder die Schulung der Gutachter.\n• Die Sitzung wird vom Autor des Arbeitsergebnisses geleitet.\n• Es gibt eine individuelle Vorbereitung der Reviewer.\n• Ein Reviewbericht kann erstellt werden.\n\nWelche der folgenden Arten eines Reviews wird AM EHESTEN verwendet?",
        hint: "Wer leitet das Meeting? Bei welchem Review-Typ ist das der AUTOR? Und wann steht Schulung im Vordergrund?",
        answers: [
            "Informelles Review",
            "Walkthrough",
            "Technisches Review",
            "Inspektion"
        ],
        correct: 1,
        feedback: {
            trap: "a) Informelles Review hat keine formale Sitzung/Vorbereitung. c) Technisches Review wird von einem Moderator geleitet, nicht vom Autor, und fokussiert auf technische Korrektheit. d) Inspektion ist der formalste Typ – Autor leitet NICHT, es gibt strenge Prozesse.",
            principle: "Review-Typen: Informell (locker) → Walkthrough (Autor leitet, Schulung) → Technisch (Moderator, Korrektheit) → Inspektion (formal, streng).",
            explanation: "b) ist RICHTIG: Walkthrough-Eigenschaften: Autor leitet die Sitzung, Hauptzweck ist Kommunikation/Schulung, individuelle Vorbereitung ist optional aber möglich, Reviewbericht kann erstellt werden.",
            reference: "Lehrplan 3.2.4"
        }
    },
    {
        id: "gtb-a-17",
        source: "GTB Sample Exam A",
        lo: "FL-3.2.5",
        kLevel: 2,
        chapter: 3,
        text: "Welche der folgenden Aussagen ist KEIN Faktor, der zu einem erfolgreichen Review beiträgt?",
        hint: "Drei Optionen sind Erfolgsfaktoren, eine ist kontraproduktiv. Welche Rolle sollte Management bei Reviews spielen?",
        answers: [
            "Die Teilnehmer sollten sich ausreichend Zeit für das Review nehmen.",
            "Eine Aufteilung großer Arbeitsprodukte in kleine Teile wird empfohlen, damit die Reviewer nicht die Konzentration verlieren.",
            "Klare Ziele und messbare Endekriterien werden für das Review festgelegt.",
            "Das Management wirkt persönlich mit bei der Kommunikation der Befunde."
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) sind alle ERFOLGSFAKTOREN für Reviews: Zeit nehmen, kleine Teile, klare Ziele. Diese tragen positiv bei!",
            principle: "Management sollte Reviews UNTERSTÜTZEN (Ressourcen), aber nicht EINGREIFEN bei der Befundkommunikation.",
            explanation: "d) ist KEIN Erfolgsfaktor: Wenn Management persönlich bei der Kommunikation von Befunden mitwirkt, kann das zu politischem Druck führen – Reviewer könnten kritische Befunde zurückhalten aus Angst vor Konsequenzen.",
            reference: "Lehrplan 3.2.5"
        }
    },

    // === KAPITEL 4: Testanalyse und Testentwurf ===
    {
        id: "gtb-a-18",
        source: "GTB Sample Exam A",
        lo: "FL-4.2.1",
        kLevel: 3,
        chapter: 4,
        text: "Sie testen die Software für eine unbeaufsichtigte amerikanische Zapfsäule. Nachdem die Zapfpistole abgehoben und die gewünschte Kraftstoffsorte ausgewählt wurde, gibt der Kunde die gewünschte Kraftstoffmenge in Gallonen über ein Tastenfeld ein. Das Tastenfeld erlaubt nur die Eingabe von Ziffern. Pro Zapfvorgang kann zwischen 0,1 und 50,0 Gallonen getankt werden.\n\nWelche der folgenden Antworten repräsentiert eine minimale Menge von Eingabewerten, die alle gültigen und ungültigen Äquivalenzklassen für die Kraftstoffmenge überdeckt?",
        hint: "Identifiziere zuerst ALLE Äquivalenzklassen (gültig UND ungültig). Für eine MINIMALE Überdeckung brauchst du genau einen Testwert pro Klasse.",
        answers: [
            "0,0; 20,0; 60,0",
            "0,0; 0,1; 50,0",
            "0,0; 0,1; 50,0; 70,0",
            "-0,1; 0,0; 0,1; 49,9; 50,0; 50,1"
        ],
        correct: 0,
        feedback: {
            trap: "b) 0,0; 0,1; 50,0 deckt nur 2 Klassen – fehlt 'zu hoch'. c) 0,0; 0,1; 50,0; 70,0 hat 4 Werte statt minimal 3 (0,0 und 0,1 sind beide 'ungültig niedrig' bzw. an der Grenze). d) ist 3-Wert-GWA mit 6 Werten – nicht minimal!",
            principle: "Äquivalenzklassen: ungültig niedrig (<0,1) | gültig (0,1-50,0) | ungültig hoch (>50,0). MINIMAL = 1 Wert pro Klasse.",
            explanation: "a) ist RICHTIG: Es gibt genau 3 Äquivalenzklassen (zu klein, gültig, zu groß). MINIMAL bedeutet GENAU 1 Wert pro Klasse: 0,0 (ungültig niedrig), 20,0 (gültig), 60,0 (ungültig hoch) = 3 Werte für 3 Klassen.",
            reference: "Lehrplan 4.2.1, 5. Absatz"
        }
    },
    {
        id: "gtb-a-19",
        source: "GTB Sample Exam A",
        lo: "FL-4.2.2",
        kLevel: 3,
        chapter: 4,
        text: "Sie testen ein E-Commerce-System für Lebensmittel. Die kleinste gültige Bestellmenge ist 0,5 Einheiten und die größte gültige Bestellmenge 25,0 Einheiten. Die Genauigkeit beträgt 0,1 Einheiten.\n\nWelche der folgenden Eingabewerte decken nur die Grenzwerte mit der 2-Wert-Grenzwertanalyse für die Bestellmenge ab?",
        hint: "Bei der 2-Wert-Methode testest du pro Grenze den Grenzwert selbst UND seinen direkten Nachbarn aus der anderen Klasse. Zähle die Grenzen!",
        answers: [
            "0,3; 24,9; 25,2",
            "0,4; 0,5; 0,6; 24,9; 25,0; 25,1",
            "0,4; 0,5; 25,0; 25,1",
            "0,5; 0,6; 24,9; 25,0"
        ],
        correct: 2,
        feedback: {
            trap: "a) 0,3; 24,9; 25,2 sind keine direkten Nachbarn der Grenzen (0,3 statt 0,4, 24,9 statt 25,0). b) hat 6 Werte = 3-Wert-Analyse, nicht 2-Wert! d) 0,5; 0,6; 24,9; 25,0 hat nur gültige Werte, keine ungültigen Nachbarn.",
            principle: "2-Wert-GWA: Je Grenze GENAU 2 Werte = Grenzwert selbst + direkter ungültiger Nachbar.",
            explanation: "c) ist RICHTIG: 2 Grenzen × 2 Werte = 4 Werte total. Untere Grenze 0,5: 0,4 (ungültig, -0,1) + 0,5 (gültig). Obere Grenze 25,0: 25,0 (gültig) + 25,1 (ungültig, +0,1). Genauigkeit ist 0,1, daher ±0,1 als Nachbar.",
            reference: "Lehrplan 4.2.2, 4. Absatz"
        }
    },
    {
        id: "gtb-a-20",
        source: "GTB Sample Exam A",
        lo: "FL-4.2.3",
        kLevel: 3,
        chapter: 4,
        text: "Neu eingestellte Mitarbeitende können individuelle Ziele mit ihren Vorgesetzten vereinbaren, an deren Erreichung die Auszahlung einer Prämie gekoppelt ist. Die Prämie wird aber erst ausgezahlt, wenn sie länger als ein Jahr beschäftigt sind.\n\nWelcher der folgenden Testfälle beschreibt eine in der Praxis gültige, durchführbare Situation und fehlt in der dargestellten Entscheidungstabelle?",
        hint: "Prüfe: Welche Kombination ist realistisch UND fehlt in der Tabelle? Kann ein Ziel erreicht werden, wenn keins vereinbart wurde?",
        image: "images/a_q20.png",
        answers: [
            "Bedingung1 = 'J', Bedingung2 = 'N', Bedingung3 = 'J', Aktion = 'N'",
            "Bedingung1 = 'J', Bedingung2 = 'J', Bedingung3 = 'N', Aktion = 'J'",
            "Bedingung1 = 'N', Bedingung2 = 'N', Bedingung3 = 'J', Aktion = 'N'",
            "Bedingung1 = 'J', Bedingung2 = 'J', Bedingung3 = 'N', Aktion = 'N'"
        ],
        correct: 3,
        feedback: {
            trap: "a) Kein Ziel vereinbart (N), aber Ziel erreicht (J) – logisch UNMÖGLICH! b) Ziel nicht erreicht (N), aber Prämie (J) – fachlich FALSCH! c) Kein Ziel vereinbart und keins erreicht, aber >1 Jahr – existiert vielleicht, ist aber die gegebene 'N-N-N→N' Kombination.",
            principle: "Bei Entscheidungstabellen: Prüfe jede Kombination auf 1) logische Durchführbarkeit 2) fachliche Korrektheit 3) Vollständigkeit.",
            explanation: "d) ist RICHTIG: Die fehlende Kombination ist 'J-J-N→N': Mitarbeiter >1 Jahr (J), Ziel vereinbart (J), Ziel NICHT erreicht (N) → keine Prämie (N). Das ist realistisch und fehlt in der Tabelle!",
            reference: "Lehrplan 4.2.3, 2. Absatz"
        }
    },
    {
        id: "gtb-a-21",
        source: "GTB Sample Exam A",
        lo: "FL-4.2.4",
        kLevel: 3,
        chapter: 4,
        text: "Gegeben ist ein Zustandsübergangsdiagramm mit 3 Zuständen (TV Off, TV Standby, TV Play) und 5 Testfällen.\n\nWelche der folgenden Aussagen zum Diagramm und den Testfällen ist WAHR?",
        hint: "0-Switch-Überdeckung = Alle GÜLTIGEN Übergänge (Pfeile) mindestens einmal durchlaufen. Zähle die Übergänge im Diagramm.",
        image: "images/a_q21.png",
        answers: [
            "Die Testfälle führen alle Übergänge im Zustandsübergangsdiagramm aus, damit wird 100% Überdeckung aller Übergänge erreicht.",
            "Die Testfälle führen alle gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit wird 100% 0-Switch-Überdeckung erreicht.",
            "Die Testfälle führen nur einige der gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit liegt die 0-Switch-Überdeckung unter 100%.",
            "Testfall 2 ist für 100% 0-Switch-Überdeckung nicht erforderlich, da Zustand S1 bereits durch Testfall 5 überdeckt wurde."
        ],
        correct: 1,
        feedback: {
            trap: "a) 'alle Übergänge' ist unpräzise – es geht nur um GÜLTIGE Übergänge. c) ist falsch – alle gültigen werden tatsächlich abgedeckt. d) verwechselt ZUSTANDSÜBERDECKUNG mit ÜBERGANGSÜBERDECKUNG – dass S1 besucht wird, reicht nicht!",
            principle: "0-Switch-Überdeckung (0-Switch Coverage) = Alle GÜLTIGEN Übergänge (Transitionen/Pfeile) mindestens 1× durchlaufen.",
            explanation: "b) ist RICHTIG: Die 5 Testfälle decken alle 5 gültigen Übergänge im Diagramm ab. 0-Switch bedeutet: Jeder einzelne Übergang wird getestet (nicht Sequenzen von Übergängen wie bei N-Switch).",
            reference: "Lehrplan 4.2.4"
        }
    },
    {
        id: "gtb-a-22",
        source: "GTB Sample Exam A",
        lo: "FL-4.3.1",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen ist eine Beschreibung für eine Anweisungsüberdeckung?",
        hint: "Anweisungsüberdeckung misst CODE-Zeilen, nicht Testfälle. Und es ist ein PROZENTWERT, keine Ja/Nein-Aussage.",
        answers: [
            "Es handelt sich um eine Metrik zur Berechnung und Messung des prozentualen Anteils der ausgeführten Testfälle.",
            "Es handelt sich um eine Metrik, die den prozentualen Anteil der bereits durch Testfälle ausgeführten Anweisungen im Code angibt.",
            "Es handelt sich um eine Metrik zur Messung der Anzahl der durch Testfälle ausgeführten Anweisungen, die keine Fehlerwirkung aufgedeckt haben.",
            "Es handelt sich um eine Metrik, die eine Wahr/Falsch-Bestätigung gibt, ob alle Anweisungen durch Testfälle abgedeckt sind."
        ],
        correct: 1,
        feedback: {
            trap: "a) misst TESTFÄLLE, nicht Code-Anweisungen – das wäre Testfortschritt. c) misst Anweisungen OHNE Fehler – irrelevant für Überdeckung. d) ist binär (Ja/Nein), nicht prozentual.",
            principle: "Anweisungsüberdeckung = Prozent der ausgeführten CODE-ZEILEN (nicht Testfälle!).",
            explanation: "b) ist RICHTIG: Anweisungsüberdeckung gibt den PROZENTUALEN Anteil der durch Tests ausgeführten Anweisungen im Code an. Beispiel: 80% Anweisungsüberdeckung = 80% aller Code-Zeilen wurden mindestens 1× durchlaufen.",
            reference: "Lehrplan 4.3.1"
        }
    },
    {
        id: "gtb-a-23",
        source: "GTB Sample Exam A",
        lo: "FL-4.3.3",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen trifft NICHT auf White-Box-Tests zu?",
        hint: "White-Box schaut in den CODE. Kann man im Code sehen, was NICHT implementiert wurde? Denke darüber nach.",
        answers: [
            "White-Box-Test ist ein Test, der auf der Analyse der internen Struktur einer Komponente oder eines Systems basiert.",
            "White-Box-Überdeckungsmetriken können helfen, zusätzliche Tests zu identifizieren, um die Codeüberdeckung zu erhöhen.",
            "White-Box-Testverfahren können ergänzend zu den Black-Box-Testverfahren eingesetzt werden, um das Vertrauen in den Code zu stärken.",
            "White-Box-Tests können helfen, nicht implementierte Anforderungen zu identifizieren."
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) sind alle KORREKTE Aussagen über White-Box-Tests. Die Frage fragt nach dem, was NICHT zutrifft!",
            principle: "White-Box prüft CODE-STRUKTUR. Was NICHT im Code ist, kann White-Box nicht finden!",
            explanation: "d) trifft NICHT zu: White-Box-Tests analysieren den vorhandenen Code. Nicht implementierte Anforderungen existieren im Code schlicht nicht – sie sind 'unsichtbar'. Dafür braucht man Anforderungs-Traceability (Black-Box-Perspektive).",
            reference: "Lehrplan 4.3.3"
        }
    },
    {
        id: "gtb-a-24",
        source: "GTB Sample Exam A",
        lo: "FL-4.4.1",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN das Konzept der intuitiven Testfallermittlung?",
        hint: "Error Guessing = Wissen über TYPISCHE Fehler nutzen (nicht eigene Entwicklerfehler, nicht Benutzerfehler).",
        answers: [
            "Bei der intuitiven Testfallermittlung nutzen Sie Ihr Wissen über und Ihre Erfahrung mit in der Vergangenheit gefundenen Fehlerzuständen und typischen Fehlhandlungen von Entwicklern.",
            "Bei der intuitiven Testfallermittlung werden Ihre persönlichen Erfahrungen mit der Entwicklung und den Fehlhandlungen, die Sie als Entwickler gemacht haben, genutzt.",
            "Bei der intuitiven Testfallermittlung müssen Sie sich vorstellen, dass Sie der Benutzer sind und Fehlerwirkungen erraten, die der Benutzer machen könnte.",
            "Bei der intuitiven Testfallermittlung müssen Sie die Entwicklungsaufgabe schnell selbst durchführen, um Fehlerzustände zu erkennen."
        ],
        correct: 0,
        feedback: {
            trap: "b) erfordert EIGENE Entwicklererfahrung – Error Guessing nutzt aber Wissen über TYPISCHE Fehler anderer. c) beschreibt Usability-Test aus Nutzersicht. d) beschreibt keine Testtechnik, sondern Entwicklung.",
            principle: "Error Guessing (intuitive Testfallermittlung) = Erfahrung mit TYPISCHEN Fehlern und vergangenen Fehlerzuständen nutzen.",
            explanation: "a) ist RICHTIG: Bei der intuitiven Testfallermittlung nutzt man Wissen über typische Fehlerquellen und Erfahrung mit in der Vergangenheit gefundenen Fehlerzuständen – nicht eigene Fehler als Entwickler!",
            reference: "Lehrplan 4.4.1"
        }
    },
    {
        id: "gtb-a-25",
        source: "GTB Sample Exam A",
        lo: "FL-4.4.2",
        kLevel: 2,
        chapter: 4,
        text: "In Ihrem Projekt hat sich die Freigabe einer brandneuen Anwendung verzögert und die Testdurchführung hat spät begonnen, aber Sie verfügen über sehr detailliertes Fachwissen und gute analytische Fähigkeiten. Die vollständige Anforderungsspezifikation wurde noch nicht an Sie weitergegeben.\n\nWelches Testverfahren ist in dieser Situation AM BESTEN geeignet?",
        hint: "Keine Spezifikation, aber viel Fachwissen. Welches Verfahren kombiniert Lernen UND Testen gleichzeitig?",
        answers: [
            "Checklistenbasiertes Testen",
            "Intuitive Testfallermittlung",
            "Exploratives Testen",
            "Anweisungstest"
        ],
        correct: 2,
        feedback: {
            trap: "a) Checklistenbasiert braucht eine CHECKLISTE – die haben wir nicht. b) Error Guessing nutzt Fehlerwissen, nicht Domänenwissen. d) Anweisungstest ist White-Box und braucht CODE-Zugang.",
            principle: "Exploratives Testen = Lernen + Testen GLEICHZEITIG, ideal bei fehlender Spezifikation und vorhandenem Fachwissen.",
            explanation: "c) ist RICHTIG: Exploratives Testen kombiniert Lernen und Testen. Mit detailliertem Fachwissen und guten analytischen Fähigkeiten kann man die Anwendung erkunden und dabei gleichzeitig testen – auch ohne formale Spezifikation.",
            reference: "Lehrplan 4.4.2"
        }
    },

    // === KAPITEL 5: Testmanagement ===
    {
        id: "gtb-a-26",
        source: "GTB Sample Exam A",
        lo: "FL-5.1.4",
        kLevel: 3,
        chapter: 5,
        text: "Ihr Team verwendet das Drei-Punkt-Schätzungsverfahren. Es wurden folgende Schätzungen vorgenommen:\n• Optimistischste Schätzung: 2 Personenstunden\n• Wahrscheinlichste Schätzung: 11 Personenstunden\n• Pessimistischste Schätzung: 14 Personenstunden\n\nWie lautet die endgültige Schätzung?",
        hint: "Formel: E = (O + 4×W + P) ÷ 6. Die wahrscheinlichste Schätzung wird 4-fach gewichtet!",
        answers: [
            "9 Personenstunden",
            "10 Personenstunden",
            "11 Personenstunden",
            "14 Personenstunden"
        ],
        correct: 1,
        feedback: {
            trap: "a) 9 Stunden = falsches Rechnen. c) 11 Stunden = nur die wahrscheinlichste ohne Gewichtung. d) 14 = pessimistisch ohne Berechnung. Nicht einfach den Mittelwert nehmen!",
            principle: "Drei-Punkt-Schätzung: E = (O + 4×W + P) ÷ 6 – die wahrscheinlichste Schätzung wird 4-fach gewichtet!",
            explanation: "b) ist RICHTIG: Rechnung: E = (2 + 4×11 + 14) ÷ 6 = (2 + 44 + 14) ÷ 6 = 60 ÷ 6 = 10 Personenstunden. Die Formel gewichtet die wahrscheinlichste Schätzung stark (4×), während optimistische und pessimistische jeweils nur 1× eingehen.",
            reference: "Lehrplan 5.1.4"
        }
    },
    {
        id: "gtb-a-27",
        source: "GTB Sample Exam A",
        lo: "FL-5.1.7",
        kLevel: 2,
        chapter: 5,
        text: "Gegeben sind Tests (1-4) und Testquadranten (A-D):\n\n1. Gebrauchstauglichkeitstest\n2. Komponententest\n3. Funktionaler Test\n4. Zuverlässigkeitstest\n\nA. Q1: Technologieorientiert, Team unterstützend\nB. Q2: Geschäftlich orientiert, Team unterstützend\nC. Q3: Geschäftlich orientiert, Produkt kritisierend\nD. Q4: Technologieorientiert, Produkt kritisierend\n\nWie lassen sich die Testkategorien den Quadranten zuordnen?",
        hint: "Frage dich bei jeder Testart: Ist sie TECHNISCH oder GESCHÄFTLICH orientiert? Und: Unterstützt sie das Team beim Bauen oder kritisiert sie das fertige Produkt?",
        answers: [
            "1C, 2A, 3B, 4D",
            "1D, 2A, 3C, 4B",
            "1C, 2B, 3D, 4A",
            "1D, 2B, 3C, 4A"
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) ordnen Usability (1) falsch in Q4 (technisch) statt Q3 (geschäftlich) ein, oder verwechseln die Kategorien untereinander. Usability betrifft den BENUTZER (geschäftlich), Zuverlässigkeit ist TECHNISCH.",
            principle: "Testquadranten nach Brian Marick: Q1=Komponente (tech, unterstützend), Q2=Funktion (business, unterstützend), Q3=Usability (business, kritisierend), Q4=Performance/Zuverlässigkeit (tech, kritisierend)",
            explanation: "a) ist RICHTIG: 1. Usability→Q3 (geschäftlich, kritisierend: testet aus Benutzersicht). 2. Komponente→Q1 (technisch, unterstützend: hilft beim Coden). 3. Funktion→Q2 (geschäftlich, unterstützend: prüft Anforderungen). 4. Zuverlässigkeit→Q4 (technisch, kritisierend: testet nicht-funktionale Qualität).",
            reference: "Lehrplan 5.1.7"
        }
    },
    {
        id: "gtb-a-28",
        source: "GTB Sample Exam A",
        lo: "FL-5.2.4",
        kLevel: 2,
        chapter: 5,
        text: "Im Rahmen einer Risikoanalyse wurde folgendes Risiko ermittelt:\n• Risiko: Zu lange Antwortzeit bei der Bereitstellung eines Suchergebnisses\n• Eintrittswahrscheinlichkeit: mittel; Schadensausmaß: hoch\n• Reaktion: Performanztest durch unabhängiges Team + Alpha/Beta-Tests\n\nWelche Art von Maßnahmen wurde vorgeschlagen?",
        hint: "Aktives Testen = aktive Maßnahme. Was bewirkt Testen bezüglich des Risikos? Akzeptieren, Mindern, Transferieren oder Notfallplan?",
        answers: [
            "Risikoakzeptanz",
            "Notfallplan",
            "Risikominderung",
            "Risikotransfer"
        ],
        correct: 2,
        feedback: {
            trap: "a) Risikoakzeptanz = NICHTS tun, Risiko bewusst hinnehmen. b) Notfallplan = Plan für den Fall, dass Risiko eintritt. d) Risikotransfer = Risiko an Dritte übertragen (Versicherung, Outsourcing).",
            principle: "Testen ist eine AKTIVE MAßNAHME zur Risikominderung (Risk Mitigation).",
            explanation: "c) ist RICHTIG: Performanztests und Alpha/Beta-Tests sind aktive Maßnahmen zur RISIKOMINDERUNG. Sie reduzieren die Eintrittswahrscheinlichkeit und/oder das Schadensausmaß, indem Probleme VOR dem Produktivbetrieb gefunden werden.",
            reference: "Lehrplan 5.2.4, letzter Absatz"
        }
    },
    {
        id: "gtb-a-29",
        source: "GTB Sample Exam A",
        lo: "FL-5.3.2",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen zum Zweck und Inhalt von Testberichten ist zutreffend?",
        hint: "Unterscheide: Fortschrittsbericht = WÄHREND des Testens, regelmäßig. Abschlussbericht = AM ENDE einer Teststufe.",
        answers: [
            "Testabschlussberichte werden in regelmäßigen Abständen erstellt und verteilt, um die Stakeholder hinsichtlich des Fortschrittes zu informieren.",
            "Ein Testfortschrittsbericht beinhaltet u. a. die Bewertung der Qualität des Produkts sowie etwaige Abweichungen vom Zeitplan.",
            "Ein Testabschlussbericht wird erstellt, wenn eine Teststufe abgeschlossen wurde, und baut auf Testfortschrittsberichten und zusätzlichen Daten auf.",
            "Testfortschrittsberichte werden während des Testabschlusses erstellt, um die Erfüllung der Endekriterien belegen zu können."
        ],
        correct: 2,
        feedback: {
            trap: "a) verwechselt Berichte – REGELMÄSSIG ist Fortschritt, nicht Abschluss. b) ist teilweise richtig, aber beschreibt eher den Abschlussbericht. d) verwechselt die Reihenfolge – Fortschrittsberichte entstehen VOR dem Abschluss.",
            principle: "Testfortschrittsbericht = WÄHREND des Testens, regelmäßig | Testabschlussbericht = AM ENDE einer Teststufe.",
            explanation: "c) ist RICHTIG: Testabschlussberichte werden erstellt, wenn eine Teststufe abgeschlossen wurde. Sie BAUEN AUF den Fortschrittsberichten auf und enthalten zusätzliche Abschlussdaten wie Zusammenfassung, Bewertung, offene Punkte.",
            reference: "Lehrplan 5.3.2"
        }
    },

    // === KAPITEL 6: Testwerkzeuge ===
    {
        id: "gtb-a-30",
        source: "GTB Sample Exam A",
        lo: "FL-6.1.1",
        kLevel: 2,
        chapter: 6,
        text: "Welche Testaktivitäten unterstützt ein Werkzeug zur Erstellung von Testdaten?",
        hint: "Testdaten: Wann werden sie GEPLANT (welche Daten?) und wann ERSTELLT? Das sind zwei verschiedene Aktivitäten.",
        answers: [
            "Testüberwachung und Teststeuerung",
            "Testanalyse und Testentwurf",
            "Testentwurf und Testrealisierung",
            "Testabschluss"
        ],
        correct: 2,
        feedback: {
            trap: "a) Testüberwachung braucht keine Testdaten-Erstellung. b) Testanalyse definiert Testbedingungen, noch keine konkreten Daten. d) Testabschluss erstellt keine neuen Daten mehr.",
            principle: "Testdaten-Werkzeuge: Beim TESTENTWURF wird definiert, WELCHE Daten, bei der TESTREALISIERUNG werden sie ERSTELLT.",
            explanation: "c) ist RICHTIG: Testdaten-Werkzeuge unterstützen zwei Aktivitäten – beim Testentwurf werden die benötigten Testdaten definiert (z.B. Grenzwerte), bei der Testrealisierung werden diese Daten dann tatsächlich erstellt oder generiert.",
            reference: "Lehrplan 6.1.1"
        }
    },
    {
        id: "gtb-a-31",
        source: "GTB Sample Exam A",
        lo: "FL-6.2.1",
        kLevel: 1,
        chapter: 6,
        text: "Welcher Punkt ist ein mögliches Risiko bei der Testautomatisierung?",
        hint: "Was geht bei Automatisierung oft schief? Denke an übertriebene Erwartungen, nicht an technische Probleme.",
        answers: [
            "Es kann zu unbekannten Nebenwirkungen im operativen Betrieb kommen.",
            "Es bestehen unrealistische Erwartungen hinsichtlich der Funktionalität eines Werkzeugs.",
            "Testwerkzeuge sind möglicherweise nicht zuverlässig genug.",
            "Es kann die verfügbare Zeit für manuelle Tests auf Dauer reduziert sein."
        ],
        correct: 1,
        feedback: {
            trap: "a) Nebenwirkungen im Betrieb betreffen das Produkt, nicht die Automatisierung selbst. c) Zuverlässigkeit ist selten das Problem. d) Weniger Zeit für manuelle Tests ist ein VORTEIL – man kann komplexere Dinge testen.",
            principle: "Hauptrisiko der Testautomatisierung: Unrealistische Erwartungen an Werkzeuge ('Das Tool wird alles lösen!').",
            explanation: "b) ist RICHTIG: Unrealistische Erwartungen an die Funktionalität eines Werkzeugs sind das häufigste Risiko – Teams erwarten oft Wunder von Tools, unterschätzen Einarbeitungszeit und Wartungsaufwand.",
            reference: "Lehrplan 6.2.1"
        }
    },

    // ========================================================================
    // GTB SAMPLE EXAM SET C (v2.2.1) - 40 Fragen
    // ========================================================================

    // === SET C: KAPITEL 1 - Grundlagen des Testens (8 Fragen) ===
    {
        id: "gtb-c-1",
        source: "GTB Sample Exam C",
        lo: "FL-1.1.1",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Optionen ist ein typisches Testziel?",
        hint: "Testen FINDET Fehler, PROVOZIERT Fehlerwirkungen. Es INITIIERT keine Fehler und BEHEBT keine.",
        answers: [
            "Validieren, ob die dokumentierten Anforderungen erfüllt sind.",
            "Fehlerwirkungen provozieren und Fehlerzustände identifizieren.",
            "Fehler initiieren und deren Ursachen identifizieren.",
            "Verifikation, ob das Testobjekt die Erwartungen der Benutzer erfüllt."
        ],
        correct: 1,
        feedback: {
            trap: "a) Validierung ist ein übergeordneter Begriff, kein Testziel. c) Fehler werden nicht INITIIERT, sondern GEFUNDEN – fatale Wortverwechslung! d) Verifikation ist ebenfalls ein übergeordneter Begriff.",
            principle: "Testziel: Fehlerwirkungen PROVOZIEREN (auslösen) um Fehlerzustände zu IDENTIFIZIEREN (finden).",
            explanation: "b) ist RICHTIG: Testen provoziert Fehlerwirkungen (sichtbare Symptome wie Abstürze, falsche Ausgaben) und identifiziert dadurch die zugrundeliegenden Fehlerzustände im Code.",
            reference: "Lehrplan 1.1.1, Aufzählungspunkt 2"
        }
    },
    {
        id: "gtb-c-2",
        source: "GTB Sample Exam C",
        lo: "FL-1.1.2",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt den Unterschied zwischen Testen und Debugging AM BESTEN?",
        hint: "Testen = FINDEN. Debugging = BEHEBEN. Wer macht was?",
        answers: [
            "Testen identifiziert die Ursache von Fehlerzuständen, während beim Debugging die Fehlerzustände analysiert und behoben werden.",
            "Testen ist eine negative Aktivität, während Debugging eine positive Aktivität ist.",
            "Beim Testen werden Fehler gefunden, während beim Debugging Fehler behoben werden.",
            "Beim Testen wird die Fehlerursache gefunden, während beim Debugging die Fehlerursache behoben wird."
        ],
        correct: 2,
        feedback: {
            trap: "a) Testen identifiziert nicht die URSACHE – das ist Debugging! b) 'Negativ/positiv' ist keine fachliche Unterscheidung. d) Auch Debugging findet nicht nur die Ursache, sondern behebt sie auch.",
            principle: "Testen = Fehlerwirkungen FINDEN | Debugging = Ursachen analysieren und Fehler BEHEBEN.",
            explanation: "c) ist RICHTIG: Beim Testen werden Fehler (Fehlerwirkungen) GEFUNDEN. Beim Debugging werden diese Fehler dann analysiert, lokalisiert und BEHOBEN. Tester finden, Entwickler beheben.",
            reference: "Lehrplan 1.1.2"
        }
    },
    {
        id: "gtb-c-3",
        source: "GTB Sample Exam C",
        lo: "FL-1.3.1",
        kLevel: 2,
        chapter: 1,
        text: "Der Trugschluss, 'keine Fehler' bedeutet ein brauchbares System, ist einer der Grundsätze des Testens. Welches der folgenden Beispiele zeigt, wie dieses Prinzip in der Praxis umgesetzt wird?",
        hint: "Der Trugschluss: Auch fehlerfreie Software kann unbrauchbar sein! Was stellt sicher, dass Benutzer zufrieden sind?",
        answers: [
            "Erklären, dass es nicht möglich ist, durch Testen die Abwesenheit von Fehlern zu beweisen.",
            "Unterstützung der Endnutzer bei der Durchführung von Abnahmetests.",
            "Sicherstellen, dass das gelieferte System keine Implementierungsfehler enthält.",
            "Modifizieren von Tests, die keine Fehler verursachen, um sicherzustellen, dass nur wenige Fehler verbleiben."
        ],
        correct: 1,
        feedback: {
            trap: "a) beschreibt Grundsatz 1 (Abwesenheit von Fehlern nicht beweisbar), nicht den Trugschluss. c) ist unrealistisch – 'keine Fehler' ist unmöglich (Grundsatz 1). d) Tests modifizieren ist Pesticide Paradox (Grundsatz 5).",
            principle: "Trugschluss 'keine Fehler': Auch technisch fehlerfreie Software kann UNBRAUCHBAR sein, wenn sie die Benutzerbedürfnisse nicht erfüllt!",
            explanation: "b) ist RICHTIG: Endnutzer bei Abnahmetests einzubeziehen stellt sicher, dass das System die ECHTEN Bedürfnisse erfüllt – nicht nur technisch fehlerfrei ist. Genau das verhindert den Trugschluss.",
            reference: "Lehrplan 1.3, Grundsatz 7"
        }
    },
    {
        id: "gtb-c-4",
        source: "GTB Sample Exam C",
        lo: "FL-1.4.1",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Testaktivitäten beinhalten AM EHESTEN die Anwendung der Grenzwertanalyse und der Äquivalenzklassenbildung?",
        hint: "Testverfahren (GWA, ÄK) = Testentwurf. Aber vorher: Testbedingungen definieren = Testanalyse. Welche zwei?",
        warning: "Diese Frage hat ZWEI richtige Antworten!",
        answers: [
            "Testrealisierung",
            "Testentwurf",
            "Testdurchführung",
            "Testüberwachung",
            "Testanalyse"
        ],
        correct: 1,
        multipleCorrect: [1, 4],
        feedback: {
            trap: "Testrealisierung erstellt Testfälle, wendet aber keine Testverfahren an. Testdurchführung führt nur aus.",
            principle: "Testverfahren wie GWA und ÄK werden im TESTENTWURF angewendet, Testbedingungen in der TESTANALYSE definiert.",
            explanation: "Testentwurf (Testverfahren anwenden) und Testanalyse (Testbedingungen für ÄK/GWA identifizieren) nutzen diese Verfahren.",
            reference: "Lehrplan 1.4.1"
        }
    },
    {
        id: "gtb-c-5",
        source: "GTB Sample Exam C",
        lo: "FL-1.4.3",
        kLevel: 2,
        chapter: 1,
        text: "Es werden folgende Testmittel angenommen:\n1. Testüberdeckungen\n2. Änderungsanforderungen\n3. Testausführungsplan\n4. Priorisierte Testbedingungen\n\nund die folgenden Testaktivitäten:\nA. Testanalyse\nB. Testentwurf\nC. Testrealisierung\nD. Testabschluss\n\nWelche Aussage trifft AM BESTEN auf das durch die Aktivitäten erzeugte Testmittel zu?",
        hint: "Jede Testaktivität erzeugt bestimmte Arbeitsergebnisse. Überlege: WAS wird in welcher Phase definiert, geplant oder erstellt?",
        answers: [
            "1B, 2D, 3C, 4A",
            "1B, 2D, 3A, 4C",
            "1D, 2C, 3A, 4B",
            "1D, 2C, 3B, 4A"
        ],
        correct: 0,
        feedback: {
            trap: "b) und c) ordnen Testüberdeckungen falsch dem Testabschluss (D) zu – sie entstehen beim Testentwurf (B). d) ordnet Testausführungsplan falsch dem Testentwurf (B) zu – er entsteht bei der Testrealisierung (C).",
            principle: "Testmittel nach Aktivität: Analyse→Testbedingungen | Entwurf→Überdeckung | Realisierung→Ausführungsplan | Abschluss→Änderungsanforderungen",
            explanation: "a) ist RICHTIG: 1. Testüberdeckungen → Testentwurf (B) – hier werden Überdeckungskriterien festgelegt. 2. Änderungsanforderungen → Testabschluss (D) – hier werden offene Punkte dokumentiert. 3. Testausführungsplan → Testrealisierung (C) – hier wird die Reihenfolge geplant. 4. Priorisierte Testbedingungen → Testanalyse (A) – hier wird das 'Was' identifiziert.",
            reference: "Lehrplan 1.4.3"
        }
    },
    {
        id: "gtb-c-6",
        source: "GTB Sample Exam C",
        lo: "FL-1.4.5",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen über die verschiedenen Testrollen (in unterschiedlichen Entwicklungsmodellen) trifft AM EHESTEN zu?",
        hint: "Agile Teams: Wer macht was? Testmanagement teils IM Team, teils EXTERN für teamübergreifende Aufgaben.",
        answers: [
            "In der agilen Softwareentwicklung ist das Testmanagement hauptsächlich Aufgabe des Teams, während das Testen hauptsächlich Aufgabe einer Person außerhalb des Teams ist.",
            "Die Testrolle ist hauptsächlich für die Testüberwachung und Teststeuerung verantwortlich, während die Testmanagementrolle hauptsächlich für die Testplanung und -durchführung verantwortlich ist.",
            "In der agilen Softwareentwicklung werden Testmanagementaufgaben, die mehrere Teams betreffen, von einem Testmanager außerhalb des Teams übernommen, während einige Testmanagementaufgaben vom Team selbst durchgeführt werden.",
            "Die Testmanagementrolle ist hauptsächlich für die Testanalyse und den Testentwurf verantwortlich, während die Testrolle hauptsächlich für die Testimplementierung und die Testdurchführung verantwortlich ist."
        ],
        correct: 2,
        feedback: {
            trap: "a) dreht um – Testmanagement ist Team-Aufgabe, Testen auch (nicht extern). b) dreht die Rollen komplett um. d) verwechselt auch die Zuordnung – Analyse/Entwurf ist Tester-Aufgabe.",
            principle: "Agile Testrollen: Testmanagement TEILS im Team, TEILS extern (für teamübergreifende Aufgaben wie Koordination mehrerer Teams).",
            explanation: "c) ist RICHTIG: In agilen Teams werden viele Testmanagementaufgaben VOM TEAM SELBST durchgeführt. Aufgaben, die MEHRERE TEAMS betreffen, werden von einem Testmanager AUSSERHALB des Teams koordiniert.",
            reference: "Lehrplan 1.4.5"
        }
    },
    {
        id: "gtb-c-7",
        source: "GTB Sample Exam C",
        lo: "FL-1.5.2",
        kLevel: 1,
        chapter: 1,
        text: "Was ist ein typischer Vorteil des ganzheitlichen Teamansatzes (Whole-Team-Ansatz) in agilen Projekten?",
        hint: "Whole-Team = alle arbeiten zusammen, gemeinsame Verantwortung. Was verbessert sich dadurch im TEAM?",
        answers: [
            "Das Team arbeitet ohne dedizierte Tester.",
            "Die Teamdynamik wird verbessert.",
            "Nur Mitglieder des Fachbereichs sind für das Testen zuständig.",
            "Teams werden durch zusätzliche Rollen vergrößert."
        ],
        correct: 1,
        feedback: {
            trap: "Ohne Tester (a) ist falsch – Whole-Team bedeutet nicht ohne Tester. Nur Fachbereich testet (c) widerspricht dem Teamgedanken. Vergrößerung (d) ist kein Vorteil.",
            principle: "Whole-Team = Bessere Zusammenarbeit = Verbesserte Teamdynamik.",
            explanation: "Der Whole-Team-Ansatz verbessert die Teamdynamik durch gemeinsame Verantwortung für Qualität.",
            reference: "Lehrplan 1.5.2"
        }
    },
    {
        id: "gtb-c-8",
        source: "GTB Sample Exam C",
        lo: "FL-1.5.3",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen zur Unabhängigkeit des Testens ist ZUTREFFEND?",
        hint: "Unabhängigkeit hat Vor- UND Nachteile. Andere Perspektive = gut. Aber: Kann zu Konflikten führen.",
        answers: [
            "Unabhängige Tester werden Fehler finden, weil sie eine andere technische Perspektive als die Entwickler haben, aber ihre Unabhängigkeit kann zu einer kontroversen Beziehung zu den Entwicklern führen.",
            "Die Vertrautheit der Entwickler mit ihrem eigenen Code bedeutet, dass sie nur wenige Fehler darin finden. Aufgrund des gemeinsamen Software-Hintergrunds mit den Testern werden diese Fehler jedoch auch von den Testern gefunden.",
            "Unabhängiges Testen erfordert Tester, die außerhalb des Entwicklungsteams und idealerweise außerhalb der Organisation stehen. Allerdings ist es für diese Tester schwer, die Anwendungsdomäne zu verstehen.",
            "Tester außerhalb des Entwicklungsteams sind unabhängiger als Tester innerhalb des Teams, aber es ist wahrscheinlicher, dass die Tester innerhalb des Teams für Verzögerungen bei der Produktfreigabe verantwortlich gemacht werden."
        ],
        correct: 0,
        feedback: {
            trap: "b) 'gemeinsamer SW-Hintergrund' ist falsch – das Problem ist die Betriebsblindheit. c) 'außerhalb der Organisation' ist zu extrem – das sagt der Lehrplan nicht. d) 'für Verzögerungen verantwortlich gemacht' ist kein Lehrplan-Thema.",
            principle: "Unabhängigkeit = Vor- UND Nachteile: Andere Perspektive (gut!), aber mögliche Konflikte mit Entwicklern (Nachteil).",
            explanation: "a) ist RICHTIG: Unabhängige Tester haben eine ANDERE Perspektive als Entwickler und finden dadurch andere Fehler. Aber: Die Unabhängigkeit kann zu einer KONTROVERSEN BEZIEHUNG führen (Silo-Denken, 'die gegen uns').",
            reference: "Lehrplan 1.5.3"
        }
    },

    // === SET C: KAPITEL 2 - Testen im SDLC (6 Fragen) ===
    {
        id: "gtb-c-9",
        source: "GTB Sample Exam C",
        lo: "FL-2.1.2",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Methoden ist eine gute Testpraxis, die für alle Lebenszyklen der Softwareentwicklung gilt?",
        hint: "Was gilt für ALLE SDLCs? Nicht nur V-Modell! Zu jeder Entwicklungsaktivität sollte es eine... geben.",
        answers: [
            "Für jede Teststufe gibt es eine entsprechende Entwicklungsstufe.",
            "Für jedes Testziel gibt es ein entsprechendes Entwicklungsziel.",
            "Für jede Softwaretestaktivität gibt es eine entsprechende Benutzeraktivität.",
            "Für jede Softwareentwicklungsaktivität gibt es eine entsprechende Testaktivität."
        ],
        correct: 3,
        feedback: {
            trap: "a) 'Teststufe↔Entwicklungsstufe' ist V-Modell-spezifisch, nicht universell. b) 'Testziel↔Entwicklungsziel' ist keine etablierte Praxis. c) 'Testaktivität↔Benutzeraktivität' macht keinen Sinn.",
            principle: "Universelle gute Praxis: Zu JEDER Entwicklungsaktivität gibt es eine entsprechende Testaktivität.",
            explanation: "d) ist RICHTIG: Für jede Softwareentwicklungsaktivität (Analyse, Design, Coding...) sollte es eine entsprechende Testaktivität geben. Das gilt für ALLE SDLCs – Wasserfall, Agile, V-Modell, etc.",
            reference: "Lehrplan 2.1.2, 1. Aufzählungspunkt"
        }
    },
    {
        id: "gtb-c-10",
        source: "GTB Sample Exam C",
        lo: "FL-2.1.3",
        kLevel: 1,
        chapter: 2,
        text: "Welches der folgenden Beispiele ist ein Test-First-Ansatz für die Entwicklung?",
        hint: "Welche Begriffe werden im Lehrplan GENAU als Test-First-Ansätze genannt? Nicht alle Optionen entsprechen der offiziellen Terminologie!",
        answers: [
            "Komponententestgetriebene Entwicklung",
            "Integrationstestgetriebene Entwicklung",
            "Systemtestgetriebene Entwicklung",
            "Akzeptanztestgetriebene Entwicklung"
        ],
        correct: 3,
        feedback: {
            trap: "Vorsicht: TDD nutzt zwar Komponententests, heißt aber 'Testgetriebene Entwicklung' – NICHT 'Komponententestgetriebene'. Die anderen Begriffe existieren gar nicht als etablierte Methoden.",
            principle: "Offizielle Test-First-Ansätze im Lehrplan: TDD (Testgetriebene Entwicklung), ATDD (Akzeptanztestgetriebene Entwicklung), BDD (Verhaltensgetriebene Entwicklung).",
            explanation: "ATDD (Acceptance Test-Driven Development) ist ein Test-First-Ansatz, bei dem Tests aus Akzeptanzkriterien abgeleitet werden.",
            reference: "Lehrplan 2.1.3"
        }
    },
    {
        id: "gtb-c-11",
        source: "GTB Sample Exam C",
        lo: "FL-2.1.5",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt den Shift-Left-Ansatz AM BESTEN?",
        hint: "Shift-Left ≠ Automatisierung! Es geht um ZEITPUNKT: Testaktivitäten FRÜHER im SDLC durchführen.",
        answers: [
            "Manuelle Aktivitäten werden mit Zustimmung der Entwickler automatisiert, um den Grundsatz 'Frühes Testen spart Zeit und Geld' zu unterstützen.",
            "Wo es kosteneffektiv ist, werden Testaktivitäten auf einen früheren Zeitpunkt im Softwareentwicklungslebenszyklus (SDLC) verlagert, um die Gesamtqualitätskosten zu senken, indem die Anzahl der später im SDLC gefundenen Fehler reduziert wird.",
            "Wenn freie Zeit verfügbar ist, müssen Tester Tests für Regressionstests automatisieren, beginnend mit Komponententests und Komponentenintegrationstests.",
            "Wenn verfügbar, werden Tester darin geschult, Aufgaben zu Beginn des SDLC durchzuführen, so dass später im SDLC weitere Testaktivitäten automatisiert werden können."
        ],
        correct: 1,
        feedback: {
            trap: "a), c), d) verwechseln Shift-Left mit AUTOMATISIERUNG – das ist falsch! Shift-Left hat nichts mit Automatisierung zu tun.",
            principle: "Shift-Left = Testaktivitäten auf einen FRÜHEREN ZEITPUNKT im SDLC verlagern (nichts mit Automatisierung!).",
            explanation: "b) ist RICHTIG: Shift-Left bedeutet, Testaktivitäten FRÜHER durchzuführen, um Fehler zu finden, bevor sie TEUER werden. Je früher ein Fehler gefunden wird, desto günstiger die Behebung.",
            reference: "Lehrplan 2.1.5"
        }
    },
    {
        id: "gtb-c-12",
        source: "GTB Sample Exam C",
        lo: "FL-2.1.6",
        kLevel: 2,
        chapter: 2,
        text: "Welches der folgenden Ereignisse wird bei einer Retrospektive AM GERINGSTEN wahrscheinlich eintreten?",
        hint: "Retrospektiven sind für das ENTWICKLUNGS-TEAM, nicht für Endanwender. Wer ist NICHT die Zielgruppe?",
        answers: [
            "Die Qualität zukünftiger Testobjekte wird durch die Identifizierung von Verbesserungen in den Entwicklungspraktiken verbessert.",
            "Die Testeffizienz wird verbessert, indem die Konfiguration von Testumgebungen durch Automatisierung beschleunigt wird.",
            "Das Verständnis der Endanwender für die Entwicklungs- und Testprozesse wird verbessert.",
            "Automatisierte Testskripte werden durch das Feedback der Entwickler verbessert."
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) sind alle typische und wahrscheinliche Retrospektiv-Ergebnisse: Prozesse verbessern, Testeffizienz steigern, Testskripte durch Feedback verbessern.",
            principle: "Retrospektiven = TEAM-interne Verbesserung. Endanwender sind NICHT die Zielgruppe!",
            explanation: "c) ist AM WENIGSTEN wahrscheinlich: Retrospektiven sind für das ENTWICKLUNGS-/TESTTEAM, nicht für Endanwender. Das Verständnis von Endanwendern für Prozesse zu verbessern ist kein Retrospektiv-Ziel.",
            reference: "Lehrplan 2.1.6"
        }
    },
    {
        id: "gtb-c-13",
        source: "GTB Sample Exam C",
        lo: "FL-2.2.1",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Teststufen wird AM EHESTEN durchgeführt, wenn sich der Test auf die Validierung konzentriert und nicht von Testern durchgeführt wird?",
        hint: "Validierung = Erfüllt es die BENUTZER-Bedürfnisse? Welche Teststufe wird von BENUTZERN (nicht Testern) durchgeführt?",
        answers: [
            "Komponententest",
            "Komponentenintegrationstest",
            "Systemintegrationstest",
            "Abnahmetest"
        ],
        correct: 3,
        feedback: {
            trap: "a) Komponententest = von Entwicklern, aber VERIFIKATION, nicht Validierung. b) Komponentenintegration = noch immer Verifikation. c) Systemintegration = externe Schnittstellen testen, aber noch Verifikation.",
            principle: "VALIDIERUNG = 'Bauen wir das RICHTIGE?' | VERIFIKATION = 'Bauen wir es RICHTIG?'. Validierung durch BENUTZER, nicht Tester!",
            explanation: "d) ist RICHTIG: Abnahmetest fokussiert auf VALIDIERUNG (erfüllt es die Benutzerbedürfnisse?) und wird von BENUTZERN/STAKEHOLDERN durchgeführt, nicht von Testern.",
            reference: "Lehrplan 2.2.1"
        }
    },
    {
        id: "gtb-c-14",
        source: "GTB Sample Exam C",
        lo: "FL-2.2.3",
        kLevel: 2,
        chapter: 2,
        text: "Die Software des Navigationssystems wurde aktualisiert und schlägt nun Routen vor, die gegen die Straßenverkehrsordnung verstoßen, z. B. das Befahren von Einbahnstraßen in falscher Richtung.\n\nWelche der folgenden Aussagen beschreibt die durchzuführenden Tests AM BESTEN?",
        hint: "Nach Fehlerbehebung: Was kommt zuerst? Erst prüfen ob Fehler weg (Fehlernachtest), dann ob nichts kaputt (Regressionstest).",
        answers: [
            "Nur Fehlernachtests",
            "Fehlernachtests, dann Regressionstests",
            "Ausschließlich Regressionstests",
            "Regressionstests, dann Fehlernachtests"
        ],
        correct: 1,
        feedback: {
            trap: "a) Nur Fehlernachtests reicht nicht – was ist mit Seiteneffekten? c) Nur Regressionstests prüft nicht, ob Fehler behoben. d) Falsche Reihenfolge – erst prüfen ob behoben, dann Seiteneffekte!",
            principle: "Nach Fehlerbehebung: ERST Fehlernachtest (Fehler WEG?), DANN Regressionstest (nichts KAPUTT gemacht?).",
            explanation: "b) ist RICHTIG: 1. Fehlernachtest bestätigt, dass der spezifische Fehler (falsche Routen) behoben ist. 2. Regressionstest stellt sicher, dass die Änderung keine anderen Funktionen (z.B. Stauumfahrung) beschädigt hat.",
            reference: "Lehrplan 2.2.3"
        }
    },

    // === SET C: KAPITEL 3 - Statischer Test (3 Fragen) ===
    {
        id: "gtb-c-15",
        source: "GTB Sample Exam C",
        lo: "FL-3.1.3",
        kLevel: 2,
        chapter: 3,
        text: "Welche der folgenden Beispielfehler identifizieren AM BESTEN Fehler, die durch statische Tests (statt durch dynamische Tests) gefunden werden könnten?",
        hint: "Statisch = OHNE Programmausführung. Was kann man finden ohne Code auszuführen? Inkonsistenzen, ungenutzte Variablen...",
        warning: "Diese Frage hat ZWEI richtige Antworten!",
        answers: [
            "Zwei verschiedene Teile der Entwurfsspezifikation stimmen aufgrund der Komplexität des Entwurfs nicht überein.",
            "Eine zu lange Antwortzeit führt dazu, dass Benutzer die Geduld verlieren.",
            "Ein Fehler tritt auf, wenn das System eine Datei schreibt, während der Speicherplatz knapp wird.",
            "Eine Variable wird deklariert, aber anschließend nie im Programm verwendet.",
            "Das Programm benötigt zu viel Speicher, um einen Bericht zu erstellen."
        ],
        correct: 0,
        multipleCorrect: [0, 3],
        feedback: {
            trap: "b) Antwortzeit, c) Fehler bei Speicherknappheit, e) Speicherverbrauch – alle erfordern AUSFÜHRUNG = dynamische Tests.",
            principle: "Statische Tests = OHNE Programmausführung. Finden: Inkonsistenzen, ungenutzte Variablen, Codeanomalien, Dokumentationsfehler.",
            explanation: "a) + d) sind RICHTIG: a) Inkonsistenzen in Dokumenten werden durch Reviews gefunden (statisch). d) Ungenutzte Variablen werden durch statische Code-Analyse gefunden (ohne Ausführung).",
            reference: "Lehrplan 3.1.3"
        }
    },
    {
        id: "gtb-c-16",
        source: "GTB Sample Exam C",
        lo: "FL-3.2.1",
        kLevel: 1,
        chapter: 3,
        text: "Welcher der folgenden Vorteile ist ein frühes und häufiges Stakeholder-Feedback?",
        hint: "Frühes Feedback = Änderungen FRÜHER erkennen. Was ist der konkrete Vorteil davon?",
        answers: [
            "Änderungen der Anforderungen werden früher verstanden und umgesetzt.",
            "Es stellt sicher, dass Geschäftsinteressenten die Benutzeranforderungen verstehen.",
            "Es ermöglicht Product Ownern, ihre Anforderungen so oft zu ändern, wie sie möchten.",
            "Endbenutzern wird vor der Freigabe mitgeteilt, welche Anforderungen nicht umgesetzt werden."
        ],
        correct: 0,
        feedback: {
            trap: "b) Dass Stakeholder Benutzeranforderungen verstehen, ist nicht das Ziel von Feedback. c) 'So oft ändern wie sie möchten' ist KEIN Vorteil – das wäre Chaos! d) Information über nicht umgesetzte Features ist Projektmanagement, nicht Feedback-Vorteil.",
            principle: "Frühes Stakeholder-Feedback = Anforderungsänderungen FRÜHER erkennen = WENIGER teure Nacharbeit.",
            explanation: "a) ist RICHTIG: Durch frühes und häufiges Feedback werden Änderungen der Anforderungen FRÜHER verstanden und können RECHTZEITIG umgesetzt werden – bevor sie teuer werden.",
            reference: "Lehrplan 3.2.1"
        }
    },
    {
        id: "gtb-c-17",
        source: "GTB Sample Exam C",
        lo: "FL-3.2.4",
        kLevel: 2,
        chapter: 3,
        text: "Unter Berücksichtigung der folgenden Reviewarten:\n1. Technisches Review\n2. Informelles Review\n3. Inspektion\n4. Walkthrough\n\nund den folgenden Beschreibungen:\nA. Konzentriert auf Ziele wie Aufbau von Vertrauen, Generierung neuer Ideen und Schulung von Gutachtern unter Leitung des Autors.\nB. Dient in erster Linie der Erkennung potenzieller Mängel und erfordert keine formelle Dokumentation.\nC. Das Hauptziel besteht darin, eine maximale Anzahl potenzieller Fehlerzustände zu erkennen und Metriken zu sammeln, um die Prozessverbesserung zu unterstützen.\nD. Das Ziel ist es, durch qualifizierte Gutachter einen Konsens zu erzielen, Entscheidungen für Probleme zu treffen und neue Ideen zu generieren.\n\nWelche Zuordnung trifft AM BESTEN zu?",
        hint: "Merke: Walkthrough=Autor leitet(A), Informell=ohne Doku(B), Inspektion=Metriken(C), Technisch=Konsens(D).",
        answers: [
            "1A, 2B, 3C, 4D",
            "1D, 2B, 3C, 4A",
            "1B, 2C, 3D, 4A",
            "1C, 2D, 3A, 4B"
        ],
        correct: 1,
        feedback: {
            trap: "a), c), d) ordnen falsch zu. Merkhilfe: Walkthrough=A(Autor), Informell=B(keine Doku), Inspektion=C(Metriken), Technisch=D(Konsens).",
            principle: "Review-Typen: 1. Technisch=Konsens durch Experten(D), 2. Informell=ohne Dokumentation(B), 3. Inspektion=formell mit Metriken(C), 4. Walkthrough=Autor leitet, Schulung(A).",
            explanation: "b) ist RICHTIG: 1→D (Technisch: Konsens durch qualifizierte Gutachter), 2→B (Informell: ohne formale Doku), 3→C (Inspektion: maximale Fehlerfindung + Metriken), 4→A (Walkthrough: Autor leitet, Schulungszweck).",
            reference: "Lehrplan 3.2.4"
        }
    },
    {
        id: "gtb-c-18",
        source: "GTB Sample Exam C",
        lo: "FL-3.2.5",
        kLevel: 1,
        chapter: 3,
        text: "Welcher der folgenden Faktoren trägt zu einem erfolgreichen Review bei?",
        hint: "Was macht Reviews effektiver? Große Dokumente sind schwer zu prüfen. Was hilft dagegen?",
        answers: [
            "Sicherstellen, dass das Management als Gutachter teilnimmt.",
            "Große Arbeitsprodukte in kleinere Teile aufteilen.",
            "Die Bewertung durch den Gutachter als Ziel setzen.",
            "Ein Dokument pro Review planen."
        ],
        correct: 1,
        feedback: {
            trap: "a) Management-Teilnahme kann politisch werden – Gutachter halten sich zurück. c) 'Bewertung durch Gutachter als Ziel' ist NICHT das Ziel eines Reviews! d) 'Ein Dokument pro Review' ist keine Erfolgsfaktor-Aussage.",
            principle: "Review-Erfolgsfaktor: GROßE Arbeitsprodukte in KLEINE, überschaubare Teile aufteilen!",
            explanation: "b) ist RICHTIG: Große Dokumente aufzuteilen hilft Gutachtern, fokussiert zu bleiben und gründlicher zu prüfen. Die Konzentration lässt nach bei zu großen Dokumenten.",
            reference: "Lehrplan 3.2.5"
        }
    },

    // === SET C: KAPITEL 4 - Testverfahren (11 Fragen) ===
    {
        id: "gtb-c-19",
        source: "GTB Sample Exam C",
        lo: "FL-4.1.1",
        kLevel: 2,
        chapter: 4,
        text: "Was ist der Hauptunterschied zwischen Black-Box- und erfahrungsbasierten Testverfahren?",
        hint: "Black-Box nutzt SPEZIFIKATION als Basis. Erfahrungsbasiert nutzt ERFAHRUNG. Was unterscheidet sie also?",
        answers: [
            "Das Testobjekt",
            "Die Teststufe, auf dem das Testverfahren verwendet wird.",
            "Die Testbasis",
            "Der Softwareentwicklungslebenszyklus (SDLC), in dem das Testverfahren verwendet werden kann."
        ],
        correct: 2,
        feedback: {
            trap: "a) Testobjekt ist bei beiden das System. b) Beide können auf allen Teststufen eingesetzt werden. d) Beide können in allen SDLCs eingesetzt werden. Das unterscheidet sie NICHT!",
            principle: "Der HAUPTUNTERSCHIED ist die TESTBASIS: Black-Box = Spezifikation | Erfahrungsbasiert = Erfahrung des Testers.",
            explanation: "c) ist RICHTIG: Black-Box-Verfahren nutzen die SPEZIFIKATION als Testbasis (z.B. Anforderungen). Erfahrungsbasierte Verfahren nutzen das WISSEN und die ERFAHRUNG des Testers als Basis.",
            reference: "Lehrplan 4.1.1"
        }
    },
    {
        id: "gtb-c-20",
        source: "GTB Sample Exam C",
        lo: "FL-4.2.1",
        kLevel: 3,
        chapter: 4,
        text: "Sie testen einen PIN-Validator, der gültige PINs akzeptiert und ungültige PINs ablehnt. Eine PIN ist eine Folge von Ziffern. Eine PIN ist gültig, wenn sie aus vier Ziffern besteht, von denen mindestens zwei unterschiedlich sind.\n\nWelche der folgenden Optionen ist ein Satz von Eingabetestdaten, der alle identifizierten Äquivalenzklassen abdeckt?",
        hint: "ÄK: zu kurz | 4 Ziffern alle gleich (ungültig) | 4 Ziffern mit ≥2 verschiedenen (gültig) | zu lang. Welche Option deckt ALLE 4 ab?",
        answers: [
            "112, 1111, 1234, 123456",
            "1, 123, 1111, 1234",
            "12, 112, 1112, 11112",
            "1, 111, 1111, 11111"
        ],
        correct: 0,
        feedback: {
            trap: "b) 1, 123 sind beide 'zu kurz' – keine Unterscheidung. Und kein 'zu lang'. c) 1112 hat 2 verschiedene Ziffern → GÜLTIG, nicht alle identisch! d) Alle 4 sind kurz oder 4 identisch – kein gültiger Fall und kein 'zu lang'.",
            principle: "4 Äquivalenzklassen für PIN: 1) zu kurz (<4), 2) 4 identische (ungültig), 3) 4 mit ≥2 verschiedenen (gültig), 4) zu lang (>4).",
            explanation: "a) ist RICHTIG: 112 (zu kurz), 1111 (4 identische → ungültig), 1234 (4 mit 4 verschiedenen → gültig), 123456 (zu lang). Alle 4 Klassen abgedeckt!",
            reference: "Lehrplan 4.2.1"
        }
    },
    {
        id: "gtb-c-21",
        source: "GTB Sample Exam C",
        lo: "FL-4.2.2",
        kLevel: 3,
        chapter: 4,
        text: "Ein Entwickler wurde gebeten, die folgende Geschäftsregel zu implementieren:\n\nEINGABE: Wert (Ganzzahl)\nWENN (Wert ≤ 100 ODER Wert ≥ 200) DANN schreibe 'Wert falsch'\nELSE schreibe 'Wert OK'\n\nSie entwerfen die Testfälle mit Hilfe einer 2-Wert-Grenzwertanalyse. Welcher der folgenden Sätze von Testeingaben erreicht die größte Überdeckung?",
        hint: "Gültig = 101-199. Grenzen: 100↔101 (untere) und 199↔200 (obere). 2-Wert = Grenze + direkter Nachbar.",
        answers: [
            "100, 150, 200, 201",
            "99, 100, 200, 201",
            "98, 99, 100, 101",
            "101, 150, 199, 200"
        ],
        correct: 3,
        feedback: {
            trap: "a) testet 201 statt 199 – falsche obere Grenze. b) 99 und 201 sind KEINE direkten Nachbarn der Grenzen. c) konzentriert sich nur auf untere Grenze, ignoriert obere (199/200).",
            principle: "Gültiger Bereich: 101-199. Grenzen: 100↔101 (unten), 199↔200 (oben). 2-Wert = Grenze + direkter Nachbar.",
            explanation: "d) ist RICHTIG: Testet alle 4 Grenzwerte der 2-Wert-GWA: 100 (ungültig, Grenze unten), 101 (gültig, Grenze unten), 199 (gültig, Grenze oben), 200 (ungültig, Grenze oben). 150 ist ein repräsentativer Wert im gültigen Bereich.",
            reference: "Lehrplan 4.2.2"
        }
    },
    {
        id: "gtb-c-22",
        source: "GTB Sample Exam C",
        lo: "FL-4.2.3",
        kLevel: 3,
        chapter: 4,
        text: "Sie arbeiten an einem Projekt zur Entwicklung eines Systems zur Analyse von Fahrprüfungsergebnissen. Sie wurden gebeten, Testfälle basierend auf einer Entscheidungstabelle zu entwerfen.\n\n[Siehe Entscheidungstabelle im Bild]\n\nWelche Testdaten zeigen, dass die Entscheidungstabelle widersprüchliche Regeln enthält?",
        hint: "Widerspruch = gleiche Eingaben → unterschiedliche Aktionen. Suche Kombinationen, die in mehreren Regeln vorkommen.",
        image: "images/c_q22.png",
        answers: [
            "C1 = T, C2 = T, C3 = F",
            "C1 = T, C2 = F, C3 = T",
            "C1 = T, C2 = T, C3 = T und C1 = F, C2 = T, C3 = T",
            "C1 = F, C2 = F, C3 = F"
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) sind jeweils einzelne Kombinationen – sie zeigen keinen Widerspruch zwischen ZWEI Regeln. Widerspruch braucht ZWEI Kombinationen mit gleichem Ergebnis aber unterschiedlicher Aktion.",
            principle: "Widerspruch in Entscheidungstabellen = Gleiche Bedingungskombination führt zu VERSCHIEDENEN Aktionen.",
            explanation: "c) ist RICHTIG: Die Testdaten zeigen den Widerspruch, indem sie zwei Kombinationen testen (C1=T,C2=T,C3=T und C1=F,C2=T,C3=T), die zur gleichen Aktion führen sollten, aber die Tabelle widersprüchlich definiert ist.",
            reference: "Lehrplan 4.2.3"
        }
    },
    {
        id: "gtb-c-23",
        source: "GTB Sample Exam C",
        lo: "FL-4.2.4",
        kLevel: 3,
        chapter: 4,
        text: "Sie entwerfen Testfälle basierend auf einem Zustandsübergangsdiagramm.\n\n[Siehe Diagramm im Bild]\n\nWie viele Testfälle sind MINDESTENS erforderlich, um eine 100%ige Überdeckung gültiger Übergänge zu erreichen?",
        hint: "Zähle die Pfeile (Übergänge) im Diagramm. Wie viele Testfälle braucht man, um jeden Pfeil mindestens einmal zu durchlaufen?",
        image: "images/c_q23.png",
        answers: [
            "3",
            "2",
            "5",
            "6"
        ],
        correct: 0,
        feedback: {
            trap: "b) 2 ist zu wenig – schafft nicht alle Übergänge. c) 5 und d) 6 sind mehr als nötig – es reichen weniger bei geschickter Pfadwahl.",
            principle: "100% gültige Übergangsüberdeckung = Jeder PFEIL (Übergang) im Diagramm mindestens 1× durchlaufen.",
            explanation: "a) ist RICHTIG: Mit 3 geschickt gewählten Testfällen können alle Übergänge im Diagramm abgedeckt werden. Zähle die Pfeile und optimiere die Pfade!",
            reference: "Lehrplan 4.2.4"
        }
    },
    {
        id: "gtb-c-24",
        source: "GTB Sample Exam C",
        lo: "FL-4.3.2",
        kLevel: 2,
        chapter: 4,
        text: "Sie möchten Verzweigungstests auf den Code anwenden, der durch ein Kontrollflussdiagramm dargestellt wird.\n\n[Siehe Diagramm im Bild]\n\nWie viele Überdeckungselemente müssen Sie testen?",
        hint: "Zähle die Entscheidungsknoten (Rauten) und deren ausgehende Kanten. Jede Entscheidung hat 2 Ausgänge (true/false).",
        image: "images/c_q24.png",
        answers: [
            "2",
            "4",
            "8",
            "7"
        ],
        correct: 1,
        feedback: {
            trap: "a) 2 wäre nur Anzahl der Entscheidungen, nicht der Zweige. c) 8 und d) 7 sind zu hoch – systematisch die Kanten zählen!",
            principle: "Zweigtest: Überdeckungselemente = ZWEIGE (Kanten) = Ausgänge aus Entscheidungsknoten (jede Raute hat 2: true/false).",
            explanation: "b) ist RICHTIG: Im Diagramm gibt es 2 Entscheidungsknoten (Rauten). Jede Entscheidung hat 2 Ausgänge (true, false). Also: 2 × 2 = 4 Überdeckungselemente (Zweige).",
            reference: "Lehrplan 4.3.2"
        }
    },
    {
        id: "gtb-c-25",
        source: "GTB Sample Exam C",
        lo: "FL-4.3.3",
        kLevel: 2,
        chapter: 4,
        text: "Wie können White-Box-Tests zur Unterstützung von Black-Box-Tests nützlich sein?",
        hint: "White-Box misst CODE-Überdeckung. Wie hilft das bei Black-Box-Tests? Denke an Metriken.",
        answers: [
            "White-Box-Überdeckungsmaßnahmen können Testern bei der Bewertung von Black-Box-Tests hinsichtlich der durch diese Black-Box-Tests erreichten Codeüberdeckung helfen.",
            "Die White-Box-Überdeckungsanalyse kann Testern dabei helfen, nicht erreichbare Fragmente des Quellcodes zu identifizieren.",
            "Zweigtests beinhalten Black-Box-Testverfahren, so dass das Erreichen einer vollständigen Zweigüberdeckung sicherstellt, dass jedes Black-Box-Testverfahren vollständig abgedeckt wird.",
            "White-Box-Testverfahren können Überdeckungselemente für Black-Box-Testverfahren liefern."
        ],
        correct: 0,
        feedback: {
            trap: "b) Nicht erreichbarer Code ist ein Nebeneffekt, nicht der Hauptnutzen. c) Falsch – Zweigtests sind rein White-Box! d) White-Box liefert keine Überdeckungselemente FÜR Black-Box.",
            principle: "White-Box UNTERSTÜTZT Black-Box: Überdeckungsmetriken zeigen, wie viel CODE durch Black-Box-Tests abgedeckt wird.",
            explanation: "a) ist RICHTIG: White-Box-Überdeckungsmaße (z.B. Anweisungs-/Zweigüberdeckung) zeigen Testern, welche Teile des Codes durch ihre Black-Box-Tests ausgeführt wurden – und wo LÜCKEN sind.",
            reference: "Lehrplan 4.3.3"
        }
    },
    {
        id: "gtb-c-26",
        source: "GTB Sample Exam C",
        lo: "FL-4.4.1",
        kLevel: 2,
        chapter: 4,
        text: "Betrachten Sie die folgende Liste:\n• Korrekte Eingabe nicht akzeptiert\n• Falsche Eingabe akzeptiert\n• Falsches Ausgabeformat\n• Durch null teilen\n\nWelches Testverfahren wird HÖCHSTWAHRSCHEINLICH von dem Tester genutzt, der diese Liste beim Testen verwendet?",
        hint: "Die Liste enthält typische FEHLERTYPEN. Welches Verfahren arbeitet mit einer Liste typischer Fehler?",
        answers: [
            "Exploratives Testen",
            "Fehlerangriff",
            "Checklistenbasiertes Testen",
            "Grenzwertanalyse"
        ],
        correct: 1,
        feedback: {
            trap: "a) Explorativ nutzt keine vordefinierte Liste. c) Checklistenbasiert nutzt allgemeine Qualitätskriterien, keine spezifischen Fehlertypen. d) Grenzwertanalyse testet Bereichsgrenzen, nicht Fehlertypen.",
            principle: "Fehlerangriff (Error Guessing) = Liste von TYPISCHEN FEHLERN systematisch prüfen (Division durch Null, falsche Eingabe, etc.).",
            explanation: "b) ist RICHTIG: Die Liste (Korrekte Eingabe nicht akzeptiert, Falsche Eingabe akzeptiert, Division durch Null...) enthält typische FEHLERTYPEN – das ist charakteristisch für Fehlerangriff/Error Guessing.",
            reference: "Lehrplan 4.4.1"
        }
    },
    {
        id: "gtb-c-27",
        source: "GTB Sample Exam C",
        lo: "FL-4.4.3",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN, wie der Einsatz checklistenbasierter Tests zu einer höheren Überdeckung führen kann?",
        hint: "Checklisten sind allgemein formuliert. Was passiert, wenn VERSCHIEDENE Tester sie interpretieren?",
        answers: [
            "Checklistenelemente können mit einem ausreichend niedrigen Detaillierungsgrad definiert werden, so dass der Tester auf der Grundlage dieser Elemente detaillierte Testfälle implementieren und ausführen kann.",
            "Checklisten können automatisiert werden. Jedes Mal, wenn eine automatisierte Testausführung die Checklistenpunkte abdeckt, führt dies zu einer zusätzlichen Überdeckung.",
            "Jeder Checklistenpunkt sollte separat und unabhängig getestet werden, so dass die Elemente unterschiedliche Bereiche der Software abdecken.",
            "Zwei Tester, die Tests auf der Grundlage derselben übergeordneten Checklistenelemente entwerfen und ausführen, führen die Tests normalerweise auf leicht unterschiedliche Weise durch."
        ],
        correct: 3,
        feedback: {
            trap: "a) Niedrigerer Detaillierungsgrad erklärt nicht die HÖHERE Überdeckung. b) Automatisierung ist kein inhärentes Merkmal von Checklisten. c) Separate Tests für jeden Punkt führen nicht automatisch zu höherer Überdeckung.",
            principle: "Checklistenbasiert + verschiedene Tester = verschiedene INTERPRETATIONEN = breitere Gesamtüberdeckung.",
            explanation: "d) ist RICHTIG: Da Checklistenpunkte allgemein formuliert sind, interpretieren verschiedene Tester sie UNTERSCHIEDLICH. Dadurch werden insgesamt MEHR Varianten getestet → höhere Überdeckung.",
            reference: "Lehrplan 4.4.3"
        }
    },
    {
        id: "gtb-c-28",
        source: "GTB Sample Exam C",
        lo: "FL-4.5.2",
        kLevel: 2,
        chapter: 4,
        text: "Welches der folgenden Akzeptanzkriterien (Abnahmekriterien) ist das BESTE Beispiel für ein szenarioorientiertes Akzeptanzkriterium?",
        hint: "Szenario = ein ABLAUF/Workflow wird beschrieben. Welche Option beschreibt Schritte eines Benutzers?",
        answers: [
            "Die Anwendung muss es Nutzenden ermöglichen, ihr Konto sowie alle zugehörigen Daten auf Anfrage zu löschen.",
            "Wenn ein Kunde einen Artikel in den Warenkorb legt und zur Kasse geht, soll er aufgefordert werden, sich anzumelden oder ein Konto zu erstellen, sofern dies noch nicht geschehen ist.",
            "IF (contain(product(23).Name, cart.products())) THEN return FALSE.",
            "Die Website muss den Anforderungen der ICT Accessibility 508 Standards entsprechen und sicherstellen, dass alle Inhalte für Menschen mit Behinderungen zugänglich sind."
        ],
        correct: 1,
        feedback: {
            trap: "a) ist REGELBASIERT (muss ermöglichen...). c) ist CODE/technische Spezifikation. d) ist STANDARDBASIERT (Accessibility-Standards).",
            principle: "Szenarioorientiert = Beschreibt einen BENUTZER-ABLAUF/Workflow mit Schritten (Wenn Benutzer X tut, dann passiert Y).",
            explanation: "b) ist RICHTIG: Beschreibt ein komplettes Szenario: Kunde legt Artikel in Warenkorb → geht zur Kasse → wird aufgefordert, sich anzumelden. Das ist ein Workflow mit Auslöser und Reaktion.",
            reference: "Lehrplan 4.5.2"
        }
    },
    {
        id: "gtb-c-29",
        source: "GTB Sample Exam C",
        lo: "FL-4.5.3",
        kLevel: 3,
        chapter: 4,
        text: "Sie verwenden abnahmetestgetriebene Entwicklung und entwerfen Testfälle basierend auf folgender User-Story:\n\nAls regulärer oder spezieller Benutzer möchte ich meine elektronische Etagenkarte nutzen können, um Zugang zu bestimmten Etagen zu erhalten.\n\nAkzeptanzkriterium:\nAC1: Reguläre Benutzer haben Zugang zu den Etagen 1 bis 3.\nAC2: Etage 4 ist ausschließlich für spezielle Benutzer zugänglich.\nAC3: Spezielle Benutzer verfügen über alle Zugriffsrechte regulärer Benutzer.\n\nWelcher Testfall eignet sich AM BESTEN, um AC3 zu testen?",
        hint: "AC3 prüfen = Spezielle Benutzer haben reguläre Rechte. Also: Spezieller Benutzer → welche Etagen testen?",
        answers: [
            "Prüfen Sie, ob ein regulärer Benutzer Zugang zu den Etagen 1 und 3 hat.",
            "Stellen Sie sicher, dass ein regulärer Benutzer keinen Zugang zur Etage 4 hat.",
            "Überprüfen Sie, ob ein spezieller Benutzer Zugang zur Etage 5 hat.",
            "Prüfen Sie, ob ein spezieller Benutzer Zugang zu den Etagen 1, 2 und 3 hat."
        ],
        correct: 3,
        feedback: {
            trap: "a) testet AC1-Rechte für reguläre Benutzer, nicht AC3. b) testet eine Einschränkung für reguläre Benutzer, nicht AC3. c) testet Etage 5, die nicht definiert ist – irrelevant für AC3.",
            principle: "ATDD: Testfall muss das SPEZIFISCHE Akzeptanzkriterium direkt prüfen. AC3 = Spezielle haben ALLE Rechte regulärer Benutzer.",
            explanation: "d) ist RICHTIG: AC3 besagt 'Spezielle Benutzer haben alle Rechte regulärer Benutzer'. Also: Spezieller Benutzer muss Zugang zu Etagen 1, 2, 3 haben (= Rechte regulärer Benutzer).",
            reference: "Lehrplan 4.5.3"
        }
    },

    // === SET C: KAPITEL 5 - Testmanagement (9 Fragen) ===
    {
        id: "gtb-c-30",
        source: "GTB Sample Exam C",
        lo: "FL-5.1.1",
        kLevel: 1,
        chapter: 5,
        text: "Welcher der folgenden Punkte ist NICHT der Zweck eines Testkonzepts?",
        hint: "Testkonzept = strategische Planung (WAS, WANN, WIE). Konkrete Testdaten gehören woanders hin.",
        answers: [
            "Testdaten und erwartete Ergebnisse für Komponententests und Komponentenintegrationstests definieren.",
            "Ein Endekriterium auf der Komponententestebene zu definieren, das besagt, dass '100 % Anweisungsüberdeckung und 100 % Zweigüberdeckung erreicht werden müssen'.",
            "Beschreiben, welche Felder der Testfortschrittsbericht enthalten soll und wie dieser Bericht aussehen soll.",
            "Erläutern, warum Systemintegrationstests vom Test ausgeschlossen werden, obwohl die Teststrategie diese Teststufe erfordert."
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) sind alle typische Inhalte eines Testkonzepts: Endekriterien (b), Berichtsstruktur (c), Begründung für Abweichungen von der Strategie (d).",
            principle: "Testkonzept = WAS, WANN, WIE testen (Strategie) | NICHT = konkrete Testdaten und erwartete Ergebnisse.",
            explanation: "a) ist KEIN Zweck eines Testkonzepts: Konkrete Testdaten und erwartete Ergebnisse gehören in die TESTFÄLLE/TESTSPEZIFIKATION, nicht ins strategische Testkonzept.",
            reference: "Lehrplan 5.1.1"
        }
    },
    {
        id: "gtb-c-31",
        source: "GTB Sample Exam C",
        lo: "FL-5.1.4",
        kLevel: 3,
        chapter: 5,
        text: "Zu Beginn jeder Iteration schätzt das Team den Arbeitsaufwand (in Personentagen). Das Team verwendet folgendes Schätzmodell basierend auf Extrapolation:\n\nE(n) = E(n-1) × A(n-1) / E(n-1)\n\n[Siehe Grafik mit geschätztem und tatsächlichem Aufwand für Iterationen 1-4]\n\nWie hoch ist der geschätzte Arbeitsaufwand für Iteration Nr. 5?",
        hint: "Extrapolation: E(5) = E(4) × A(4) / E(4). Vereinfacht: E(5) = A(4). Lies den tatsächlichen Aufwand von Iteration 4 ab.",
        image: "images/c_q31.png",
        answers: [
            "10,5 Personentage",
            "8,25 Personentage",
            "6,5 Personentage",
            "9,4 Personentage"
        ],
        correct: 1,
        feedback: {
            trap: "a) 10,5, c) 6,5, d) 9,4 sind falsch abgelesen oder falsch berechnet. Beachte: Die Formel VEREINFACHT sich!",
            principle: "Extrapolationsformel: E(n) = E(n-1) × A(n-1) / E(n-1) = A(n-1). Also: Nächste Schätzung = LETZTER TATSÄCHLICHER Wert!",
            explanation: "b) ist RICHTIG: Die Formel E(n) = E(n-1) × A(n-1) / E(n-1) vereinfacht sich zu E(n) = A(n-1). Der tatsächliche Aufwand von Iteration 4 (A(4)) ist laut Grafik 8,25 Personentage → E(5) = 8,25.",
            reference: "Lehrplan 5.1.4"
        }
    },
    {
        id: "gtb-c-32",
        source: "GTB Sample Exam C",
        lo: "FL-5.1.5",
        kLevel: 3,
        chapter: 5,
        text: "Sie bereiten einen Testausführungsplan für sieben Testfälle TC 1 bis TC 7 vor.\n\n[Siehe Diagramm mit Prioritäten und Abhängigkeiten]\n\nWelcher Testfall soll als sechster ausgeführt werden?",
        hint: "Regel: Erst ABHÄNGIGKEITEN erfüllen, dann nach PRIORITÄT sortieren. Arbeite das Diagramm systematisch durch.",
        image: "images/c_q32.png",
        answers: [
            "TC 3",
            "TC 5",
            "TC 6",
            "TC 2"
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) berücksichtigen entweder die Abhängigkeiten oder die Prioritäten nicht korrekt. Systematisch durcharbeiten!",
            principle: "Testausführungsreihenfolge: ERST Abhängigkeiten erfüllen (ein TC kann erst laufen, wenn seine Vorgänger fertig sind), DANN nach Priorität sortieren.",
            explanation: "c) ist RICHTIG: Unter Berücksichtigung aller Abhängigkeiten (→ Pfeile im Diagramm) und Prioritäten (höhere zuerst) ist TC 6 der sechste Testfall in der optimalen Reihenfolge.",
            reference: "Lehrplan 5.1.5"
        }
    },
    {
        id: "gtb-c-33",
        source: "GTB Sample Exam C",
        lo: "FL-5.1.6",
        kLevel: 1,
        chapter: 5,
        text: "Was zeigt das Testpyramidenmodell?",
        hint: "Die Pyramide hat SCHICHTEN: Viele kleine Tests unten (Unit), wenige große oben (E2E). Was zeigt sie also?",
        answers: [
            "Tests können unterschiedliche Prioritäten haben.",
            "Tests können eine unterschiedliche Granularität haben.",
            "Tests erfordern möglicherweise unterschiedliche Überdeckungskriterien.",
            "Tests können von anderen Tests abhängen."
        ],
        correct: 1,
        feedback: {
            trap: "a) Prioritäten werden nicht durch die Pyramide dargestellt. c) Überdeckungskriterien sind kein Thema der Pyramide. d) Abhängigkeiten werden nicht gezeigt.",
            principle: "Testpyramide = GRANULARITÄT: Viele KLEINE Tests unten (Unit), wenige GROßE Tests oben (E2E).",
            explanation: "b) ist RICHTIG: Die Testpyramide zeigt die unterschiedliche GRANULARITÄT von Tests: Basis = viele kleine, schnelle Unit-Tests. Spitze = wenige große, langsame End-to-End-Tests. Die ideale Verteilung: mehr unten, weniger oben.",
            reference: "Lehrplan 5.1.6"
        }
    },
    {
        id: "gtb-c-34",
        source: "GTB Sample Exam C",
        lo: "FL-5.1.7",
        kLevel: 2,
        chapter: 5,
        text: "Welche Beziehung besteht zwischen den Testquadranten, Teststufen und Testarten?",
        hint: "Testquadranten GRUPPIEREN Tests nach Kriterien (geschäftlich/technisch, unterstützend/kritisierend).",
        answers: [
            "Testquadranten stellen bestimmte Kombinationen von Teststufen und Testarten dar und definieren deren Position im Softwareentwicklungslebenszyklus.",
            "Testquadranten beschreiben den Grad der Granularität einzelner Testarten, die auf jeder Testebene durchgeführt werden.",
            "Testquadranten ordnen den Teststufen die durchführbaren Testarten zu.",
            "Testquadranten gruppieren Teststufen und Testarten nach mehreren Kriterien, z. B. der Ausrichtung auf bestimmte Stakeholder."
        ],
        correct: 3,
        feedback: {
            trap: "a) 'Position im SDLC' ist falsch – Quadranten definieren keine zeitliche Reihenfolge. b) 'Granularität' ist die Testpyramide, nicht Quadranten. c) 'zugeordnet' ist zu restriktiv – Quadranten gruppieren flexibel.",
            principle: "Testquadranten = GRUPPIERUNG nach mehreren Kriterien: Geschäftlich/Technisch + Team-unterstützend/Produkt-kritisierend.",
            explanation: "d) ist RICHTIG: Testquadranten GRUPPIEREN Teststufen und Testarten nach mehreren Kriterien, z.B. Ausrichtung auf Stakeholder (geschäftlich vs. technisch) und Zweck (Team unterstützen vs. Produkt kritisieren).",
            reference: "Lehrplan 5.1.7"
        }
    },
    {
        id: "gtb-c-35",
        source: "GTB Sample Exam C",
        lo: "FL-5.2.3",
        kLevel: 2,
        chapter: 5,
        text: "Welches ist ein Beispiel dafür, wie die Produktrisikoanalyse die Gründlichkeit und den Umfang der Tests beeinflussen kann?",
        hint: "Die Frage fragt nach GRÜNDLICHKEIT und UMFANG. Hohes Risiko = gründlichere Tests. Was hilft bei dieser Entscheidung?",
        answers: [
            "Eine kontinuierliche Risikoüberwachung ermöglicht es uns, auftretende Risiken so früh wie möglich zu erkennen.",
            "Die Risikoidentifizierung ermöglicht uns, risikomindernde Maßnahmen umzusetzen und das Risikoniveau zu senken.",
            "Das bewertete Risikoniveau hilft uns bei der Wahl der Gründlichkeit der Tests.",
            "Die Risikoanalyse ermöglicht uns die Ableitung von Überdeckungselementen."
        ],
        correct: 2,
        feedback: {
            trap: "a) Risikoüberwachung ist ERKENNUNG, nicht Gründlichkeit. b) Risikominderung ist MASSNAHME, nicht Testumfang. d) Überdeckungselemente gehören zum TESTENTWURF, nicht zur Risikoanalyse.",
            principle: "Risikoniveau → Testgründlichkeit: HOHES Risiko = GRÜNDLICHERE Tests | NIEDRIGES Risiko = weniger gründlich.",
            explanation: "c) ist RICHTIG: Das bewertete Risikoniveau hilft direkt bei der Wahl der Testgründlichkeit: Hohe Risiken erfordern intensive Tests (mehr Testfälle, tiefere Überdeckung). Niedrige Risiken erlauben weniger Aufwand.",
            reference: "Lehrplan 5.2.3"
        }
    },
    {
        id: "gtb-c-36",
        source: "GTB Sample Exam C",
        lo: "FL-5.3.2",
        kLevel: 2,
        chapter: 5,
        text: "Bei welcher der folgenden Aktivitäten im Testprozess werden Testfortschrittsberichte AM MEISTEN genutzt?",
        hint: "Fortschrittsberichte dienen der ÜBERWACHUNG und STEUERUNG. Welche Aktivität beinhaltet das?",
        answers: [
            "Testentwurf",
            "Testabschluss",
            "Testanalyse",
            "Testplanung"
        ],
        correct: 3,
        feedback: {
            trap: "a) Testentwurf erstellt Testfälle, nicht Berichte. b) Testabschluss erstellt ABSCHLUSS-Berichte. c) Testanalyse identifiziert Testbedingungen, nicht Berichte.",
            principle: "Testfortschrittsberichte dienen der ÜBERWACHUNG und STEUERUNG – das ist Teil der TESTPLANUNG.",
            explanation: "d) ist RICHTIG: Testfortschrittsberichte werden bei der Testüberwachung und -steuerung genutzt, die zur Testplanung gehört. Sie informieren Stakeholder über den aktuellen Stand und ermöglichen Korrekturmaßnahmen.",
            reference: "Lehrplan 5.3.2"
        }
    },
    {
        id: "gtb-c-37",
        source: "GTB Sample Exam C",
        lo: "FL-5.4.1",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen ist KEIN Beispiel dafür, wie das Konfigurationsmanagement das Testen unterstützt?",
        hint: "Konfigurationsmanagement = Versionierung, Änderungsverfolgung. Was gehört zum FEHLERMANAGEMENT statt CM?",
        answers: [
            "Alle Commits an das Repository werden eindeutig identifiziert und versioniert.",
            "Alle Änderungen an den Elementen der Testumgebung werden verfolgt.",
            "Alle Anforderungsspezifikationen werden in Testkonzepten eindeutig referenziert.",
            "Alle identifizierten Fehlerzustände haben einen zugeordneten Status."
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) sind alle Beispiele für Konfigurationsmanagement: Commits versionieren (a), Änderungen an Testumgebung verfolgen (b), Anforderungen referenzieren (c).",
            principle: "Konfigurationsmanagement = VERSIONIERUNG, Änderungsverfolgung | FEHLERMANAGEMENT = Fehlerstatus, Fehlerlebenszyklus.",
            explanation: "d) ist KEIN Beispiel für Konfigurationsmanagement: Fehlerstatus (offen, in Arbeit, behoben...) gehört zum FEHLERMANAGEMENT (Defect Management), nicht zum Konfigurationsmanagement.",
            reference: "Lehrplan 5.4.1"
        }
    },
    {
        id: "gtb-c-38",
        source: "GTB Sample Exam C",
        lo: "FL-5.5.1",
        kLevel: 3,
        chapter: 5,
        text: "Betrachten Sie den folgenden Fehlerbericht für eine webbasierte Einkaufsanwendung:\n\nAnwendung: WebShop v0.99\nFehler: Login-Button funktioniert nicht\nSchritte zum Reproduzieren: Starten Sie die Website, Klicken Sie auf den Login-Button\nErwartetes Ergebnis: Der Benutzer sollte zur Anmeldeseite weitergeleitet werden.\nTatsächliches Ergebnis: Die Anmeldeschaltfläche reagiert nicht.\nSchweregrad: Hoch | Priorität: Dringend\n\nWas sind die wichtigsten Informationen, die in diesem Bericht fehlen?",
        hint: "Für die Reproduktion eines Webfehlers braucht man: Browser, Betriebssystem, etc. Was fehlt also?",
        answers: [
            "Name des Testers und Datum des Berichts.",
            "Angaben zur Testumgebung und ihre Versionsnummern.",
            "Identifizierung des Testobjekts.",
            "Auswirkungen auf die Interessen der Stakeholder."
        ],
        correct: 1,
        feedback: {
            trap: "a) Name/Datum sind weniger kritisch für Reproduktion. c) Testobjekt ist angegeben (WebShop v0.99). d) Stakeholder-Auswirkungen sind optional.",
            principle: "Fehlerbericht MUSS die TESTUMGEBUNG enthalten – sonst ist Reproduktion oft unmöglich (verschiedene Browser, OS...).",
            explanation: "b) ist RICHTIG: Es fehlen die TESTUMGEBUNGSINFORMATIONEN: Welcher Browser? Welches Betriebssystem? Welche Versionen? Ohne diese Infos kann der Entwickler den Fehler möglicherweise nicht reproduzieren.",
            reference: "Lehrplan 5.5.1"
        }
    },

    // === SET C: KAPITEL 6 - Testwerkzeuge (2 Fragen) ===
    {
        id: "gtb-c-39",
        source: "GTB Sample Exam C",
        lo: "FL-6.1.1",
        kLevel: 2,
        chapter: 6,
        text: "Werkzeuge aus welcher der folgenden Kategorien helfen bei der Organisation von Testfällen, erkannten Fehlern und dem Konfigurationsmanagement?",
        hint: "Welches Werkzeug verwaltet ALLES: Testfälle UND Fehler UND Konfiguration? Fehlermanagement nur Fehler!",
        answers: [
            "Werkzeuge für Testdurchführung und Testüberdeckung.",
            "Werkzeuge für Testentwurf und Testrealisierung.",
            "Fehlermanagementwerkzeuge",
            "Testmanagementwerkzeuge"
        ],
        correct: 3,
        feedback: {
            trap: "Fehlermanagementwerkzeuge (c) verwalten nur FEHLER, nicht Testfälle oder Konfiguration.",
            principle: "Testmanagementwerkzeuge = Zentrale Verwaltung von Testfällen, Fehlern UND Konfiguration.",
            explanation: "Testmanagementwerkzeuge bieten eine umfassende Verwaltung für Testfälle, Fehler und Konfiguration.",
            reference: "Lehrplan 6.1.1"
        }
    },
    {
        id: "gtb-c-40",
        source: "GTB Sample Exam C",
        lo: "FL-6.2.1",
        kLevel: 1,
        chapter: 6,
        text: "Welcher der folgenden Vorteile ist AM EHESTEN ein Vorteil der Testautomatisierung?",
        hint: "Automatisierung = immer gleich ausgeführt, keine menschliche Varianz. Was bedeutet das für Fehler?",
        answers: [
            "Die Fähigkeit, Testfälle ohne Zugriff auf die Testbasis zu generieren.",
            "Das Erreichen einer größeren Überdeckung durch eine objektivere Bewertung.",
            "Die Erhöhung der verfügbaren Testausführungszeiten bei höherer Verarbeitungsleistung.",
            "Die Vermeidung menschlicher Fehler durch größere Konsistenz und Wiederholbarkeit."
        ],
        correct: 3,
        feedback: {
            trap: "Option a) ist kein Vorteil – Testfälle brauchen IMMER eine Testbasis.",
            principle: "Automatisierung = Konsistent + Wiederholbar = Weniger menschliche Fehler.",
            explanation: "Der Hauptvorteil der Testautomatisierung ist die Vermeidung menschlicher Fehler durch konsistente, wiederholbare Ausführung.",
            reference: "Lehrplan 6.2.1"
        }
    },

    // ========================================================================
    // GTB SAMPLE EXAM SET F (v1.2) - 40 Fragen
    // ========================================================================

    // === SET F: KAPITEL 1 - Grundlagen des Testens (8 Fragen) ===
    {
        id: "gtb-f-1",
        source: "GTB Sample Exam F",
        lo: "FL-1.1.1",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Optionen beschreibt KEIN typisches Testziel?",
        hint: "Testziele betreffen SOFTWAREQUALITÄT. Was betrifft etwas ANDERES als die Software selbst?",
        answers: [
            "Fehlerwirkungen auslösen und Fehlerzustände aufdecken",
            "Vertrauen in das Qualitätsniveau des Testobjekts schaffen",
            "Verringerung des Risikos einer unzureichenden Testumgebung",
            "Erfüllung vertraglicher, gesetzlicher oder regulatorischer Anforderungen"
        ],
        correct: 2,
        feedback: {
            trap: "a) Fehlerwirkungen auslösen = typisches Testziel. b) Vertrauen schaffen = typisches Testziel. d) Vertragliche/gesetzliche Erfüllung = typisches Testziel. Alle drei stehen im Lehrplan!",
            principle: "Testziele beziehen sich auf SOFTWARE-Qualität, NICHT auf Testinfrastruktur/Testumgebung.",
            explanation: "c) ist KEIN typisches Testziel: Der Lehrplan nennt 'Verringerung des Risikos unzureichender SOFTWARE-Qualität' – nicht Testumgebung! Die Testumgebung ist ein Mittel zum Zweck, kein Testziel.",
            reference: "Lehrplan 1.1.1"
        }
    },
    {
        id: "gtb-f-2",
        source: "GTB Sample Exam F",
        lo: "FL-1.2.3",
        kLevel: 2,
        chapter: 1,
        text: "Ein im Büro klingelndes Telefon lenkt einen Softwareentwickler ab, was dazu führt, dass er die Logik zur Prüfung der Einhaltung der Obergrenze einer Eingabevariablen falsch programmiert. Später, während des Systemtests, stellt ein Tester fest, dass dieses Eingabefeld ungültige Eingabewerte akzeptiert.\n\nWelcher der folgenden Begriffe beschreibt die fehlerhaft programmierte Logik zur Prüfung der Einhaltung der Obergrenze als Fehler im Code in diesem Szenario zutreffend?",
        hint: "Unterscheide: Grundursache (Ablenkung), Fehlhandlung (Denkfehler), Fehlerzustand (im Code), Fehlerwirkung (sichtbares Problem).",
        answers: [
            "Grundursache",
            "Fehlerwirkung",
            "Fehlhandlung",
            "Fehlerzustand"
        ],
        correct: 3,
        feedback: {
            trap: "a) Grundursache = das klingelnde Telefon (WARUM der Fehler passierte). b) Fehlerwirkung = Akzeptanz ungültiger Werte (SICHTBARES Symptom). c) Fehlhandlung = der Denkfehler des Entwicklers (menschlicher Irrtum).",
            principle: "Fehlerkette: Grundursache → Fehlhandlung → Fehlerzustand (im Code) → Fehlerwirkung (sichtbar).",
            explanation: "d) ist RICHTIG: Die fehlerhaft programmierte Logik im Code ist der FEHLERZUSTAND (Defect/Bug). Er liegt IM CODE und ist das Ergebnis der Fehlhandlung. Die Fehlerwirkung entsteht erst, wenn dieser Code ausgeführt wird.",
            reference: "Lehrplan 1.2.3"
        }
    },
    {
        id: "gtb-f-3",
        source: "GTB Sample Exam F",
        lo: "FL-1.4.1",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aktivitäten findet während der Aktivität 'Testanalyse' des Testprozesses statt?",
        hint: "Testanalyse = WAS soll getestet werden? Dazu gehört: Testbasis analysieren, Testbarkeit bewerten.",
        answers: [
            "Identifikation der erforderlichen Infrastruktur und Werkzeuge",
            "Erstellen von Testsuiten basierend auf den Testskripten",
            "Analyse der 'Lessons Learned' zur Prozessverbesserung",
            "Bewerten der Testbasis hinsichtlich Testbarkeit"
        ],
        correct: 3,
        feedback: {
            trap: "a) Infrastruktur/Werkzeuge → TESTENTWURF oder Testrealisierung. b) Testsuiten erstellen → TESTREALISIERUNG. c) Lessons Learned → TESTABSCHLUSS.",
            principle: "Testanalyse = WAS soll getestet werden? Dazu gehört: Testbasis analysieren, TESTBARKEIT bewerten.",
            explanation: "d) ist RICHTIG: Die Bewertung der Testbasis hinsichtlich Testbarkeit ist eine TESTANALYSE-Aktivität. Hier wird geprüft, ob die Anforderungen überhaupt testbar formuliert sind.",
            reference: "Lehrplan 1.4.1"
        }
    },
    {
        id: "gtb-f-4",
        source: "GTB Sample Exam F",
        lo: "FL-1.3.1",
        kLevel: 2,
        chapter: 1,
        text: "Generell gilt, dass nach dem Pareto-Prinzip überdurchschnittlich viele Fehlerzustände oft in wenigen Bereichen eines Systems gefunden werden. Die entsprechenden Ausfälle führen häufig dazu, dass das System unbrauchbar wird.\n\nWelcher der folgenden Grundsätze des Testens ist hier beschrieben?",
        hint: "Pareto (80/20-Regel) = Wenige Bereiche enthalten VIELE Fehler. Welcher Grundsatz beschreibt das?",
        answers: [
            "Testen ist kontextabhängig.",
            "Fehlerzustände treten gehäuft auf.",
            "Tests nutzen sich ab.",
            "Trugschluss: 'Keine Fehler' bedeutet ein brauchbares System."
        ],
        correct: 1,
        feedback: {
            trap: "a) Kontextabhängigkeit beschreibt, dass Testen je nach Situation anders ist. c) Abnutzung beschreibt Pesticide Paradox. d) Trugschluss beschreibt, dass fehlerfreie Software trotzdem unbrauchbar sein kann.",
            principle: "Grundsatz 4: Fehlerzustände treten GEHÄUFT auf = Pareto-Prinzip (80/20-Regel).",
            explanation: "b) ist RICHTIG: Das Pareto-Prinzip (80% der Fehler in 20% der Komponenten) beschreibt genau den Grundsatz 'Fehlerzustände treten gehäuft auf' – wenige Bereiche enthalten die meisten Fehler.",
            reference: "Lehrplan 1.3, Grundsatz 4"
        }
    },
    {
        id: "gtb-f-5",
        source: "GTB Sample Exam F",
        lo: "FL-1.5.1",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden allgemeinen Kompetenzen ist für die Weitergabe von entdeckten Fehlerwirkungen an die betroffenen Entwickler BESONDERS WICHTIG?",
        hint: "WEITERGABE von Informationen an andere Menschen erfordert welche Kompetenz? Denke an zwischenmenschliche Fähigkeiten.",
        answers: [
            "Testwissen",
            "Kritisches Denken",
            "Sorgfalt",
            "Kommunikationsfähigkeit"
        ],
        correct: 3,
        feedback: {
            trap: "a) Testwissen hilft beim FINDEN von Fehlern. b) Kritisches Denken hilft beim ANALYSIEREN. c) Sorgfalt hilft beim DOKUMENTIEREN. Aber WEITERGABE = Kommunikation!",
            principle: "WEITERGABE von Informationen an andere Menschen erfordert KOMMUNIKATIONSFÄHIGKEIT.",
            explanation: "d) ist RICHTIG: Kommunikationsfähigkeit ist besonders wichtig für die effektive WEITERGABE von Informationen. Fehler konstruktiv zu berichten, ohne Entwickler zu demotivieren, erfordert gute Kommunikation.",
            reference: "Lehrplan 1.5.1"
        }
    },
    {
        id: "gtb-f-6",
        source: "GTB Sample Exam F",
        lo: "FL-1.4.3",
        kLevel: 2,
        chapter: 1,
        text: "Ordnen Sie die richtige Beschreibung zu:\nA. Eine Menge von Testfällen oder Testskripten, die in einem bestimmten Testzyklus ausgeführt werden sollen\nB. Eine Abfolge von Anweisungen für die Durchführung eines Tests\nC. Enthält die erwarteten Ergebnisse\nD. Die Dokumentation eines Ziels und der Agenda einer Testsitzung\n\nzu den Testarbeitsergebnissen:\n1. Testsuite\n2. Testfall\n3. Testskript\n4. Test-Charta",
        hint: "Testsuite=Sammlung, Testfall=erwartete Ergebnisse, Testskript=Anweisungen, Test-Charta=Ziel/Agenda.",
        answers: [
            "1A, 2C, 3B, 4D",
            "1D, 2B, 3A, 4C",
            "1A, 2C, 3D, 4B",
            "1D, 2C, 3B, 4A"
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) ordnen falsch zu. Merkhilfe: Suite=Sammlung, Fall=Ergebnis, Skript=Anweisungen, Charta=Ziel.",
            principle: "Testarbeitsergebnisse: Testsuite=Sammlung(A) | Testfall=erwartete Ergebnisse(C) | Testskript=Anweisungen(B) | Test-Charta=Ziel/Agenda(D)",
            explanation: "a) ist RICHTIG: 1→A (Testsuite = Menge von Testfällen), 2→C (Testfall = enthält erwartete Ergebnisse), 3→B (Testskript = Anweisungen), 4→D (Test-Charta = Ziel und Agenda für explorative Sitzung).",
            reference: "Lehrplan 1.4.3"
        }
    },
    {
        id: "gtb-f-7",
        source: "GTB Sample Exam F",
        lo: "FL-1.4.4",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN, wie Verfolgbarkeit zwischen der Testbasis, den Testmitteln, den Testergebnissen und den Fehlerzuständen das Testen unterstützt?",
        hint: "Verfolgbarkeit = Verknüpfung zwischen Elementen. Wofür ist das praktisch nützlich? Änderungsauswirkung, Regressionstest...",
        answers: [
            "Die Durchführung einer Auswirkungsanalyse liefert Informationen über die Qualität des Systems unter Test.",
            "Die Analyse der Verfolgbarkeit zwischen Testfällen und Testergebnissen liefert Informationen über die Vollständigkeit von Testfällen.",
            "Die Analyse der Verfolgbarkeit hilft bei der Durchführung einer Auswirkungsanalyse von Änderungen und bei der Auswahl geeigneter Testfälle für Regressionstests.",
            "Die Analyse der Verfolgbarkeit zwischen den Anforderungen und den Testfällen hilft bei der Analyse des Restrisikos."
        ],
        correct: 2,
        feedback: {
            trap: "a) Auswirkungsanalyse liefert keine Qualitätsinfos über das System. b) Vollständigkeit von Testfällen ist anders zu messen. d) Restrisiko-Analyse nutzt Verfolgbarkeit, aber das ist nicht der BESTE Nutzen.",
            principle: "Verfolgbarkeit = WELCHE Tests müssen bei Änderungen wiederholt werden? → Auswirkungsanalyse + Regressionstestauswahl.",
            explanation: "c) ist RICHTIG: Verfolgbarkeit hilft AM BESTEN bei: 1) Auswirkungsanalyse (welche Tests betrifft eine Änderung?) und 2) Auswahl geeigneter Testfälle für Regressionstests (welche Tests müssen wiederholt werden?).",
            reference: "Lehrplan 1.4.4"
        }
    },
    {
        id: "gtb-f-8",
        source: "GTB Sample Exam F",
        lo: "FL-1.5.2",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Aussagen stellt einen Vorteil des Whole-Team-Ansatzes dar?",
        hint: "Whole-Team = GEMEINSAME Verantwortung. Nicht: beliebige Aufgaben, separate Arbeit, feste Rollen.",
        answers: [
            "Jedes Teammitglied darf eine beliebige Aufgabe übernehmen.",
            "Jedes Teammitglied ist für die Qualität verantwortlich.",
            "Jedes Teammitglied arbeitet separat an seiner eigenen Aufgabe.",
            "Jedes Teammitglied hat eine festgelegte Rolle und Verantwortung."
        ],
        correct: 1,
        feedback: {
            trap: "a) 'Beliebige Aufgabe' ist falsch – es geht um Qualität, nicht beliebige Aufgaben. c) 'Separate Arbeit' widerspricht dem Teamgedanken. d) 'Feste Rollen' ist traditionell, nicht Whole-Team.",
            principle: "Whole-Team-Ansatz = JEDES Teammitglied ist für QUALITÄT verantwortlich (gemeinsame Verantwortung).",
            explanation: "b) ist RICHTIG: Der Hauptvorteil des Whole-Team-Ansatzes ist die gemeinsame Qualitätsverantwortung. Nicht nur Tester, sondern ALLE sind für Qualität zuständig – das verbessert die Teamdynamik und Produktqualität.",
            reference: "Lehrplan 1.5.2"
        }
    },

    // === SET F: KAPITEL 2 - Testen im SDLC (6 Fragen) ===
    {
        id: "gtb-f-9",
        source: "GTB Sample Exam F",
        lo: "FL-2.1.1",
        kLevel: 2,
        chapter: 2,
        text: "Sie arbeiten als Tester in einem Team, das mit einem sequenziellen Softwareentwicklungszyklus (SDLC) arbeitet.\n\nWie wirkt sich die Wahl dieses SDLC-Modells auf die zeitliche Planung der Tests aus?",
        hint: "Sequenziell = Code erst SPÄT verfügbar. Was bedeutet das für DYNAMISCHE Tests (die Code brauchen)?",
        answers: [
            "Dynamische Tests (Unit-Tests) können nicht in frühen Phasen dieses SDLC durchgeführt werden.",
            "Statische Tests können nicht in frühen Phasen in diesem SDLC durchgeführt werden.",
            "Die Testplanung kann nicht in frühen Phasen in diesem SDLC durchgeführt werden.",
            "Abnahmetests können in frühen Phasen in diesem SDLC durchgeführt werden."
        ],
        correct: 0,
        feedback: {
            trap: "b) Statische Tests (Reviews) brauchen keinen Code – IMMER früh möglich. c) Testplanung braucht keinen Code – IMMER früh möglich. d) Abnahmetests brauchen ein FERTIGES Produkt – NIE früh möglich.",
            principle: "Sequenziell = Code erst SPÄT verfügbar = DYNAMISCHE Tests (die Code ausführen) erst SPÄT möglich.",
            explanation: "a) ist RICHTIG: In sequenziellen SDLC-Modellen (Wasserfall, V-Modell) wird Code erst in späteren Phasen erstellt. Dynamische Tests (Unit-Tests, etc.) brauchen ausführbaren Code und können daher nicht früh durchgeführt werden.",
            reference: "Lehrplan 2.1.1"
        }
    },
    {
        id: "gtb-f-10",
        source: "GTB Sample Exam F",
        lo: "FL-2.1.2",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Aussagen ist eine gute Testpraktik, die für alle Softwareentwicklungslebenszyklen (SDLC) gilt?",
        hint: "Gute Praxis für ALLE SDLCs: Pro Teststufe eigene Ziele, Umfänge, Tiefen. Was passt dazu?",
        answers: [
            "Tester müssen Entwickler besonders bei den Softwareentwicklungsaktivitäten begleiten, für die es keine zugehörigen Testaktivitäten gibt.",
            "Tester sollten dabei unterstützen, unterschiedliche Testziele für jede Teststufe zu definieren, und eigene Testumfänge und Testtiefen für jede Teststufe festzulegen.",
            "Tester sollten erst mit der Testanalyse und dem Testentwurf beginnen, wenn die Anforderungen und Spezifikationen vollständig implementiert wurden.",
            "Tester sollten keine Reviews von Arbeitsergebnissen durchführen, um sich auf die Testdurchführung konzentrieren zu können."
        ],
        correct: 1,
        feedback: {
            trap: "a) Zu JEDER Entwicklungsaktivität gehört eine Testaktivität – es gibt keine 'ohne'. c) Testanalyse soll FRÜH beginnen (Shift-Left!). d) Tester SOLLTEN Reviews durchführen – das ist wertvoll.",
            principle: "Gute Praxis für ALLE SDLCs: Jede Teststufe hat eigene ZIELE, UMFÄNGE und TIEFEN.",
            explanation: "b) ist RICHTIG: Tester sollten für jede Teststufe unterschiedliche Testziele definieren (Unit ≠ System ≠ Abnahme) und passende Testumfänge und Testtiefen festlegen. Das gilt für alle SDLCs.",
            reference: "Lehrplan 2.1.2"
        }
    },
    {
        id: "gtb-f-11",
        source: "GTB Sample Exam F",
        lo: "FL-2.1.3",
        kLevel: 1,
        chapter: 2,
        text: "Welcher der folgenden Test-First-Ansätze verwendet üblicherweise das Gegeben/Wenn/Dann-Format, um die gewünschte Reaktion einer Anwendung auszudrücken?",
        hint: "Given/When/Then (Gherkin-Syntax) = Natürliche Sprache für Verhalten. Welcher Ansatz nutzt das?",
        answers: [
            "Testgetriebene Entwicklung (TDD)",
            "Abnahmetestgetriebene Entwicklung (ATDD)",
            "Verhaltensgetriebene Entwicklung (BDD)",
            "Kontinuierliche Integration / kontinuierliche Auslieferung (CI/CD)"
        ],
        correct: 2,
        feedback: {
            trap: "a) TDD verwendet Testcode (z.B. JUnit), nicht natürliche Sprache. b) ATDD nutzt Akzeptanzkriterien, aber nicht zwingend Given/When/Then. d) CI/CD ist kein Test-First-Ansatz.",
            principle: "BDD (Behavior-Driven Development) = GEGEBEN/WENN/DANN-Format (Gherkin-Syntax) in natürlicher Sprache.",
            explanation: "c) ist RICHTIG: BDD verwendet das Gegeben/Wenn/Dann-Format (auch Gherkin genannt), um das erwartete Verhalten in NATÜRLICHER SPRACHE zu beschreiben. Beispiel: 'Gegeben ein angemeldeter Benutzer, Wenn er auf Logout klickt, Dann wird er abgemeldet.'",
            reference: "Lehrplan 2.1.3"
        }
    },
    {
        id: "gtb-f-12",
        source: "GTB Sample Exam F",
        lo: "FL-2.1.4",
        kLevel: 2,
        chapter: 2,
        text: "Was sind die Vorteile von DevOps?",
        hint: "DevOps = Entwicklung + Betrieb zusammen. Hauptvorteil: Schnellere Releases. Was passt NICHT: Weniger Regression oder nur funktional.",
        answers: [
            "Schnellere Produktfreigabe und kürzere Produkteinführungszeit",
            "Schnelle Rückmeldung durch ausschließliche Fokussierung auf funktionale Tests",
            "Durch Shift-Left kann die Anzahl der Regressionstests minimiert werden.",
            "Kostengünstige Implementierung des Testautomatisierungs-Frameworks"
        ],
        correct: 0,
        feedback: {
            trap: "b) DevOps erhöht den Fokus auf NICHT-funktionale Tests, nicht nur funktionale. c) Regressionstests werden NICHT minimiert – sie werden automatisiert und häufiger ausgeführt. d) Automatisierung ist nicht automatisch kostengünstig.",
            principle: "DevOps = Entwicklung + Betrieb zusammen = SCHNELLERE Releases, KÜRZERE Time-to-Market.",
            explanation: "a) ist RICHTIG: Der Hauptvorteil von DevOps ist die schnellere Produktfreigabe und kürzere Markteinführungszeit durch enge Zusammenarbeit von Entwicklung und Betrieb mit automatisierten Pipelines.",
            reference: "Lehrplan 2.1.4"
        }
    },
    {
        id: "gtb-f-13",
        source: "GTB Sample Exam F",
        lo: "FL-2.2.2",
        kLevel: 2,
        chapter: 2,
        text: "Sie arbeiten als Tester in einem Projekt an einer mobilen Anwendung für Essensbestellungen. Eine Kundenanforderung mit hoher Priorität lautet:\n\n'In 95 % der Fälle muss die Bestellung in weniger als 10 Sekunden bearbeitet werden.'\n\nSie haben Testfälle erstellt, die Bearbeitungszeit gemessen und mit den Anforderungen verglichen.\n\nWelche Art von Test haben Sie durchgeführt?",
        hint: "Zeit messen = Performanz = nicht-funktionaler Test. Funktional = WAS macht es, nicht-funktional = WIE gut.",
        answers: [
            "Funktional, da die Testfälle die geschäftlichen Anforderungen des Kunden an das System abdecken.",
            "Nicht-funktional, da die Testfälle die Performanz des Systems messen.",
            "Explorativ, da die genaue Bearbeitungszeit nicht definiert wurde.",
            "Strukturell, da die interne Struktur des Programms zur Messung der Bearbeitungszeit bekannt sein muss."
        ],
        correct: 1,
        feedback: {
            trap: "a) Obwohl es eine Geschäftsanforderung ist, wird hier das WIE (Performanz) getestet, nicht das WAS (Funktion). c) Die Zeit IST definiert (10 Sek.) – nicht explorativ. d) Strukturell = White-Box, nicht Zeitmessung.",
            principle: "Funktional = WAS macht es? | Nicht-funktional = WIE GUT macht es das? (Performanz, Sicherheit, Usability...)",
            explanation: "b) ist RICHTIG: Das Messen der Bearbeitungszeit (95% in <10 Sek.) ist ein PERFORMANZTEST – eine Art des NICHT-FUNKTIONALEN Testens. Es prüft nicht WAS das System tut, sondern WIE SCHNELL es das tut.",
            reference: "Lehrplan 2.2.2"
        }
    },
    {
        id: "gtb-f-14",
        source: "GTB Sample Exam F",
        lo: "FL-2.2.3",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen über Fehlernachtests und Regressionstests ist korrekt?",
        hint: "Denke an das ZIEL beider Tests: Was prüft der Fehlernachtest? Was prüft der Regressionstest? Und wie verändert sich die MENGE beider Tests im Projektverlauf?",
        answers: [
            "Die Anzahl der Regressionstests nimmt mit dem Projektfortschritt zu, wohingegen die Anzahl der Fehlernachtests mit dem Projektfortschritt abnimmt.",
            "Regressionstests werden erstellt und durchgeführt, wenn das Testobjekt korrigiert wird, während Fehlernachtests immer dann durchgeführt werden, wenn das Testobjekt erweitert wird.",
            "Regressionstests werden durchgeführt, um zu prüfen, ob die Betriebsumgebung unverändert ist, während Fehlernachtests darauf abzielen, Änderungen am Testobjekt zu testen.",
            "Regressionstests befassen sich mit möglichen negativen Auswirkungen von Änderungen auf unveränderte Bereiche, während Fehlernachtests sich mit den positiven Auswirkungen korrigierender Änderungen befassen."
        ],
        correct: 3,
        feedback: {
            trap: "a) Fehlernachtests nehmen nicht unbedingt ab – neue Fehler können gefunden werden. b) vertauscht die Definitionen komplett. c) Betriebsumgebung ist nicht das Ziel von Regressionstests.",
            principle: "Regression = Keine NEGATIVEN Seiteneffekte durch Änderungen | Fehlernachtest = POSITIVE Wirkung: Fehler wirklich behoben.",
            explanation: "d) ist RICHTIG: Regressionstests prüfen, dass Änderungen keine NEGATIVEN Auswirkungen auf unveränderte Bereiche haben. Fehlernachtests prüfen die POSITIVE Auswirkung: Der ursprüngliche Fehler ist behoben.",
            reference: "Lehrplan 2.2.3"
        }
    },

    // === SET F: KAPITEL 3 - Statischer Test (4 Fragen) ===
    {
        id: "gtb-f-15",
        source: "GTB Sample Exam F",
        lo: "FL-3.1.1",
        kLevel: 1,
        chapter: 3,
        text: "Welche der folgenden Arbeitsprodukte können NICHT im Rahmen eines Projektes mit einem statischen Test geprüft werden?",
        hint: "Statische Tests brauchen ZUGANG zum Arbeitsprodukt. Worauf hat man keinen Zugang?",
        answers: [
            "Testfälle und ausführbare Testskripte",
            "Anforderungsspezifikation und Akzeptanzkriterien",
            "Rechtlich geschützter ausführbarer Code von Drittanbietern",
            "Projektdokumentation und Modelle"
        ],
        correct: 2,
        feedback: {
            trap: "a) Testfälle und Testskripte können statisch geprüft werden (Review). b) Anforderungen und Akzeptanzkriterien können statisch geprüft werden. d) Projektdokumentation und Modelle können statisch geprüft werden.",
            principle: "Statische Tests brauchen ZUGANG zum Arbeitsprodukt. Rechtlich geschützter Code ist nicht zugänglich!",
            explanation: "c) ist RICHTIG: Ausführbarer Code von Drittanbietern, der rechtlich geschützt ist, KANN NICHT statisch geprüft werden – man hat keinen Zugang zum Quellcode und darf ihn nicht analysieren.",
            reference: "Lehrplan 3.1.1"
        }
    },
    {
        id: "gtb-f-16",
        source: "GTB Sample Exam F",
        lo: "FL-3.1.3",
        kLevel: 2,
        chapter: 3,
        text: "Welche der folgenden Aussagen trifft auf die Unterschiede zwischen statischem und dynamischem Test zu?",
        hint: "Statisch = OHNE Ausführung. Fehlerwirkungen und Performanz brauchen Ausführung. Was findet statisch leichter?",
        answers: [
            "Beim statischen Test werden Fehlerwirkungen gefunden.",
            "Beim statischen Test wird unzureichende Softwareperformanz gemessen.",
            "Das ausschließliche Ziel beim statischen Test ist es, Fehlerzustände so früh wie möglich zu erkennen.",
            "Eine unzureichende Überdeckung von IT-Sicherheitsanforderungen kann durch den statischen Test leichter aufgedeckt werden."
        ],
        correct: 3,
        feedback: {
            trap: "a) FEHLERWIRKUNGEN erfordern Ausführung = dynamischer Test. b) PERFORMANZ messen erfordert Ausführung = dynamischer Test. c) 'Ausschließliches Ziel' ist zu eng – statisch hat mehrere Ziele.",
            principle: "Statischer Test = LÜCKEN in Anforderungsüberdeckung leichter finden (z.B. fehlende Sicherheitsanforderungen).",
            explanation: "d) ist RICHTIG: Unzureichende Überdeckung von IT-Sicherheitsanforderungen (oder anderen Anforderungen) kann durch statische Tests LEICHTER aufgedeckt werden – durch Verfolgbarkeitsanalyse, bevor Code existiert.",
            reference: "Lehrplan 3.1.3"
        }
    },
    {
        id: "gtb-f-17",
        source: "GTB Sample Exam F",
        lo: "FL-3.2.2",
        kLevel: 2,
        chapter: 3,
        text: "Welche der folgenden Aussagen über formale Reviews (z. B. Inspektionen) ist zutreffend?",
        hint: "Formales Review = strukturierter Prozess mit mehreren Aktivitäten: Planung, Vorbereitung, Sitzung, Nachbereitung...",
        answers: [
            "Das technische Review wird vom Autor geleitet.",
            "Der Reviewprozess besteht aus mehreren Aktivitäten, wie z. B. Planung, Kommunikation und Analyse, Behebung und Berichterstattung.",
            "Die zu prüfenden Arbeitsergebnisse werden während der Reviewsitzung verteilt.",
            "Fehlerzustände, die bei einem Review gefunden werden, werden nicht gemeldet, da sie bei dynamischen Tests sowieso gefunden werden."
        ],
        correct: 1,
        feedback: {
            trap: "a) Technisches Review wird vom MODERATOR geleitet, nicht vom Autor! c) Arbeitsergebnisse werden VOR der Sitzung verteilt, nicht während. d) Fehlerzustände aus Reviews WERDEN gemeldet – sie sind wertvoll!",
            principle: "Formales Review (z.B. Inspektion) = STRUKTURIERTER PROZESS mit mehreren Aktivitäten.",
            explanation: "b) ist RICHTIG: Der Reviewprozess besteht aus mehreren Aktivitäten: 1) Planung, 2) Reviewbeginn, 3) Individuelles Review, 4) Reviewsitzung, 5) Kommunikation und Analyse, 6) Behebung, 7) Berichterstattung.",
            reference: "Lehrplan 3.2.2"
        }
    },
    {
        id: "gtb-f-18",
        source: "GTB Sample Exam F",
        lo: "FL-3.2.3",
        kLevel: 1,
        chapter: 3,
        text: "Welche Aufgaben kann das Management bei einem formalen Review (z. B. Inspektion) übernehmen?",
        hint: "Rollen: Autor=Überarbeitung, Moderator=Sitzungsleitung, Protokollant=Aufzeichnung. Was macht MANAGEMENT?",
        answers: [
            "Gegebenenfalls Überarbeitung des Review-Objekts nach dem Review",
            "Entscheiden, was überprüft werden soll",
            "Sicherstellung der effektiven Durchführung von Reviewsitzungen und ggf. Mediation",
            "Aufzeichnung von Review-Informationen wie z. B. Review-Entscheidungen"
        ],
        correct: 1,
        feedback: {
            trap: "a) Überarbeitung nach Review = AUTOR. c) Sitzungsleitung/Mediation = MODERATOR. d) Aufzeichnung = PROTOKOLLANT.",
            principle: "Management-Aufgabe bei Reviews: ENTSCHEIDEN, WAS geprüft wird (Auswahl und Priorisierung von Arbeitsprodukten).",
            explanation: "b) ist RICHTIG: Das Management kann entscheiden, WAS geprüft werden soll, indem es Arbeitsprodukte basierend auf Anforderungen, Risiken und Geschäftszielen auswählt und priorisiert.",
            reference: "Lehrplan 3.2.3"
        }
    },

    // === SET F: KAPITEL 4 - Testverfahren (11 Fragen) ===
    {
        id: "gtb-f-19",
        source: "GTB Sample Exam F",
        lo: "FL-4.1.1",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen beschreibt einen Vorteil von Black-Box-Testverfahren gegenüber White-Box-Testverfahren?",
        hint: "Black-Box braucht keinen Quellcode-Zugang. Das ist unabhängig von der... was?",
        answers: [
            "Black-Box-Testverfahren können die interne Struktur und Verarbeitung des Testobjekts überprüfen.",
            "Black-Box-Testverfahren können unabhängig von der Implementierung der Software durchgeführt werden.",
            "Black-Box-Testverfahren nutzen das Wissen und die Erfahrung der Tester besser aus.",
            "Black-Box-Testverfahren können ohne Anpassung durchgeführt werden, obwohl das geforderte Verhalten des Testobjekts geändert wurde."
        ],
        correct: 1,
        feedback: {
            trap: "a) Interne Struktur prüfen = WHITE-BOX. c) Erfahrung nutzen = ERFAHRUNGSBASIERT. d) Ohne Anpassung bei Verhaltensänderung ist FALSCH – Tests müssen angepasst werden!",
            principle: "Black-Box-Vorteil = IMPLEMENTIERUNGSUNABHÄNGIG = Kein Quellcode-Zugang nötig, Tests können früher beginnen.",
            explanation: "b) ist RICHTIG: Black-Box-Tests können UNABHÄNGIG von der Implementierung durchgeführt werden – der Tester braucht keine Kenntnis des Quellcodes und kann Tests schon anhand der Spezifikation entwerfen.",
            reference: "Lehrplan 4.1.1"
        }
    },
    {
        id: "gtb-f-20",
        source: "GTB Sample Exam F",
        lo: "FL-4.2.1",
        kLevel: 3,
        chapter: 4,
        text: "Eine Fitness-App misst die Anzahl der täglich zurückgelegten Schritte und gibt dazu Feedback:\n• Bis einschließlich 1000: Couch Potato!\n• Über 1000 bis einschließlich 2000: Komm in die Puschen!\n• Über 2000 bis einschließlich 4000: Die Richtung stimmt!\n• Über 4000 bis einschließlich 6000: Gut gemacht!\n• Über 6000: Super!\n\nWelche der folgenden Gruppen von Testeingabewerten würde für DIE HÖCHSTE Überdeckung von Äquivalenzklassen sorgen?",
        hint: "5 ÄKs: ≤1000, 1001-2000, 2001-4000, 4001-6000, >6000. Zähle, wie viele VERSCHIEDENE ÄKs jede Option abdeckt!",
        answers: [
            "0, 1000, 2000, 3000, 4000",
            "1000, 2001, 4000, 4001, 6000",
            "123, 2345, 3456, 4567, 5678",
            "666, 999, 2222, 5555, 6666"
        ],
        correct: 3,
        feedback: {
            trap: "a) 0,1000,2000,3000,4000 deckt ÄK1 (2×), ÄK2 (1×), ÄK3 (2×) = nur 3 ÄKs. b) deckt ÄK1, ÄK3, ÄK4 = 3 ÄKs. c) deckt ÄK2, ÄK3, ÄK4 = 3 ÄKs.",
            principle: "5 ÄKs: ≤1000 | 1001-2000 | 2001-4000 | 4001-6000 | >6000. Höchste Überdeckung = Werte aus VIELEN VERSCHIEDENEN Klassen!",
            explanation: "d) ist RICHTIG: 666/999 (beide ÄK1), 2222 (ÄK3), 5555 (ÄK4), 6666 (ÄK5) = 4 verschiedene ÄKs = 80% Überdeckung. Es fehlt nur ÄK2 (1001-2000)!",
            reference: "Lehrplan 4.2.1"
        }
    },
    {
        id: "gtb-f-21",
        source: "GTB Sample Exam F",
        lo: "FL-4.2.2",
        kLevel: 3,
        chapter: 4,
        text: "Sie testen ein System, das die Endnote für Kursteilnehmer berechnet:\n• 0-50 Punkte: nicht bestanden\n• 51-70 Punkte: ausreichend\n• 71-90 Punkte: gut\n• 91-100 Punkte: sehr gut\n\nSie haben folgende Testfälle: 91, 50, 70, 100, 90, 0\n\nWie hoch ist die Überdeckung der 2-Wert-Grenzwertanalyse, die mit den vorhandenen Testfällen erreicht wird?",
        hint: "2-Wert-GWA hat 10 Elemente: Grenzwerte + ungültige Nachbarn. Zähle, wie viele davon durch 91, 50, 70, 100, 90, 0 abgedeckt sind.",
        answers: [
            "60 %",
            "75 %",
            "33,3 %",
            "100 %"
        ],
        correct: 0,
        feedback: {
            trap: "b) 75% wäre 7,5 von 10 – nicht erreichbar. c) 33,3% wäre nur 3-4 Werte. d) 100% bräuchte alle 10 Grenzwerte.",
            principle: "2-Wert-GWA: 10 Überdeckungselemente = -1, 0, 50, 51, 70, 71, 90, 91, 100, 101. Überdeckung = getestete / alle.",
            explanation: "a) ist RICHTIG: Die Testfälle 91, 50, 70, 100, 90, 0 decken 6 von 10 Überdeckungselementen ab → 60%. Es fehlen: -1, 51, 71, 101.",
            reference: "Lehrplan 4.2.2"
        }
    },
    {
        id: "gtb-f-22",
        source: "GTB Sample Exam F",
        lo: "FL-4.2.3",
        kLevel: 3,
        chapter: 4,
        text: "Sie testen ein CRM-System für einen Fahrrad-Tagesverleih mit folgenden Anforderungen:\n• Jeder kann ausleihen, aber nur Mitglieder erhalten 20% Rabatt\n• Bei versäumter Rückgabefrist entfällt der Rabatt\n• Nach 15 Ausleihen erhalten Mitglieder ein T-Shirt\n\nEin Tester hat die folgende Entscheidungstabelle entworfen (J=Ja, N=Nein, X=Aktion ausführen).\n\nWelche Regel entspricht NICHT den Anforderungen?",
        hint: "Prüfe jede Regel gegen die Anforderungen. Wer bekommt ein T-Shirt? Nur MITGLIEDER nach 15 Ausleihen!",
        image: "images/f_q22.png",
        answers: [
            "R4",
            "R2",
            "R6",
            "R8"
        ],
        correct: 3,
        feedback: {
            trap: "R4, R2, R6 entsprechen den Anforderungen. Prüfe jede Regel: Wer bekommt was? Nur MITGLIEDER bekommen T-Shirts!",
            principle: "Entscheidungstabelle muss ALLE Anforderungen korrekt abbilden. Anforderung: 'Nach 15 Ausleihen erhalten MITGLIEDER ein T-Shirt.'",
            explanation: "d) R8 ist FALSCH: Anforderung sagt 'Mitglieder erhalten T-Shirt'. R8 ist ein NICHT-Mitglied – darf also KEIN T-Shirt erhalten, auch nicht bei der 15. Ausleihe!",
            reference: "Lehrplan 4.2.3"
        }
    },
    {
        id: "gtb-f-23",
        source: "GTB Sample Exam F",
        lo: "FL-4.2.4",
        kLevel: 3,
        chapter: 4,
        text: "Sie testen ein System, dessen Lebenszyklus durch ein Zustandsübergangsdiagramm modelliert wird. Das System startet im INIT-Zustand und beendet seinen Betrieb im OFF-Zustand.\n\n[Hinweis: Das Diagramm zeigt Zustände INIT, TEST, RUN, PAUSE, OFF mit verschiedenen Übergängen]\n\nWas ist die MINDESTZAHL von Testfällen, um eine Überdeckung der gültigen Übergänge von 100 % zu erreichen (0-Switch-Überdeckung)?",
        hint: "Zähle alle Pfeile (Übergänge) im Diagramm. Überlege: Wie viele Testfälle braucht man, um ALLE Pfeile abzudecken?",
        image: "images/f_q23.png",
        answers: [
            "2",
            "3",
            "4",
            "7"
        ],
        correct: 1,
        feedback: {
            trap: "a) 2 reicht nicht – 'test' und 'run' schließen sich aus, man braucht mindestens 2 für diese. c) 4 ist mehr als nötig. d) 7 ist viel mehr als nötig.",
            principle: "0-Switch-Überdeckung (100% gültige Übergänge) = JEDER Pfeil im Diagramm mindestens 1× durchlaufen.",
            explanation: "b) ist RICHTIG: Mindestens 3 Testfälle sind nötig. Z.B.: TF1: INIT→test→TEST→done→OFF, TF2: INIT→run→RUN→error→OFF, TF3: INIT→run→RUN→pause→PAUSE→resume→RUN→pause→PAUSE→done→OFF. So werden alle Übergänge abgedeckt.",
            reference: "Lehrplan 4.2.4"
        }
    },
    {
        id: "gtb-f-24",
        source: "GTB Sample Exam F",
        lo: "FL-4.3.1",
        kLevel: 2,
        chapter: 4,
        text: "Ihre Testsuite erreicht eine Anweisungsüberdeckung von 100 %. Was bedeutet das?",
        hint: "100% Anweisungsüberdeckung = JEDE Code-Zeile mindestens einmal ausgeführt. Aber: Zweige sind etwas anderes!",
        answers: [
            "Eine beliebig ausgewählte Anweisung im Code wurde mindestens einmal ausgeführt.",
            "Jede Testsuite, die mehr Testfälle als Ihre Testsuite enthält, erreicht ebenfalls eine Anweisungsüberdeckung von 100 %.",
            "Jeder Zweig des Codes wurde mindestens einmal ausgeführt.",
            "Jede Kombination von Eingabewerten im Code wurde getestet."
        ],
        correct: 0,
        feedback: {
            trap: "b) Mehr Testfälle heißt NICHT automatisch höhere Überdeckung – sie könnten dieselben Anweisungen testen. c) 100% Anweisung ≠ 100% Zweig – false-Zweige könnten fehlen! d) Alle Kombinationen ist Pfadüberdeckung, nicht Anweisung.",
            principle: "100% Anweisungsüberdeckung = JEDE Code-Anweisung wurde mindestens 1× ausgeführt (aber nicht jeder Zweig!).",
            explanation: "a) ist RICHTIG (etwas ungenau formuliert): Bei 100% Anweisungsüberdeckung wurde JEDE Anweisung (nicht 'beliebig ausgewählt') mindestens einmal ausgeführt. Das garantiert aber KEINE vollständige Zweig- oder Pfadüberdeckung!",
            reference: "Lehrplan 4.3.1"
        }
    },
    {
        id: "gtb-f-25",
        source: "GTB Sample Exam F",
        lo: "FL-4.3.2",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen über Zweigtests ist zutreffend?",
        hint: "Denke an die Beziehung zwischen Anweisungs- und Zweigüberdeckung: Welche schließt welche ein? Und: Kann man ohne Testausführung überhaupt etwas überdecken?",
        answers: [
            "Wenn ein Programm nur bedingungslose Kontrollübergänge enthält, kann eine 100 %ige Zweigüberdeckung erreicht werden, ohne einen einzigen Testfall ausführen zu müssen.",
            "Wenn ein Zweig mit einem Testfall ausgeführt wird, werden alle Fehlerzustände darin aufgedeckt.",
            "Wenn eine 100 %ige Anweisungsüberdeckung erreicht wird, dann wird auch eine 100 %ige Zweigüberdeckung erreicht.",
            "Wenn eine 100 %ige Zweigüberdeckung erreicht wird, dann werden alle Entscheidungsergebnisse eines jeden bedingten Kontrollübergangs des Codes ausgeführt."
        ],
        correct: 3,
        feedback: {
            trap: "a) Ohne TESTAUSFÜHRUNG kann man KEINE Überdeckung erreichen – Code muss laufen! b) Ein Testfall deckt Fehlerzustände nicht garantiert auf. c) FALSCH! 100% Anweisung garantiert NICHT 100% Zweig (false-Zweige können fehlen).",
            principle: "100% Zweigüberdeckung = Alle Entscheidungsergebnisse (true UND false für jedes if) ausgeführt → schließt 100% Anweisung EIN.",
            explanation: "d) ist RICHTIG: Bei 100% Zweigüberdeckung werden ALLE Entscheidungsergebnisse jedes bedingten Kontrollübergangs ausgeführt (true UND false). Das schließt 100% Anweisungsüberdeckung EIN, aber nicht umgekehrt!",
            reference: "Lehrplan 4.3.2"
        }
    },
    {
        id: "gtb-f-26",
        source: "GTB Sample Exam F",
        lo: "FL-4.4.2",
        kLevel: 2,
        chapter: 4,
        text: "Was ist der Zweck einer Test-Charta beim sitzungsbasierten explorativen Testen?",
        hint: "Test-Charta = Anweisung VOR der Sitzung. Was enthält sie? Testziele und Ideen, nicht Ergebnisse.",
        answers: [
            "Die Test-Charta legt die Testziele für die Testsitzung fest.",
            "Die Test-Charta dokumentiert die durchgeführten Schritte und die gewonnenen Erkenntnisse.",
            "Die Test-Charta ist häufig in Form von Fragen formuliert.",
            "Die Test-Charta bewertet die Testergebnisse nach der Testsitzung."
        ],
        correct: 0,
        feedback: {
            trap: "b) Durchgeführte Schritte = TESTSITZUNGSBLÄTTER (Session Sheets), nicht Charta. c) Fragen-Format ist möglich, aber nicht der Hauptzweck. d) Bewertung nach der Sitzung = NACHBESPRECHUNG (Debriefing).",
            principle: "Test-Charta = VOR der Sitzung: Anweisung von TESTZIELEN und möglichen TESTIDEEN.",
            explanation: "a) ist RICHTIG: Die Test-Charta legt die TESTZIELE für die Testsitzung fest. Sie ist eine Anweisung, die beschreibt, WAS und WIE getestet werden soll – vor Beginn der Sitzung.",
            reference: "Lehrplan 4.4.2"
        }
    },
    {
        id: "gtb-f-27",
        source: "GTB Sample Exam F",
        lo: "FL-4.4.3",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen ist AM EHESTEN ein Vorteil des Testens anhand von Checklisten?",
        hint: "Checklisten = flexibel einsetzbar. NICHT: hohe Wiederholbarkeit (Tester interpretieren unterschiedlich). Was ist ein echter Vorteil?",
        answers: [
            "Es ermöglicht eine hohe Wiederholbarkeit der Tests.",
            "Es bietet einen strukturierten Ansatz für das Testen, ohne dass detaillierte Testfälle erforderlich sind.",
            "Es deckt alle Anforderungen an das Testobjekt ab.",
            "Es unterstützt funktionale und nicht-funktionale Tests."
        ],
        correct: 3,
        feedback: {
            trap: "a) KEINE hohe Wiederholbarkeit – Tester interpretieren unterschiedlich! b) 'Strukturierter Ansatz' ist eher Nachteil (weniger strukturiert als Testfälle). c) Nicht ALLE Anforderungen werden abgedeckt – Checklisten sind nicht vollständig.",
            principle: "Checklistenbasiertes Testen = FLEXIBEL für verschiedene Testarten (funktional UND nicht-funktional).",
            explanation: "d) ist RICHTIG: Checklisten unterstützen sowohl funktionale als auch nicht-funktionale Tests. Das ist ein wichtiger Vorteil – dieselbe Checkliste kann für verschiedene Testarten angepasst werden.",
            reference: "Lehrplan 4.4.3"
        }
    },
    {
        id: "gtb-f-28",
        source: "GTB Sample Exam F",
        lo: "FL-4.5.1",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen beschreibt NICHT den kollaborativen Ansatz beim Schreiben von User-Storys?",
        hint: "Kollaborativ = GEMEINSAM. Alle Stakeholder erstellen User-Storys und Akzeptanzkriterien zusammen, nicht einzeln!",
        answers: [
            "User-Storys beinhalten die Aspekte Fachlichkeit, Entwicklung und Testen.",
            "User-Storys werden von Fachbereichsvertretern, Entwicklern und Testern gemeinsam erstellt.",
            "Akzeptanzkriterien für User-Storys sind speziell von Testern zu erstellen, um die Unabhängigkeit des Tests zu gewährleisten.",
            "User-Storys werden so erstellt, dass sie unabhängig, verhandelbar, nützlich, abschätzbar, klein und testbar sind."
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) beschreiben alle den kollaborativen Ansatz korrekt: 3 Aspekte (a), gemeinsame Erstellung (b), INVEST-Kriterien (d).",
            principle: "Kollaborativ = ALLE Stakeholder erstellen User-Storys und Akzeptanzkriterien GEMEINSAM, nicht einzeln!",
            explanation: "c) ist NICHT kollaborativ: Akzeptanzkriterien werden GEMEINSAM von allen Stakeholdern erstellt – nicht nur von Testern 'um Unabhängigkeit zu gewährleisten'. Das widerspricht dem kollaborativen Ansatz!",
            reference: "Lehrplan 4.5.1"
        }
    },
    {
        id: "gtb-f-29",
        source: "GTB Sample Exam F",
        lo: "FL-4.5.3",
        kLevel: 3,
        chapter: 4,
        text: "Sie verwenden abnahmetestgesteuerte Entwicklung (ATDD) und entwerfen Testfälle basierend auf folgender User-Story:\n\n'Als regulärer oder spezieller Benutzer möchte ich meine elektronische Etagenkarte für den Zutritt zu bestimmten Etagen nutzen können.'\n\nAkzeptanzkriterien:\nAC1: Normale Benutzer haben Zugang zu den Etagen 1 bis 3.\nAC2: Etage 4 ist nur für spezielle Benutzer zugänglich.\nAC3: Spezielle Benutzer haben alle Zugriffsrechte von regulären Benutzern.\n\nWelcher Testfall ist DER SINNVOLLSTE, um AC3 zu testen?",
        hint: "AC3 testen = SPEZIELLER Benutzer hat REGULÄRE Rechte. Also: Spezieller Benutzer → Etagen 1-3 prüfen.",
        answers: [
            "Überprüfen Sie, ob ein regulärer Benutzer Zugang zu den Etagen 1 und 3 hat.",
            "Stellen Sie sicher, dass ein regulärer Benutzer keinen Zugang zur Etage 4 hat.",
            "Überprüfen Sie, ob ein spezieller Benutzer Zugang zur Etage 5 hat.",
            "Überprüfen Sie, ob ein spezieller Benutzer Zugang zu den Etagen 1, 2 und 3 hat."
        ],
        correct: 3,
        feedback: {
            trap: "a) testet AC1 (reguläre Rechte), nicht AC3. b) testet eine Einschränkung für reguläre, nicht AC3. c) Etage 5 ist NICHT spezifiziert – irrelevanter Test!",
            principle: "ATDD: Testfall muss das SPEZIFISCHE Akzeptanzkriterium DIREKT prüfen. AC3 = Spezielle haben ALLE regulären Rechte.",
            explanation: "d) ist RICHTIG: AC3 besagt 'Spezielle Benutzer haben alle Zugriffsrechte von regulären Benutzern'. Also: SPEZIELLER Benutzer muss Zugang zu Etagen 1, 2 UND 3 haben (= alle regulären Rechte).",
            reference: "Lehrplan 4.5.3"
        }
    },

    // === SET F: KAPITEL 5 - Testmanagement (9 Fragen) ===
    {
        id: "gtb-f-30",
        source: "GTB Sample Exam F",
        lo: "FL-5.1.1",
        kLevel: 2,
        chapter: 5,
        text: "Betrachten Sie folgende Festlegung eines Testkonzepts:\n\n'Die korrekte Funktionsweise von Komponenten wird mit Hilfe von Komponententests und Komponentenintegrationstests überprüft. Es muss der Nachweis erbracht werden, dass für jede als kritisch eingestufte Komponente eine 100%ige Zweigüberdeckung erreicht wird.'\n\nZu welchem Teil des Testkonzepts gehört diese Festlegung?",
        hint: "Teststufen + Metriken + Endekriterien (100% Überdeckung) gehören zum... welchen Teil des Testkonzepts?",
        answers: [
            "Testumgebung",
            "Risikoverzeichnis",
            "Kontext des Testens",
            "Testansatz"
        ],
        correct: 3,
        feedback: {
            trap: "a) Testumgebung = Hardware, Software, Infrastruktur. b) Risikoverzeichnis = Auflistung von Risiken. c) Kontext = Hintergrund, Projektbeschreibung.",
            principle: "TESTANSATZ im Testkonzept = Teststufen + zu erhebende Metriken + ENDEKRITERIEN (wie '100% Zweigüberdeckung').",
            explanation: "d) ist RICHTIG: Der Testansatz enthält Informationen über Teststufen (Komponententest, Integration), Metriken und Endekriterien (100% Zweigüberdeckung für kritische Komponenten).",
            reference: "Lehrplan 5.1.1"
        }
    },
    {
        id: "gtb-f-31",
        source: "GTB Sample Exam F",
        lo: "FL-5.1.4",
        kLevel: 3,
        chapter: 5,
        text: "Bei einem Planungspoker wurden folgende Aufwandsschätzungen vergeben:\n• Kunden: 5\n• Entwickler: 5\n• Tester: 20\n\nWas ist DER BESTE nächste Schritt in dieser Planungsrunde?",
        hint: "Planungspoker: Bei unterschiedlichen Schätzungen wird diskutiert, WARUM. Keine Mehrheitsentscheidung!",
        answers: [
            "Da die Schätzungen der Kunden und der Entwickler übereinstimmen, kann das Team davon ausgehen, dass sie gut sind. Der Planungspoker wird beendet.",
            "Das Team diskutiert gemeinsam, warum kein Konsens über die Schätzungen erreicht wurde. Eine weitere Runde Planungspoker folgt.",
            "Da der Kunde am Ende das System erhält, ist bei solchen Konflikten seine Schätzung entscheidend.",
            "Der Planungspoker wird so lange fortgesetzt, bis alle Schätzungen exakt gleich sind."
        ],
        correct: 1,
        feedback: {
            trap: "a) Die Tester-Schätzung (20) wird IGNORIERT – das ist NICHT Planungspoker! c) Keine Einzelperson entscheidet allein. d) Exakt gleiche Werte sind NICHT erforderlich – Konsens reicht.",
            principle: "Planungspoker: Bei ABWEICHUNGEN wird DISKUTIERT (Warum 20 statt 5?) → dann erneut schätzen bis KONSENS.",
            explanation: "b) ist RICHTIG: Bei unterschiedlichen Schätzungen (5, 5, 20) diskutiert das Team die GRÜNDE (z.B. Tester sieht Testaufwand, den andere übersehen) und führt weitere Runden durch, bis Konsens erreicht ist.",
            reference: "Lehrplan 5.1.4"
        }
    },
    {
        id: "gtb-f-32",
        source: "GTB Sample Exam F",
        lo: "FL-5.1.6",
        kLevel: 1,
        chapter: 5,
        text: "Welche der folgenden Aussagen über die Testpyramide trifft zu?",
        hint: "Testpyramide: UNTEN viele kleine Tests (granular), OBEN wenige große Tests (weniger granular).",
        answers: [
            "Die Testpyramide legt den Schwerpunkt auf eine kleine Anzahl von Tests auf den unteren Teststufen.",
            "Je mehr man sich der Spitze der Pyramide nähert, desto weniger granular sollte das Testen sein.",
            "Die Testpyramide hat genau 3 Testschichten und umfasst immer Unit-Tests, Integrationstests und End-to-End-Tests.",
            "High-Level-End-to-End-Tests sind anwendernah und daher in der Regel schneller als Tests auf den unteren Schichten."
        ],
        correct: 1,
        feedback: {
            trap: "a) UNTEN sind VIELE Tests, nicht wenige! c) Die Anzahl der Schichten kann VARIIEREN. d) High-Level-Tests (E2E) sind LANGSAMER als Unit-Tests, nicht schneller!",
            principle: "Testpyramide: UNTEN = viele kleine granulare Tests | OBEN = wenige große weniger-granulare Tests.",
            explanation: "b) ist RICHTIG: Je höher in der Pyramide, desto WENIGER GRANULAR wird getestet. Unit-Tests (unten) testen kleine Einheiten isoliert. E2E-Tests (oben) testen das Gesamtsystem weniger granular.",
            reference: "Lehrplan 5.1.6"
        }
    },
    {
        id: "gtb-f-33",
        source: "GTB Sample Exam F",
        lo: "FL-5.1.5",
        kLevel: 3,
        chapter: 5,
        text: "Folgende Prioritäten und Abhängigkeiten der Testfälle sind gegeben:\n\nTF1: Hoch, technisch abhängig von TF4\nTF2: Niedrig, keine Abhängigkeiten\nTF3: Hoch, logisch abhängig von TF4\nTF4: Mittel, keine Abhängigkeiten\nTF5: Niedrig, logisch abhängig von TF2\nTF6: Mittel, technisch abhängig von TF5\n\nWelcher Testausführungsplan berücksichtigt AM BESTEN Prioritäten und Abhängigkeiten?",
        hint: "Erst ABHÄNGIGKEITEN erfüllen, dann PRIORITÄT. TF1+TF3 hängen von TF4 ab. TF6→TF5→TF2 ist eine Kette.",
        answers: [
            "TF1 – TF3 – TF4 – TF6 – TF2 – TF5",
            "TF4 – TF3 – TF1 – TF2 – TF5 – TF6",
            "TF4 – TF1 – TF3 – TF5 – TF6 – TF2",
            "TF4 – TF2 – TF5 – TF1 – TF3 – TF6"
        ],
        correct: 1,
        feedback: {
            trap: "a) TF1, TF3 VOR TF4 ist unmöglich – sie hängen von TF4 ab! c) TF5 vor TF2 ist falsch – TF5 hängt von TF2 ab. d) TF6 am Ende ist ok, aber TF1/TF3 sollten vor TF5/TF6 (höhere Priorität).",
            principle: "Reihenfolge: 1) ABHÄNGIGKEITEN erfüllen, 2) Nach PRIORITÄT sortieren (Hoch vor Mittel vor Niedrig).",
            explanation: "b) ist RICHTIG: TF4 zuerst (keine Abhängigkeit). Dann TF3, TF1 (beide Hoch, hingen von TF4 ab). Dann TF2 (Niedrig, aber für TF5 nötig). Dann TF5. Dann TF6.",
            reference: "Lehrplan 5.1.5"
        }
    },
    {
        id: "gtb-f-34",
        source: "GTB Sample Exam F",
        lo: "FL-5.1.7",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Testarten gehört zum Quadranten Q2 – 'geschäftsorientiert, Unterstützung des Teams' – im Testquadranten-Modell?",
        hint: "Q2 = Geschäftsorientiert + Team-unterstützend. Welche Tests helfen dem Team, Geschäftsanforderungen zu verstehen?",
        answers: [
            "Komponentenintegrationstests",
            "User-Story-basierte Tests",
            "Nicht-funktionale Tests",
            "Explorative Tests"
        ],
        correct: 1,
        feedback: {
            trap: "a) Komponentenintegration = Q1 (Technologie + Team). c) Nicht-funktional = Q4 (Technologie + Kritisierend). d) Explorativ = Q3 (Geschäftlich + Kritisierend).",
            principle: "Testquadranten: Q1=Tech/Team, Q2=Business/Team, Q3=Business/Kritisch, Q4=Tech/Kritisch.",
            explanation: "b) ist RICHTIG: User-Story-basierte Tests gehören zu Q2 (GESCHÄFTSORIENTIERT + TEAM-UNTERSTÜTZEND). Sie helfen dem Team, die Geschäftsanforderungen zu verstehen und umzusetzen.",
            reference: "Lehrplan 5.1.7"
        }
    },
    {
        id: "gtb-f-35",
        source: "GTB Sample Exam F",
        lo: "FL-5.2.2",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen stellt ein Projektrisiko dar?",
        hint: "Unterscheide: Projektrisiko = betrifft PROJEKT (Ressourcen, Zeit). Produktrisiko = betrifft PRODUKT (Qualität).",
        answers: [
            "Das Management versetzt zwei erfahrene Tester in ein anderes Projekt.",
            "Das System entspricht nicht den Standards der funktionalen Sicherheit.",
            "Die Reaktionszeit des Systems übersteigt die Anforderungen der Benutzer.",
            "Das System kann nicht barrierefrei genutzt werden."
        ],
        correct: 0,
        feedback: {
            trap: "b) Sicherheitsstandards, c) Reaktionszeit, d) Barrierefreiheit sind alle PRODUKTRISIKEN – sie betreffen die Qualität des PRODUKTS, nicht das Projekt.",
            principle: "PROJEKTRISIKO = betrifft PROJEKT (Ressourcen, Zeit, Budget) | PRODUKTRISIKO = betrifft PRODUKT (Qualität, Funktionalität).",
            explanation: "a) ist RICHTIG: Das Versetzen erfahrener Tester ist ein PROJEKTRISIKO – es betrifft die Ressourcen des Projekts (weniger Tester = Risiko für Zeitplan, Qualität). Sicherheit, Performance, Barrierefreiheit sind Produktrisiken.",
            reference: "Lehrplan 5.2.2"
        }
    },
    {
        id: "gtb-f-36",
        source: "GTB Sample Exam F",
        lo: "FL-5.4.1",
        kLevel: 2,
        chapter: 5,
        text: "In einem Fehlerbehebungsprozess werden behobene Fehler in der Entwicklungsumgebung erfolgreich nachgetestet (Schritt 3), fallen aber dann in der Testumgebung (Schritt 5) wieder durch.\n\nWelcher Teil des Prozesses sollte als Nächstes überprüft werden?",
        hint: "Funktioniert in Umgebung A, scheitert in Umgebung B. Was ist für den Transfer zwischen Umgebungen verantwortlich?",
        answers: [
            "Die Aktivität von Entwicklern, die in Schritt 2 möglicherweise nicht ausreichend getestet haben.",
            "Die Aktivität von Testern, die möglicherweise unklar darüber sind, was in Schritt 5 zu testen ist.",
            "Das Konfigurationsmanagement, das möglicherweise die Integrität des Produkts in Schritt 4 nicht aufrechterhält.",
            "Die Aktivität von Entwicklern, die die Fehler in Schritt 1 möglicherweise nicht korrekt beheben."
        ],
        correct: 2,
        feedback: {
            trap: "Wenn Schritt 3 erfolgreich war, funktioniert die Behebung (nicht d). Derselbe Tester wiederholt den Test (nicht b).",
            principle: "Konfigurationsmanagement bewahrt die Integrität der Software bei Übertragungen.",
            explanation: "Wenn ein Test in einer Umgebung besteht aber in einer anderen scheitert, liegt es wahrscheinlich am Konfigurationsmanagement, das die Integrität beim Transfer nicht gewährleistet.",
            reference: "Lehrplan 5.4.1"
        }
    },
    {
        id: "gtb-f-37",
        source: "GTB Sample Exam F",
        lo: "FL-5.3.2",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen aus einem wöchentlichen Testfortschrittsbericht ist für die Stakeholder im Rahmen der Testüberwachung und Teststeuerung NICHT relevant?",
        hint: "Stakeholder interessiert das ERGEBNIS, nicht WIE intern Metriken ermittelt werden.",
        answers: [
            "Die Ausfallzeit der Testumgebung im Berichtszeitraum hat sich um 20 % auf 25 Stunden erhöht.",
            "Die Zeit für die Bereitstellung der Statistiken zu den Überdeckungsmetriken konnte um 35 % auf 72 Minuten reduziert werden.",
            "Die Durchführung der Testfälle liegt aktuell 6 Tage hinter dem Plan.",
            "Aus den Ergebnissen der Testdurchführung wurden neue Produktrisiken abgeleitet, die noch zu bewerten sind."
        ],
        correct: 1,
        feedback: {
            trap: "Umgebungsausfälle (a), Planabweichungen (c) und neue Risiken (d) sind sehr relevant.",
            principle: "Metriken sind wichtig, aber nicht WIE sie ermittelt werden.",
            explanation: "Die Verbesserung der internen Metrik-Ermittlung ist nicht relevant für Stakeholder bei der Testüberwachung. Relevant sind die Metriken selbst, nicht der Aufwand ihrer Erstellung.",
            reference: "Lehrplan 5.3.2"
        }
    },
    {
        id: "gtb-f-38",
        source: "GTB Sample Exam F",
        lo: "FL-5.5.1",
        kLevel: 3,
        chapter: 5,
        text: "Eine Kollegin hat folgenden Fehlerbericht erstellt:\n- ID: br00_23_12\n- Titel: Fehlermeldung beim Login mit leerem Namen nicht korrekt\n- Autor: Lisa van der Vaart (Test Engineer)\n- Testobjekt: build v00812\n- Testumgebung: cfg_full_02\n- Aufdeckender Testfall: sys_128\n- Beschreibung: Nach einem Login-Versuch mit leerem Namen gibt das System 'falsches Passwort' zurück, statt 'Name darf nicht leer sein'.\n- Schweregrad: niedrig | Priorität: mittel\n- Fehlerstatus: neu\n\nWelchen Verbesserungsvorschlag geben Sie am EHESTEN?",
        hint: "Prüfe alle Pflichtfelder eines Fehlerberichts: ID, Titel, Autor, Datum, Beschreibung, Status... Was fehlt?",
        answers: [
            "Der Titel beschreibt den Inhalt nicht korrekt.",
            "Schweregrad und Priorität müssten gleich sein, da Ersteres Letzteres bedingt.",
            "Sie haben diesen Fehler noch nicht beobachtet. Daher ist der Status nicht 'neu'.",
            "Der folgende Eintrag fehlt: Datum des Fehlerberichts."
        ],
        correct: 3,
        feedback: {
            trap: "Titel ist korrekt (a). Schweregrad und Priorität können unterschiedlich sein (b). Status 'neu' ist korrekt für neue Berichte (c).",
            principle: "Fehlerbericht muss das Datum enthalten.",
            explanation: "Das Datum des Fehlerberichts fehlt. Es zeigt an, wie aktuell die Beobachtung ist und sollte immer im Fehlerbericht enthalten sein.",
            reference: "Lehrplan 5.5.1"
        }
    },

    // === SET F: KAPITEL 6 - Testwerkzeuge (2 Fragen) ===
    {
        id: "gtb-f-39",
        source: "GTB Sample Exam F",
        lo: "FL-6.1.1",
        kLevel: 2,
        chapter: 6,
        text: "Welches der folgenden Testwerkzeuge ist AM NÜTZLICHSTEN für die Berichterstattung über die Anzahl der Fehlerzustände im Testobjekt?",
        hint: "Welches Werkzeug verwaltet Testprozesse UND liefert Übersichten zu Fehlern?",
        answers: [
            "Testmanagementwerkzeug",
            "Werkzeug für den statischen Test",
            "Werkzeug für die Testüberdeckung",
            "Werkzeug zur Unterstützung der Skalierbarkeit"
        ],
        correct: 0,
        feedback: {
            trap: "Statische Analyse (b) findet Fehler, berichtet aber nicht über Anzahlen. Überdeckung (c) misst Code-Abdeckung, nicht Fehler.",
            principle: "Testmanagementwerkzeuge = Zentrale Verwaltung inkl. Fehlerübersichten.",
            explanation: "Testmanagementwerkzeuge unterstützen die Testprozess-Aktivitäten und liefern Übersichten zu Fehlerzuständen, einschließlich Anzahlen und Status.",
            reference: "Lehrplan 6.1.1"
        }
    },
    {
        id: "gtb-f-40",
        source: "GTB Sample Exam F",
        lo: "FL-6.2.1",
        kLevel: 1,
        chapter: 6,
        text: "Welche der folgenden Aussagen stellt einen potenziellen Nutzen der Testautomatisierung dar?",
        hint: "Echte Vorteile: Objektivere Messungen, Konsistenz, Wiederholbarkeit. KEINE Vorteile: Einfache Aufwandsschätzung, kein Denken nötig.",
        answers: [
            "Testautomatisierung ermöglicht eine objektivere Bereitstellung von Messungen, die für Menschen zu kompliziert in ihrer Ermittlung sind.",
            "Für Testautomatisierung kann man sehr genau den Aufwand für die Einführung, Wartung und Schulung abschätzen.",
            "Testautomatisierung erhöht das Vertrauen in die Testergebnisse, denn es vermeidet menschliches kritisches Denken.",
            "Testautomatisierung entspricht immer den regulatorischen Anforderungen und Sicherheitsstandards."
        ],
        correct: 0,
        feedback: {
            trap: "Aufwandsschätzung ist schwierig (b = Risiko). Kritisches Denken wird weiterhin benötigt (c = Risiko). Regulatorische Konformität ist nicht garantiert (d = Risiko).",
            principle: "Automatisierung = Objektivere Messungen, die manuell zu komplex wären.",
            explanation: "Testautomatisierung ermöglicht objektivere Bewertungen und Bereitstellung von Messungen, die für Menschen zu kompliziert in ihrer Ermittlung sind.",
            reference: "Lehrplan 6.2.1"
        }
    },

    // === EIGENE FRAGEN FÜR FEHLENDE LERNZIELE ===
    // Basierend auf dem offiziellen CTFL v4.0.2 Lehrplan
    // Im Stil der offiziellen GTB Sample Exams

    // --- FL-1.2.1: Beitrag des Testens zum Erfolg (K2) ---
    {
        id: "custom-1.2.1-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.2.1",
        kLevel: 2,
        chapter: 1,
        text: "Das Management Ihres Unternehmens fragt, warum das Testteam auch an Projekten beteiligt sein sollte, bei denen die Entwickler ihre eigenen Unit-Tests schreiben und Code-Reviews durchführen.\n\nWelche der folgenden Aussagen beschreibt AM BESTEN den Mehrwert, den Tester zusätzlich einbringen?",
        hint: "Tester haben eine andere Perspektive als Entwickler. Was können sie, was Entwickler nicht können?",
        answers: [
            "Tester können die Code-Reviews vollständig ersetzen und so Entwicklerzeit einsparen.",
            "Tester können objektive Qualitätsmessungen liefern und vertreten indirekt die Perspektive der Benutzer während des gesamten SDLC.",
            "Tester garantieren, dass nach dem Release keine Fehler mehr auftreten werden.",
            "Tester sind nur für die Abnahmetests am Ende des Projekts relevant und können vorher nicht beitragen."
        ],
        correct: 1,
        feedback: {
            trap: "Testen ersetzt KEINE anderen QS-Maßnahmen wie Reviews (a). Garantien sind laut Grundsatz 1 unmöglich (c). Tester sind in ALLEN SDLC-Phasen relevant, nicht nur am Ende (d).",
            principle: "Tester = Informationslieferant für Qualitätsentscheidungen + indirekte Vertreter der Benutzer.",
            explanation: "Tester liefern objektive Messgrößen und denken aus Benutzerperspektive – beides können Entwickler allein nicht vollständig leisten.",
            reference: "Lehrplan 1.2.1, Seite 18"
        }
    },
    {
        id: "custom-1.2.1-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.2.1",
        kLevel: 2,
        chapter: 1,
        text: "Ein Stakeholder behauptet: 'Wir brauchen keine Tester. Unsere Entwickler können alle Fehler selbst finden.'\n\nWelches der folgenden Argumente widerlegt diese Aussage AM BESTEN unter Berücksichtigung des Beitrags des Testens zum Erfolg?",
        hint: "Entwickler haben einen 'blinden Fleck' für bestimmte Aspekte. Was übersehen sie leicht?",
        answers: [
            "Entwickler sind generell unfähig, Fehler in ihrem eigenen Code zu finden.",
            "Tester bewerten die Software aus Benutzerperspektive und können Qualitätsmessungen zur Steuerung liefern, die über Unit-Tests hinausgehen.",
            "Tester führen automatisierte Tests durch, was Entwickler nicht können.",
            "Entwickler sollten überhaupt nicht testen, da dies die Qualität verschlechtert."
        ],
        correct: 1,
        feedback: {
            trap: "Entwickler KÖNNEN Fehler finden, haben aber andere Perspektiven (a ist falsch). Entwickler können auch automatisieren (c ist falsch). Entwickler SOLLTEN Unit-Tests schreiben (d ist falsch).",
            principle: "Tester ergänzen Entwickler durch: Benutzerperspektive + systemweite Qualitätsmessungen.",
            explanation: "Tester bringen die Benutzerperspektive ein und liefern Qualitätskennzahlen für das Gesamtsystem – Aspekte, die bei reinen Entwicklertests oft zu kurz kommen.",
            reference: "Lehrplan 1.2.1, Seite 18"
        }
    },

    // --- FL-1.2.2: Testen und Qualitätssicherung (K1) ---
    {
        id: "custom-1.2.2-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.2.2",
        kLevel: 1,
        chapter: 1,
        text: "In einem Meeting werden die Begriffe 'Testen' und 'Qualitätssicherung (QS)' synonym verwendet. Ein erfahrener Kollege korrigiert dies.\n\nWelche der folgenden Aussagen beschreibt den Unterschied zwischen Testen und QS korrekt?",
        hint: "QS = Prozess verbessern (PRÄVENTIV). Testen = Produkt prüfen (KORRIGIEREND). Die Begriffe werden oft verwechselt!",
        answers: [
            "Testen ist prozessorientiert und verhindert Fehler; QS ist produktorientiert und findet Fehler.",
            "Testen ist eine Form der Qualitätssteuerung (QC), die produktorientiert ist; QS ist prozessorientiert und präventiv.",
            "Testen und QS sind verschiedene Begriffe für dieselbe Aktivität.",
            "QS umfasst die Durchführung von Regressionstests; Testen umfasst die Prozessverbesserung."
        ],
        correct: 1,
        feedback: {
            trap: "Option (a) vertauscht die Definitionen. Option (c) ignoriert den wichtigen Unterschied. Option (d) vertauscht ebenfalls die Konzepte.",
            principle: "Testen = QC (produktorientiert, korrigierend) | QS = Prozessorientiert, präventiv.",
            explanation: "Testen ist eine Form der Qualitätssteuerung und konzentriert sich auf das Produkt. QS konzentriert sich auf die Verbesserung von Prozessen, um Fehler zu verhindern.",
            reference: "Lehrplan 1.2.2, Seite 18-19"
        }
    },
    {
        id: "custom-1.2.2-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.2.2",
        kLevel: 1,
        chapter: 1,
        text: "Ihr Unternehmen möchte die Qualität der Software verbessern, indem Fehler von vornherein vermieden werden, anstatt sie später zu finden.\n\nWelcher Ansatz entspricht dieser Zielsetzung AM BESTEN?",
        hint: "Fehler VERMEIDEN = präventiv = Prozesse verbessern. Fehler FINDEN = korrigierend = Testen.",
        answers: [
            "Die Anzahl der Regressionstests erhöhen.",
            "Mehr dynamische Tests auf Systemebene durchführen.",
            "Die Qualitätssicherung (QS) durch Prozessverbesserungen stärken.",
            "Die Testüberdeckung auf 100% erhöhen."
        ],
        correct: 2,
        feedback: {
            trap: "Regressionstests (a), dynamische Tests (b) und Testüberdeckung (d) sind alle Formen des TESTENS – sie finden Fehler, verhindern sie aber nicht.",
            principle: "Fehlerprävention = QS (Prozessverbesserung) | Fehlerfindung = Testen.",
            explanation: "QS konzentriert sich auf die Einhaltung und Verbesserung von Prozessen, um Fehler von vornherein zu vermeiden.",
            reference: "Lehrplan 1.2.2, Seite 18-19"
        }
    },

    // --- FL-1.4.2: Testprozess im Kontext (K2) ---
    {
        id: "custom-1.4.2-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.4.2",
        kLevel: 2,
        chapter: 1,
        text: "Sie wechseln von einem Wasserfall-Projekt zu einem agilen Scrum-Projekt. Ihr Vorgesetzter erwartet, dass Sie denselben Testprozess verwenden wie zuvor.\n\nWelche der folgenden Aussagen beschreibt AM BESTEN, warum diese Erwartung problematisch ist?",
        hint: "Der Testprozess muss an den SDLC angepasst werden. Agil und Wasserfall haben unterschiedliche Anforderungen.",
        answers: [
            "Der Testprozess ist standardisiert und muss nicht an das Entwicklungsmodell angepasst werden.",
            "Agile Projekte erfordern weniger Dokumentation und kürzere Testzyklen, was Anpassungen am Testprozess notwendig macht.",
            "In agilen Projekten wird überhaupt nicht getestet, daher ist ein Testprozess nicht erforderlich.",
            "Der Testprozess wird nur durch das Budget beeinflusst, nicht durch das Entwicklungsmodell."
        ],
        correct: 1,
        feedback: {
            trap: "Der Testprozess ist NICHT standardisiert für alle SDLCs (a). In agilen Projekten wird SEHR WOHL getestet (c). Der SDLC ist ein wichtiger Einflussfaktor (d).",
            principle: "Der Testprozess muss an den Kontext angepasst werden: SDLC, Risiken, Domäne, Budget, Zeit.",
            explanation: "Unterschiedliche SDLCs haben unterschiedliche Anforderungen an Teststrategie, Dokumentation und Timing.",
            reference: "Lehrplan 1.4.2, Seite 23"
        }
    },
    {
        id: "custom-1.4.2-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.4.2",
        kLevel: 2,
        chapter: 1,
        text: "Ein Testteam plant seinen Testprozess für ein neues Projekt. Die Geschäftsdomäne ist medizinische Software mit strengen regulatorischen Anforderungen.\n\nWelcher der folgenden Faktoren sollte den Testprozess in diesem Fall AM STÄRKSTEN beeinflussen?",
        hint: "Medizinische Software = sicherheitskritisch = hohe Risiken = strenge Anforderungen an Dokumentation und Nachweisbarkeit.",
        answers: [
            "Die persönlichen Präferenzen des Testmanagers bezüglich der Testwerkzeuge.",
            "Die Produktrisiken und regulatorischen Anforderungen der Domäne.",
            "Die Anzahl der Urlaubstage der Teammitglieder.",
            "Die Lieblingstestverfahren der einzelnen Tester."
        ],
        correct: 1,
        feedback: {
            trap: "Persönliche Präferenzen (a, d) und Urlaubstage (c) sind keine relevanten Kontextfaktoren für den Testprozess.",
            principle: "Kontextfaktoren: SDLC, Produktrisiken, Projektrisiken, Domäne, operative Einschränkungen.",
            explanation: "Bei sicherheitskritischer Software wie medizinischen Anwendungen sind Risiken und regulatorische Anforderungen die wichtigsten Einflussfaktoren.",
            reference: "Lehrplan 1.4.2, Seite 23"
        }
    },

    // --- FL-5.1.2: Beiträge des Testers zur Planung (K2) ---
    {
        id: "custom-5.1.2-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.2",
        kLevel: 2,
        chapter: 5,
        text: "In einem agilen Projekt findet die Release-Planung statt. Der Product Owner fragt, welchen Beitrag die Tester zu dieser Planung leisten sollten.\n\nWelche der folgenden Aktivitäten beschreibt den Beitrag des Testers zur Release-Planung AM BESTEN?",
        hint: "Release-Planung = grobe Planung über mehrere Iterationen. Tester bewerten Risiken und schätzen Testaufwand.",
        answers: [
            "Tester sollten während der Release-Planung bereits alle Testfälle vollständig ausarbeiten.",
            "Tester identifizieren testbare User-Storys, analysieren Risiken und schätzen den Testaufwand auf hoher Ebene.",
            "Tester entscheiden allein, welche Features in das Release aufgenommen werden.",
            "Tester sind bei der Release-Planung nicht beteiligt und warten auf die fertige Implementierung."
        ],
        correct: 1,
        feedback: {
            trap: "Vollständige Testfälle (a) sind zu detailliert für Release-Planung. Feature-Entscheidungen (c) trifft der Product Owner. Tester SIND an der Planung beteiligt (d).",
            principle: "Tester bei Release-Planung: Risikobewertung, Testbarkeit prüfen, Aufwand auf hoher Ebene schätzen.",
            explanation: "Tester tragen zur Release-Planung bei, indem sie User-Storys auf Testbarkeit prüfen, Risiken identifizieren und grobe Aufwandsschätzungen liefern.",
            reference: "Lehrplan 5.1.2, Seite 58"
        }
    },
    {
        id: "custom-5.1.2-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.2",
        kLevel: 2,
        chapter: 5,
        text: "Während der Iterationsplanung in einem Scrum-Team soll eine User-Story geschätzt werden. Der Tester meldet Bedenken bezüglich der Testbarkeit an.\n\nWelche der folgenden Aussagen beschreibt AM BESTEN, warum dieser Beitrag wichtig ist?",
        hint: "Tester prüfen, ob User-Storys TESTBAR sind. Unklare Akzeptanzkriterien = nicht testbar = Problem!",
        answers: [
            "Die Testbarkeit hat keinen Einfluss auf den Aufwand der User-Story.",
            "Tester sollten erst nach Abschluss der Entwicklung auf Testbarkeitsprobleme hinweisen.",
            "Wenn eine User-Story nicht testbar ist, fehlen möglicherweise klare Akzeptanzkriterien, was die gesamte Implementierung gefährdet.",
            "Testbarkeitsbedenken sollten ignoriert werden, da sie die Sprint-Planung verzögern."
        ],
        correct: 2,
        feedback: {
            trap: "Testbarkeit beeinflusst den Aufwand SEHR WOHL (a). Frühes Feedback ist besser als spätes (b). Testbarkeitsbedenken sind wichtig, nicht störend (d).",
            principle: "Tester bei Iterationsplanung: Testbarkeit prüfen, Akzeptanzkriterien mitdefinieren.",
            explanation: "Wenn eine User-Story nicht testbar ist, fehlen oft klare Akzeptanzkriterien. Dieses Problem früh zu erkennen spart später viel Nacharbeit.",
            reference: "Lehrplan 5.1.2, Seite 58"
        }
    },

    // --- FL-5.1.3: Eingangskriterien und Endekriterien (K2) ---
    {
        id: "custom-5.1.3-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.3",
        kLevel: 2,
        chapter: 5,
        text: "Ihr Testteam soll mit der Testdurchführung für einen neuen Build beginnen. Einige Tester möchten sofort starten, andere bestehen darauf, zuerst die Eingangskriterien zu prüfen.\n\nWelche der folgenden Aussagen beschreibt AM BESTEN den Zweck von Eingangskriterien?",
        hint: "Eingangskriterien = 'Dürfen wir starten?' Wenn sie nicht erfüllt sind, macht Testen keinen Sinn.",
        answers: [
            "Eingangskriterien definieren, wie viele Fehler maximal gefunden werden dürfen.",
            "Eingangskriterien definieren die Voraussetzungen, die erfüllt sein müssen, bevor eine Testaktivität beginnt.",
            "Eingangskriterien legen fest, wann das Testen als abgeschlossen gilt.",
            "Eingangskriterien sind optional und können bei Zeitdruck ignoriert werden."
        ],
        correct: 1,
        feedback: {
            trap: "Fehleranzahl (a) und Abschlussbedingungen (c) sind ENDEKRITERIEN. Eingangskriterien sollten nicht ignoriert werden (d).",
            principle: "Eingangskriterien = Voraussetzungen zum Starten | Endekriterien = Bedingungen zum Beenden.",
            explanation: "Eingangskriterien (z.B. Testumgebung bereit, Build verfügbar) müssen erfüllt sein, bevor mit dem Testen begonnen wird.",
            reference: "Lehrplan 5.1.3, Seite 58-59"
        }
    },
    {
        id: "custom-5.1.3-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.3",
        kLevel: 2,
        chapter: 5,
        text: "Das Management fragt, wann die Testphase als abgeschlossen betrachtet werden kann. Der Testmanager verweist auf die definierten Endekriterien.\n\nWelches der folgenden Beispiele ist ein typisches Endekriterium für Systemtests?",
        hint: "Endekriterien = 'Sind wir fertig?' Typisch: Überdeckung erreicht, keine kritischen Fehler offen, Testfälle durchgeführt.",
        answers: [
            "Die Testumgebung ist verfügbar und konfiguriert.",
            "Der Quellcode wurde eingecheckt und kompiliert erfolgreich.",
            "Die definierte Testüberdeckung wurde erreicht und keine kritischen Fehler sind offen.",
            "Der Product Owner hat die User-Storys freigegeben."
        ],
        correct: 2,
        feedback: {
            trap: "Testumgebung verfügbar (a), Code eingecheckt (b) und User-Storys freigegeben (d) sind EINGANGSKRITERIEN, nicht Endekriterien.",
            principle: "Endekriterien: Überdeckungsziele erreicht, Fehleranzahl unter Schwellwert, alle geplanten Tests durchgeführt.",
            explanation: "Typische Endekriterien sind: definierte Überdeckung erreicht, keine kritischen offenen Fehler, geschätzte Fehlerdichte niedrig genug.",
            reference: "Lehrplan 5.1.3, Seite 58-59"
        }
    },

    // --- FL-5.2.1: Risikodefinition und Risikoattribute (K2) ---
    {
        id: "custom-5.2.1-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.2.1",
        kLevel: 2,
        chapter: 5,
        text: "In einem Risiko-Workshop werden verschiedene Risiken identifiziert. Für jedes Risiko soll eine Risikostufe bestimmt werden.\n\nWelche der folgenden Aussagen beschreibt AM BESTEN, wie die Risikostufe berechnet wird?",
        hint: "Risikostufe = Eintrittswahrscheinlichkeit × Schadensausmaß. Beide Faktoren müssen berücksichtigt werden.",
        answers: [
            "Die Risikostufe entspricht der Anzahl der betroffenen Benutzer.",
            "Die Risikostufe wird als Produkt aus Eintrittswahrscheinlichkeit und Schadensausmaß (Auswirkung) bestimmt.",
            "Die Risikostufe wird ausschließlich durch den Projektmanager festgelegt.",
            "Die Risikostufe basiert auf der Erfahrung der Entwickler mit ähnlichen Projekten."
        ],
        correct: 1,
        feedback: {
            trap: "Benutzeranzahl (a), Projektmanager-Entscheidung (c) und Entwicklererfahrung (d) sind keine korrekten Methoden zur Risikostufenberechnung.",
            principle: "Risikostufe = Eintrittswahrscheinlichkeit × Schadensausmaß.",
            explanation: "Ein Risiko mit hoher Wahrscheinlichkeit UND hohem Schaden hat die höchste Risikostufe und muss priorisiert adressiert werden.",
            reference: "Lehrplan 5.2.1, Seite 62"
        }
    },
    {
        id: "custom-5.2.1-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.2.1",
        kLevel: 2,
        chapter: 5,
        text: "Ein Teammitglied sagt: 'Wir haben einen kritischen Fehler in der Zahlungsabwicklung gefunden. Das ist unser größtes Risiko.'\n\nWelche der folgenden Aussagen korrigiert dieses Missverständnis AM BESTEN?",
        hint: "Ein RISIKO ist etwas, das passieren KÖNNTE. Ein bereits gefundener Fehler ist kein Risiko mehr, sondern ein Problem.",
        answers: [
            "Ein gefundener Fehler ist ein Risiko, weil er negative Auswirkungen hat.",
            "Ein gefundener Fehler ist kein Risiko mehr, sondern ein Problem; ein Risiko ist ein potenzielles zukünftiges Ereignis.",
            "Fehler und Risiken sind synonyme Begriffe im Softwaretest.",
            "Nur Fehler in sicherheitskritischen Funktionen werden als Risiken bezeichnet."
        ],
        correct: 1,
        feedback: {
            trap: "Gefundene Fehler sind keine Risiken (a). Fehler und Risiken sind NICHT synonym (c). Die Definition gilt für ALLE Funktionen (d).",
            principle: "Risiko = potenzielles zukünftiges Ereignis | Problem = bereits eingetretenes Ereignis.",
            explanation: "Ein Risiko ist etwas, das passieren KÖNNTE. Sobald ein Fehler gefunden wurde, ist er kein Risiko mehr, sondern ein konkretes Problem, das gelöst werden muss.",
            reference: "Lehrplan 5.2.1, Seite 62"
        }
    },

    // --- FL-5.3.1: Testüberwachung, Teststeuerung und Testabschluss (K2) ---
    {
        id: "custom-5.3.1-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.3.1",
        kLevel: 2,
        chapter: 5,
        text: "Der Testmanager sammelt täglich Informationen über den Testfortschritt: ausgeführte Testfälle, gefundene Fehler, Überdeckungsmetriken.\n\nWelche Testaktivität führt der Testmanager damit AM EHESTEN durch?",
        hint: "Informationen SAMMELN = Überwachung. Auf Basis der Infos HANDELN = Steuerung.",
        answers: [
            "Teststeuerung",
            "Testüberwachung",
            "Testentwurf",
            "Testabschluss"
        ],
        correct: 1,
        feedback: {
            trap: "Steuerung (a) wäre das Ableiten von Maßnahmen. Testentwurf (c) ist das Erstellen von Testfällen. Testabschluss (d) kommt am Ende.",
            principle: "Testüberwachung = Informationen sammeln | Teststeuerung = Maßnahmen ableiten und umsetzen.",
            explanation: "Das Sammeln von Metriken und Fortschrittsinformationen ist Testüberwachung. Erst wenn daraus Maßnahmen abgeleitet werden, spricht man von Teststeuerung.",
            reference: "Lehrplan 5.3.1, Seite 64"
        }
    },
    {
        id: "custom-5.3.1-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.3.1",
        kLevel: 2,
        chapter: 5,
        text: "Die Testüberwachung zeigt, dass das Team 20% hinter dem Zeitplan liegt. Der Testmanager entscheidet, zusätzliche Tester einzusetzen und weniger kritische Tests zu streichen.\n\nWelche Testaktivität führt der Testmanager damit durch?",
        hint: "Auf Basis der überwachten Daten werden MASSNAHMEN ergriffen. Das ist Steuerung.",
        answers: [
            "Testüberwachung",
            "Teststeuerung",
            "Testplanung",
            "Testrealisierung"
        ],
        correct: 1,
        feedback: {
            trap: "Überwachung (a) ist das Sammeln der Daten. Planung (c) war bereits vorher abgeschlossen. Realisierung (d) ist das Erstellen von Testmitteln.",
            principle: "Teststeuerung = Maßnahmen ergreifen, um Abweichungen vom Plan zu korrigieren.",
            explanation: "Wenn aufgrund von Überwachungsdaten Entscheidungen getroffen und Maßnahmen umgesetzt werden, handelt es sich um Teststeuerung.",
            reference: "Lehrplan 5.3.1, Seite 64"
        }
    },
    {
        id: "custom-5.3.1-3",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.3.1",
        kLevel: 2,
        chapter: 5,
        text: "Nach dem erfolgreichen Go-Live eines Systems führt das Testteam eine Retrospektive durch und dokumentiert die gewonnenen Erkenntnisse.\n\nWelches der folgenden Ergebnisse ist ein typisches Produkt der Testabschluss-Aktivitäten?",
        hint: "Testabschluss = Dokumentation, Archivierung, Lessons Learned. Was wird für zukünftige Projekte aufbewahrt?",
        answers: [
            "Neue Testfälle für das nächste Release.",
            "Ein Testabschlussbericht mit Lessons Learned und Empfehlungen für zukünftige Projekte.",
            "Die Löschung aller Testmittel, um Speicherplatz freizugeben.",
            "Die sofortige Zuweisung aller Tester zu neuen Projekten ohne Dokumentation."
        ],
        correct: 1,
        feedback: {
            trap: "Neue Testfälle (a) gehören zur Testplanung des nächsten Projekts. Testmittel werden archiviert, nicht gelöscht (c). Dokumentation ist wichtig, nicht optional (d).",
            principle: "Testabschluss: Abschlussbericht erstellen, Lessons Learned dokumentieren, Testmittel archivieren.",
            explanation: "Der Testabschlussbericht dokumentiert, was gut lief, was verbessert werden kann, und welche Erkenntnisse für zukünftige Projekte relevant sind.",
            reference: "Lehrplan 5.3.1, Seite 64-65"
        }
    },
    {
        id: "custom-1.4.4-2",
        source: "Übungsfrage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.4.4",
        kLevel: 2,
        chapter: 1,
        text: "Beachten Sie die folgenden Testaktivitäten:\n\n1. Auswählen von Regressionstests\n2. Bewertung der Vollständigkeit der Testdurchführung\n3. Identifizieren, welche User-Storys offene Fehlerberichte haben\n4. Bewertung, ob die Qualität und Anzahl der Tests für jede Anforderung mit dem Grad des Produktrisikos vereinbar sind\n\nBetrachten Sie die folgenden Möglichkeiten, wie die Verfolgbarkeit beim Testen helfen kann:\n\nA. Verbessern der Verständlichkeit von Teststatusberichten, um den Status der Elemente der Testbasis einzubeziehen\nB. Testaktivitäten nachvollziehbarer/prüfbarer machen\nC. Bereitstellung von Informationen zur Beurteilung der Prozessqualität\nD. Analysieren der Auswirkungen von Änderungen\n\nWelche der folgenden Zuordnungen passt AM BESTEN zu den aufgeführten Testaktivitäten und den Möglichkeiten, wie die Verfolgbarkeit diese Aktivitäten jeweils unterstützen kann?",
        hint: "Regressionstests → Änderungsauswirkung. Vollständigkeit → prüfbar. User-Storys + Fehler → Statusberichte. Tests vs. Risiko → Prozessqualität.",
        answers: [
            "1D, 2B, 3C, 4A",
            "1B, 2D, 3A, 4C",
            "1D, 2C, 3A, 4B",
            "1D, 2B, 3A, 4C"
        ],
        correct: 3,
        feedback: {
            trap: "1→D ist klar (Änderungen → Regressionstests). Die Falle: 3→A (Statusberichte zeigen User-Story-Status inkl. Fehler), NICHT C (Prozessqualität).",
            principle: "Verfolgbarkeit: Änderungsauswirkung(D)→Regression | Prüfbarkeit(B)→Vollständigkeit | Statusberichte(A)→Testbasis-Status | Prozessqualität(C)→Risiko-Abgleich",
            explanation: "1. Regressionstests brauchen Änderungsauswirkungsanalyse (D). 2. Vollständigkeit bewerten = nachvollziehbar/prüfbar (B). 3. User-Storys mit Fehlern = Teststatusberichte (A). 4. Tests vs. Risiko = Prozessqualität (C).",
            reference: "Lehrplan 1.4.4, Seite 27"
        }
    }
]);

// Export für ES-Module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examQuestions };
}

// Explizit auf window setzen für Browser-Kompatibilität
if (typeof window !== 'undefined') {
    window.examQuestions = examQuestions;
}
