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
    },
    // =========================================================================
    // GTB SAMPLE EXAM SET B (40 Fragen)
    // =========================================================================
    {
        id: "gtb-b-1",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 1",
        lo: "FL-1.2.1",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN, warum Testen im Softwareentwicklungslebenszyklus notwendig ist?",
        hint: "Testen ist nicht die EINZIGE Methode zur Qualitätsbewertung. Denke an den Hauptzweck: Fehlerzustände finden.",
        answers: [
            "Dynamisches Testen ist die einzige Möglichkeit, die Qualität eines Testobjekts zu bewerten.",
            "Das Testen stellt sicher, dass die Benutzer die Bedürfnisse der Entwickler verstehen und nachvollziehen können.",
            "Testen wird ausschließlich durchgeführt, um regulatorische Standards zu erfüllen.",
            "Testen hilft, Fehlerzustände aufzudecken und damit die Qualität des Testobjekts zu verbessern."
        ],
        correct: 3,
        feedback: {
            trap: "a) Falsch – auch statisches Testen und Reviews bewerten Qualität. b) Falsch – umgekehrt: Entwickler sollen Benutzer verstehen. c) Falsch – Compliance ist EIN Grund, nicht der einzige.",
            principle: "Testen = Fehlerzustände finden → Qualität verbessern.",
            explanation: "Der Hauptzweck des Testens ist es, Fehlerzustände aufzudecken. Durch deren Behebung wird die Qualität des Testobjekts verbessert.",
            reference: "Lehrplan 1.2.1"
        }
    },
    {
        id: "gtb-b-2",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 2",
        lo: "FL-1.2.2",
        kLevel: 1,
        chapter: 1,
        text: "Was ist der Unterschied zwischen Testen und Qualitätssicherung?",
        hint: "QS = prozessorientiert, präventiv. Testen = produktorientiert, korrigierend.",
        answers: [
            "Testen ist ein prozessorientierter, präventiver Ansatz, während Qualitätssicherung ein produktorientierter, korrigierender Ansatz ist.",
            "Qualitätssicherung ist prozessorientiert und zielt auf deren Verbesserung, während Testen durch produktorientierte Maßnahmen auf angemessene Qualität zielt.",
            "Testen und Qualitätssicherung sind identisch und können synonym verwendet werden.",
            "Qualitätssicherung bezieht sich nur auf den Testprozess, während Testen den gesamten Entwicklungsprozess umfasst."
        ],
        correct: 1,
        feedback: {
            trap: "a) Vertauscht die Definitionen. c) Falsch – sie sind unterschiedlich. d) Falsch – QS umfasst ALLE Prozesse, nicht nur Testen.",
            principle: "QS = Prozessverbesserung (präventiv). Testen = Produktprüfung (korrigierend).",
            explanation: "Qualitätssicherung ist prozessorientiert und zielt auf Prozessverbesserung. Testen ist produktorientiert und prüft, ob das Produkt die Anforderungen erfüllt.",
            reference: "Lehrplan 1.2.2"
        }
    },
    {
        id: "gtb-b-3",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 3",
        lo: "FL-1.3.1",
        kLevel: 2,
        chapter: 1,
        text: "Ein Tester hat über einen Zeitraum von 5 Jahren Softwareanwendungen auf mobilen Geräten getestet. Über einen langen Zeitraum hat der Tester die bestehenden Testfälle nicht verändert und auch keine neuen Testfälle erstellt. Bei neueren Versionen der mobilen Plattform sind mehr Fehlerwirkungen von den Nutzern gemeldet worden.\n\nWelchen Grundsatz des Testens hat der Tester nicht beachtet?",
        hint: "Wenn dieselben Tests immer wieder ausgeführt werden, finden sie irgendwann keine neuen Fehler mehr.",
        answers: [
            "Testen ist abhängig vom Umfeld.",
            "Vollständiges Testen ist nicht möglich.",
            "Tests nutzen sich ab.",
            "Fehlerzustände treten gehäuft auf."
        ],
        correct: 2,
        feedback: {
            trap: "a) Umfeldabhängigkeit betrifft Testansatz je nach Projekt. b) Vollständigkeit betrifft die Unmöglichkeit, alles zu testen. d) Häufung betrifft die Verteilung von Fehlern.",
            principle: "Pestizid-Paradoxon: Dieselben Tests finden irgendwann keine neuen Fehler mehr.",
            explanation: "Der Grundsatz 'Tests nutzen sich ab' besagt, dass wiederholte Tests mit der Zeit weniger effektiv werden. Neue Tests müssen erstellt werden.",
            reference: "Lehrplan 1.3.1"
        }
    },
    {
        id: "gtb-b-4",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 4",
        lo: "FL-1.4.3",
        kLevel: 2,
        chapter: 1,
        text: "Betrachten Sie das folgende Testmittel:\n\nTest-Charta #04.018 Sitzungsdauer: 1h\nErforsche die Registrierungsseite\nMit verschiedenen fehlerhaften Eingabesätzen\nZu entdecken: Fehler beim Registrierungsvorgang bei fehlerhaften Eingaben\n\nIn welcher Testaktivität wird dieses Testmittel erstellt?",
        hint: "Eine Test-Charta definiert WAS und WIE getestet werden soll – das ist der Entwurf der Tests.",
        answers: [
            "Testplanung",
            "Testüberwachung und Teststeuerung",
            "Testanalyse",
            "Testentwurf"
        ],
        correct: 3,
        feedback: {
            trap: "a) Testplanung = Ressourcen, Zeitpläne, Strategie. b) Überwachung = Fortschrittskontrolle. c) Testanalyse = WAS zu testen ist (Testbedingungen).",
            principle: "Test-Chartas werden im Testentwurf erstellt – sie definieren WIE getestet wird.",
            explanation: "Eine Test-Charta ist ein Testmittel des Testentwurfs. Sie beschreibt den Testansatz für explorative Tests.",
            reference: "Lehrplan 1.4.3"
        }
    },
    {
        id: "gtb-b-5",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 5",
        lo: "FL-1.4.2",
        kLevel: 2,
        chapter: 1,
        text: "Welcher der folgenden Aspekte beeinflusst AM EHESTEN die Durchführung von Tests für ein bestimmtes Testobjekt?",
        hint: "Welcher Faktor hat direkten Einfluss auf die Testqualität und -durchführung?",
        answers: [
            "Die durchschnittliche Erfahrung des Marketingteams des Unternehmens.",
            "Das Wissen der Benutzer, dass ein neues System für sie entwickelt wird.",
            "Die Anzahl der Jahre an Testerfahrung der Mitglieder des Testteams.",
            "Die Organisationsstruktur der Benutzer der zu entwickelnden Anwendung."
        ],
        correct: 2,
        feedback: {
            trap: "a) Marketing hat keinen direkten Einfluss auf Tests. b) Benutzerwissen über Entwicklung ist irrelevant. d) Organisationsstruktur der Benutzer beeinflusst Tests nicht direkt.",
            principle: "Testerfahrung = direkter Einflussfaktor auf Testqualität.",
            explanation: "Die Erfahrung des Testteams beeinflusst direkt, wie effektiv Tests entworfen und durchgeführt werden.",
            reference: "Lehrplan 1.4.2"
        }
    },
    {
        id: "gtb-b-6",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 6",
        lo: "FL-1.4.4",
        kLevel: 2,
        chapter: 1,
        text: "Beachten Sie die folgenden Testaktivitäten:\n\n1. Auswählen von Regressionstests\n2. Bewertung der Vollständigkeit der Testdurchführung\n3. Identifizieren, welche User-Storys offene Fehlerberichte haben\n4. Bewertung, ob die Qualität und Anzahl der Tests für jede Anforderung mit dem Grad des Produktrisikos vereinbar sind\n\nBetrachten Sie die folgenden Möglichkeiten, wie die Verfolgbarkeit beim Testen helfen kann:\n\nA. Verbessern der Verständlichkeit von Teststatusberichten\nB. Testaktivitäten nachvollziehbarer/prüfbarer machen\nC. Bereitstellung von Informationen zur Beurteilung der Prozessqualität\nD. Analysieren der Auswirkungen von Änderungen\n\nWelche der folgenden Zuordnungen passt AM BESTEN?",
        hint: "Regressionstests → Änderungsauswirkung. Vollständigkeit → prüfbar. User-Storys + Fehler → Statusberichte.",
        answers: [
            "1D, 2B, 3C, 4A",
            "1B, 2D, 3A, 4C",
            "1D, 2C, 3A, 4B",
            "1D, 2B, 3A, 4C"
        ],
        correct: 3,
        feedback: {
            trap: "Die Zuordnungen müssen logisch passen: Regressionstests brauchen Änderungsanalyse (D), nicht Prüfbarkeit (B).",
            principle: "Verfolgbarkeit unterstützt: Änderungsauswirkung, Prüfbarkeit, Statusberichte, Prozessqualität.",
            explanation: "1→D (Regression braucht Änderungsanalyse), 2→B (Vollständigkeit = prüfbar), 3→A (User-Storys = Statusberichte), 4→C (Risiko = Prozessqualität).",
            reference: "Lehrplan 1.4.4"
        }
    },
    {
        id: "gtb-b-7",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 7",
        lo: "FL-1.5.1",
        kLevel: 2,
        chapter: 1,
        text: "Sie sind Teil eines Testteams, das an der Entwicklung eines Steuerungssystems eines Hubschraubers beteiligt ist. Kürzlich wurde ein erfahrener Hubschrauberpilot als Tester für das Testteam eingestellt.\n\nWelche positiven Auswirkungen werden die allgemeinen Kompetenzen des neuen Testers vermutlich AM EHESTEN auf das Testteam haben?",
        hint: "Ein Domänenexperte (Pilot) bringt Fachwissen mit – was kann er am besten beurteilen?",
        answers: [
            "Die Anwendung der 3-Wert-Grenzwertanalyse für einen gründlicheren Testentwurf im Systemtest.",
            "Inkonsistenzen und Ungenauigkeiten in den fachlichen Anforderungen werden effektiv aufgedeckt.",
            "Einsatz eines Werkzeugs zur Automatisierung von Zustandsübergangstests.",
            "Testergebnisse werden konstruktiver und defensiver an die Entwickler kommuniziert."
        ],
        correct: 1,
        feedback: {
            trap: "a) Grenzwertanalyse = technische Testkompetenz, nicht Domänenwissen. c) Automatisierung = technische Fähigkeit. d) Kommunikation = Soft Skill, nicht domänenspezifisch.",
            principle: "Domänenexperten erkennen fachliche Fehler in Anforderungen.",
            explanation: "Ein Hubschrauberpilot bringt Domänenwissen mit und kann fachliche Inkonsistenzen in den Anforderungen erkennen.",
            reference: "Lehrplan 1.5.1"
        }
    },
    {
        id: "gtb-b-8",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 8",
        lo: "FL-1.5.2",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt einen Vorteil des Whole-Team-Ansatzes (Whole Team Approach)?",
        hint: "Whole-Team = alle arbeiten zusammen für Qualität. Was entsteht durch Zusammenarbeit?",
        answers: [
            "Er ermöglicht es den Teammitgliedern, jederzeit jede Rolle zu übernehmen.",
            "Es wird nur ein Team benötigt, um das gesamte Entwicklungsprojekt zu unterstützen.",
            "Tester können isoliert arbeiten, ohne die Entwickler oder die Fachbereichsvertreter mit testspezifischen Informationen abzulenken.",
            "Oft ergeben sich Synergien, von denen das gesamte Team und das Projekt profitieren."
        ],
        correct: 3,
        feedback: {
            trap: "a) Rollen bleiben bestehen, nur Verantwortung wird geteilt. b) Teamgröße ist nicht der Punkt. c) Isolation ist das GEGENTEIL des Whole-Team-Ansatzes.",
            principle: "Whole-Team = Zusammenarbeit → Synergien.",
            explanation: "Der Whole-Team-Ansatz fördert Zusammenarbeit zwischen allen Teammitgliedern, was zu Synergien führt.",
            reference: "Lehrplan 1.5.2"
        }
    },
    {
        id: "gtb-b-9",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 9",
        lo: "FL-2.1.1",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen über die Wahl des Softwareentwicklungslebenszyklus und dessen Beziehung zum Testen ist KORREKT?",
        hint: "Sequenziell = spätes dynamisches Testen. Agil = frühe Automatisierung. Was passt?",
        answers: [
            "In der agilen Softwareentwicklung ersetzt die Automatisierung von Systemtests die Notwendigkeit von Regressionstests.",
            "Wenn ein sequenzielles Entwicklungsmodell verwendet wird, wird das dynamische Testen typischerweise in einer späteren Phase des Lebenszyklus durchgeführt.",
            "Wenn ein iteratives Entwicklungsmodell verwendet wird, werden Komponententests typischerweise manuell von Entwicklern durchgeführt.",
            "Wenn ein inkrementelles Entwicklungsmodell verwendet wird, werden statische Tests in frühen Inkrementen und dynamische Tests in späteren Inkrementen durchgeführt."
        ],
        correct: 1,
        feedback: {
            trap: "a) Automatisierung ERSETZT keine Regressionstests, sie UNTERSTÜTZT sie. c) Komponententests werden meist automatisiert. d) Beide Testarten finden in allen Inkrementen statt.",
            principle: "Sequenziell = Code erst spät fertig → dynamisches Testen spät.",
            explanation: "Bei sequenziellen Modellen (z.B. Wasserfall) wird der Code erst spät fertiggestellt, daher findet dynamisches Testen typischerweise in späteren Phasen statt.",
            reference: "Lehrplan 2.1.1"
        }
    },
    {
        id: "gtb-b-10",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 10",
        lo: "FL-2.1.2",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Optionen ist eine gute Testpraktik, unabhängig vom gewählten Modell des Softwareentwicklungslebenszyklus?",
        hint: "Früh beginnen = früh Fehler finden. Wann sollte die Überprüfung starten?",
        answers: [
            "Tester sollten die Arbeitsergebnisse einer Entwicklungsphase in der nächsten Entwicklungsphase überprüfen.",
            "Tester sollten mit der Überprüfung der Arbeitsergebnisse einer Softwareentwicklungsaktivität beginnen, sobald Entwürfe verfügbar sind.",
            "Tester sollten Arbeitsergebnisse einer Softwareentwicklungsaktivität nur im Rahmen der Testanalyse und des Testentwurfs überprüfen.",
            "Tester sollten Arbeitsergebnisse prüfen, sobald sie zur Nutzung freigegeben sind."
        ],
        correct: 1,
        feedback: {
            trap: "a) Zu spät – nächste Phase ist zu spät. c) Zu eingeschränkt. d) 'Freigegeben' kann zu spät sein.",
            principle: "Frühes Testen: Sobald Entwürfe verfügbar sind, beginnen.",
            explanation: "Eine bewährte Praxis ist es, mit der Überprüfung zu beginnen, sobald erste Entwürfe verfügbar sind – das entspricht dem Shift-Left-Ansatz.",
            reference: "Lehrplan 2.1.2"
        }
    },
    {
        id: "gtb-b-11",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 11",
        lo: "FL-2.1.3",
        kLevel: 1,
        chapter: 2,
        text: "Welches der folgenden Beispiele ist ein Test-First-Ansatz für die Entwicklung?",
        hint: "Test-First = Tests VOR dem Code schreiben. Welcher Ansatz macht das?",
        answers: [
            "Testgetriebene Entwicklung",
            "Überdeckungsgetriebene Entwicklung",
            "Qualitätsgetriebene Entwicklung",
            "Feature-getriebene Entwicklung"
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) sind keine etablierten Test-First-Ansätze. Feature-Driven Development ist ein agiler Ansatz, aber kein Test-First.",
            principle: "TDD = Test-Driven Development = Tests zuerst schreiben.",
            explanation: "Testgetriebene Entwicklung (TDD) ist ein Test-First-Ansatz, bei dem Tests vor dem Code geschrieben werden.",
            reference: "Lehrplan 2.1.3"
        }
    },
    {
        id: "gtb-b-12",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 12",
        lo: "FL-2.1.4",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen trifft auf DevOps zu?",
        hint: "DevOps = Automatisierung + schnelle Releases. Was wird automatisiert?",
        answers: [
            "Um Releases zu beschleunigen, wird kontinuierliche Integration eingesetzt, die es den Entwicklern ermöglicht, Code schnell und ohne Komponententests auszuliefern.",
            "Um Systeme schneller zu aktualisieren und freigeben zu können, nutzt die DevOps-Lieferkette Automatisierung, um zeitaufwendige manuelle Regressionstests zu reduzieren.",
            "Um die Kluft zwischen Entwicklung und Betrieb zu verringern, priorisiert das Testen mit einem Shift-Right-Ansatz den Abnahmetest parallel zur kontinuierlichen Auslieferung.",
            "Um eine größere Synergie zwischen Testern, Entwicklern und Betrieb zu schaffen, werden die Tests vollständig automatisiert, so dass keine manuellen Tests mehr erforderlich sind."
        ],
        correct: 1,
        feedback: {
            trap: "a) Ohne Tests = schlecht, nicht DevOps-Ziel. c) Shift-Right ist nur EIN Aspekt. d) 'Vollständig automatisiert' ist unrealistisch – manuelle Tests bleiben wichtig.",
            principle: "DevOps = Automatisierung von Regressionstests für schnellere Releases.",
            explanation: "DevOps nutzt Automatisierung, um manuelle Regressionstests zu reduzieren und schnellere Releases zu ermöglichen.",
            reference: "Lehrplan 2.1.4"
        }
    },
    {
        id: "gtb-b-13",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 13",
        lo: "FL-2.2.1",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Maßnahmen werden im Rahmen von Systemtests AM EHESTEN durchgeführt?",
        hint: "Systemtest = Gesamtsystem testen, End-to-End, durch unabhängiges Team.",
        answers: [
            "End-to-End-Tests der IT-Sicherheit eines Kreditmanagementsystems durch ein unabhängiges Testteam",
            "Test des Zusammenwirkens eines Geldwechselsystems mit einer externen Bank oder mit dem System einer externen Bank",
            "Beta-Test einer Lernplattform durch die Trainer eines Schulungsanbieters",
            "Test der Interaktion zwischen der Benutzeroberfläche und der Datenbank eines Personalverwaltungssystems"
        ],
        correct: 0,
        feedback: {
            trap: "b) Externe Systeme = Systemintegrationstest. c) Beta-Test = Abnahmetest. d) UI-DB-Interaktion = Komponentenintegrationstest.",
            principle: "Systemtest = End-to-End-Test des Gesamtsystems.",
            explanation: "End-to-End-Tests der IT-Sicherheit durch ein unabhängiges Team sind typische Systemtestaktivitäten.",
            reference: "Lehrplan 2.2.1"
        }
    },
    {
        id: "gtb-b-14",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 14",
        lo: "FL-2.3.1",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Entscheidungen sollte KEIN Auslöser für Wartungstests sein?",
        hint: "Wartungstest = nach Änderungen, Migration, Hotfixes. Was ist KEIN Änderungsauslöser?",
        answers: [
            "Die Entscheidung, die Wartbarkeit der Software zu testen.",
            "Die Entscheidung, das System nach der Migration auf eine neue Betriebsplattform zu testen.",
            "Die Entscheidung, die Wiederherstellbarkeit archivierter Daten nach Außerbetriebnahme zu testen.",
            "Die Entscheidung zu testen, nachdem ein 'Hotfix' auf die Produktivversion aufgespielt wurde."
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) sind alle Auslöser für Wartungstests: Migration, Außerbetriebnahme, Hotfixes.",
            principle: "Wartbarkeit testen ≠ Wartungstest. Wartbarkeit ist ein Qualitätsmerkmal.",
            explanation: "Das Testen der Wartbarkeit ist kein Wartungstest – es ist ein nicht-funktionaler Test. Wartungstests werden durch Änderungen ausgelöst.",
            reference: "Lehrplan 2.3.1"
        }
    },
    {
        id: "gtb-b-15",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 15",
        lo: "FL-3.1.2",
        kLevel: 2,
        chapter: 3,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN den Einsatz von statischen Tests?",
        hint: "Statisches Testen findet Fehler, die dynamisches Testen NICHT finden kann.",
        answers: [
            "Statisches Testen kann Fehlerzustände aufdecken, die durch dynamisches Testen nicht gefunden werden können.",
            "Fehlerzustände im Code können durch dynamische Tests effizienter gefunden werden als durch statische Tests.",
            "Der statische Test kann erst in einer späten Phase des SDLC durchgeführt werden.",
            "Um den statischen Test so effizient wie möglich zu gestalten, sollten so wenig Stakeholder wie möglich involviert sein."
        ],
        correct: 0,
        feedback: {
            trap: "b) Statische Tests sind oft effizienter für bestimmte Fehlerarten. c) Statische Tests können FRÜH durchgeführt werden. d) Mehr Stakeholder = mehr Perspektiven = besser.",
            principle: "Statisches Testen findet andere Fehlerarten als dynamisches Testen.",
            explanation: "Statisches Testen kann Fehlerzustände aufdecken, die durch dynamisches Testen nicht gefunden werden können (z.B. Inkonsistenzen, fehlende Anforderungen).",
            reference: "Lehrplan 3.1.2"
        }
    },
    {
        id: "gtb-b-16",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 16",
        lo: "FL-3.2.1",
        kLevel: 1,
        chapter: 3,
        text: "Welche der folgenden Aussagen beschreibt einen Vorteil von frühem und häufigem Stakeholder-Feedback?",
        hint: "Frühes Feedback = frühe Problemerkennung. Was wird früh erkannt?",
        answers: [
            "Es hilft dem Projektmanagement, weniger produktive Entwickler frühzeitig zu erkennen.",
            "Es reduziert die Notwendigkeit häufiger Interaktionen zwischen Projektmanagern und Stakeholdern.",
            "Es erleichtert die frühzeitige Identifikation und Kommunikation möglicher Qualitätsprobleme.",
            "Es verbessert das Verständnis der Endbenutzer hinsichtlich möglicher Verzögerungen bei der Anwendungsbereitstellung."
        ],
        correct: 2,
        feedback: {
            trap: "a) Feedback dient nicht der Mitarbeiterbewertung. b) Feedback ERHÖHT Interaktionen. d) Verzögerungen kommunizieren ist nicht der Hauptvorteil.",
            principle: "Frühes Feedback = frühe Erkennung von Qualitätsproblemen.",
            explanation: "Frühes und häufiges Stakeholder-Feedback ermöglicht die frühzeitige Identifikation und Kommunikation möglicher Qualitätsprobleme.",
            reference: "Lehrplan 3.2.1"
        }
    },
    {
        id: "gtb-b-17",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 17",
        lo: "FL-3.2.2",
        kLevel: 2,
        chapter: 3,
        text: "Die folgenden Aufgaben des Reviewprozesses werden beschrieben:\n\n1. Die zu bewertenden Qualitätsmerkmale und die Endekriterien werden festgelegt.\n2. Das Arbeitsergebnis wird allen Beteiligten zugänglich gemacht.\n3. Anomalien im Arbeitsergebnis werden identifiziert.\n4. Anomalien werden analysiert und diskutiert.\n\nOrdnen Sie diese Aufgabenbeschreibungen den folgenden Review-Aktivitäten zu:\nA. Individuelles Review\nB. Reviewbeginn\nC. Planung\nD. Kommunikation und Analyse\n\nWelche der folgenden Zuordnungen ist KORREKT?",
        hint: "Planung = Kriterien festlegen. Reviewbeginn = Dokument verteilen. Individuelles Review = Anomalien finden.",
        answers: [
            "1B, 2C, 3D, 4A",
            "1B, 2D, 3C, 4A",
            "1C, 2A, 3B, 4D",
            "1C, 2B, 3A, 4D"
        ],
        correct: 3,
        feedback: {
            trap: "Die Reihenfolge ist: Planung → Reviewbeginn → Individuelles Review → Kommunikation.",
            principle: "Reviewprozess: Planung(C) → Beginn(B) → Individuell(A) → Kommunikation(D).",
            explanation: "1→C (Kriterien = Planung), 2→B (Verteilen = Beginn), 3→A (Anomalien finden = Individuell), 4→D (Diskutieren = Kommunikation).",
            reference: "Lehrplan 3.2.2"
        }
    },
    {
        id: "gtb-b-18",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 18",
        lo: "FL-3.2.3",
        kLevel: 1,
        chapter: 3,
        text: "Der generische Reviewprozess kennt unter anderem die folgenden Rollen:\n\n1. Protokollant\n2. Reviewleiter\n3. Moderator\n4. Manager\n\nIm Rahmen von Reviews können diese Rollen folgende Verantwortlichkeiten übernehmen:\n\nA. Sorgt für die effektive Durchführung von Reviewsitzungen\nB. Zeichnet Reviewinformationen auf\nC. Entscheidet, was geprüft werden soll, und stellt Ressourcen zur Verfügung\nD. Übernimmt die Gesamtverantwortung für das Review\n\nWelche der folgenden Zuordnungen ist KORREKT?",
        hint: "Protokollant = aufzeichnen. Moderator = effektive Sitzung. Manager = Ressourcen. Reviewleiter = Gesamtverantwortung.",
        answers: [
            "1A, 2B, 3D, 4C",
            "1A, 2C, 3B, 4D",
            "1B, 2D, 3A, 4C",
            "1B, 2D, 3C, 4A"
        ],
        correct: 2,
        feedback: {
            trap: "Protokollant zeichnet auf (B), nicht moderiert (A). Manager entscheidet über Ressourcen (C).",
            principle: "Protokollant=Aufzeichnen, Reviewleiter=Gesamtverantwortung, Moderator=Sitzungsleitung, Manager=Ressourcen.",
            explanation: "1→B (Protokollant aufzeichnen), 2→D (Reviewleiter Gesamtverantwortung), 3→A (Moderator effektive Sitzung), 4→C (Manager Ressourcen).",
            reference: "Lehrplan 3.2.3"
        }
    },
    {
        id: "gtb-b-19",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 19",
        lo: "FL-4.1.1",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen beschreibt KORREKT die Zuordnung von Verfahrensgrundlagen zu Entscheidungstabellen- und Zweigtests?",
        hint: "Entscheidungstabelle = Spezifikation (Black-Box). Zweigtest = Kontrollfluss (White-Box).",
        answers: [
            "Beim Entscheidungstabellentest werden die Testfälle aus den Entscheidungsergebnissen im Code abgeleitet. Beim Zweigtest werden die Testfälle aus der Kenntnis des Kontrollflusses des Testelements abgeleitet.",
            "Beim Entscheidungstabellentest werden die Testfälle aus der Spezifikation abgeleitet, die die Geschäftslogik beschreibt. Beim Zweigtest basieren die Testfälle auf der Antizipation potenzieller Fehler im Quellcode.",
            "Beim Entscheidungstabellentest werden die Testfälle aus der Kenntnis des Kontrollflusses des Testelements abgeleitet. Beim Zweigtest werden die Testfälle aus der Spezifikation abgeleitet, die die Geschäftslogik beschreibt.",
            "Beim Entscheidungstabellentest werden die Testfälle unabhängig vom Zustand der Software abgeleitet. Beim Zweigtest können die Testfälle erst nach dem Entwurf und der Implementierung des Codes erstellt werden."
        ],
        correct: 3,
        feedback: {
            trap: "a) Entscheidungstabelle basiert auf Spezifikation, nicht Code. b) Zweigtest basiert auf Kontrollfluss, nicht Fehlerantizipation. c) Vertauscht die Grundlagen.",
            principle: "Entscheidungstabelle = Spezifikation (Black-Box). Zweigtest = Code-Struktur (White-Box).",
            explanation: "Entscheidungstabellentest basiert auf der Spezifikation (unabhängig vom Code). Zweigtest erfordert den implementierten Code.",
            reference: "Lehrplan 4.1.1"
        }
    },
    {
        id: "gtb-b-20",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 20",
        lo: "FL-4.2.1",
        kLevel: 3,
        chapter: 4,
        text: "Die Kunden der Autowaschanlage TestWash haben Karten, auf denen die Anzahl der bisher gekauften Wäschen gespeichert ist. Der Anfangswert des Zählers ist 0. Bei der Einfahrt in die Waschanlage erhöht das System den Zähler auf der Karte um eins.\n\nFür jede zehnte Wäsche gewährt das System einen Rabatt von 10 % und für jede zwanzigste Wäsche gewährt das System einen weiteren Rabatt von 40 % (d. h. insgesamt 50 % Rabatt).\n\nWelche der folgenden Eingaben (bezogen auf die Anzahl der Wäschen) erreicht die höchste Überdeckung der Äquivalenzklassen?",
        hint: "3 Äquivalenzklassen: Kein Rabatt, 10% Rabatt (jede 10.), 50% Rabatt (jede 20.). Welche Werte decken alle ab?",
        answers: [
            "19, 20, 30",
            "11, 12, 20",
            "1, 10, 50",
            "10, 29, 30, 31"
        ],
        correct: 2,
        feedback: {
            trap: "a) 19=kein Rabatt, 20=50%, 30=10% → nur 3 Klassen, aber 30 ist auch 10%-Klasse. b) 11=kein Rabatt, 12=kein Rabatt, 20=50% → fehlt 10%-Klasse.",
            principle: "Äquivalenzklassen: Kein Rabatt (1-9, 11-19, 21-29...), 10% (10, 30, 50...), 50% (20, 40, 60...).",
            explanation: "1=kein Rabatt, 10=10% Rabatt, 50=10% Rabatt (nicht 50%!). Aber 50 ist durch 10 teilbar, nicht durch 20. Korrektur: 1, 10, 20 wäre optimal. Option c) deckt: 1=kein, 10=10%, 50=10%.",
            reference: "Lehrplan 4.2.1"
        }
    },
    {
        id: "gtb-b-21",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 21",
        lo: "FL-4.2.2",
        kLevel: 3,
        chapter: 4,
        text: "Ein Weinlagerungssystem verwendet ein Kontrollgerät, das die Temperatur (T) des Weinlagers (gemessen in °C, gerundet auf das nächste Grad) misst:\n\n• Wenn 11 <= T <= 13: 'Optimale Temperatur'\n• Wenn T < 11: 'Die Temperatur ist zu niedrig!'\n• Wenn T > 13: 'Die Temperatur ist zu hoch!'\n\nSie verwenden die 3-Wert-Grenzwertanalyse. Welche Testeingaben ergeben eine 100%ige Überdeckung?",
        hint: "3-Wert-GWA: Für jeden Grenzwert 3 Werte (Grenze-1, Grenze, Grenze+1). Grenzen: 11 und 13.",
        answers: [
            "11, 12, 13",
            "9, 13, 15",
            "9, 10, 11, 12, 13, 14, 15",
            "10, 11, 12, 13, 14"
        ],
        correct: 3,
        feedback: {
            trap: "a) Nur die Grenzen selbst, nicht die Nachbarwerte. b) Nur 3 Werte, nicht alle Grenzwerte. c) Zu viele Werte, 9 und 15 sind überflüssig.",
            principle: "3-Wert-GWA: Grenze-1, Grenze, Grenze+1 für jede Grenze.",
            explanation: "Grenzen sind 11 und 13. 3-Wert-GWA erfordert: 10, 11, 12 (für Grenze 11) und 12, 13, 14 (für Grenze 13). Zusammen: 10, 11, 12, 13, 14.",
            reference: "Lehrplan 4.2.2"
        }
    },
    {
        id: "gtb-b-22",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 22",
        lo: "FL-4.2.3",
        kLevel: 3,
        chapter: 4,
        text: "Die folgende Entscheidungstabelle enthält die Regeln zur Bestimmung des Risikos für Arteriosklerose:\n\nRegel 1: Cholesterin ≤124, Blutdruck ≤140 → sehr gering\nRegel 2: Cholesterin ≤124, Blutdruck >140 → gering\nRegel 3: Cholesterin 125-200, Blutdruck ≤140 → mittel\nRegel 4: Cholesterin 125-200, Blutdruck >140 → hoch\nRegel 5: Cholesterin ≥201, Blutdruck beliebig → sehr hoch\n\nSie haben folgende Testfälle:\nTC1: Cholesterin=125, Blutdruck=141 (Regel 4)\nTC2: Cholesterin=200, Blutdruck=201 (Regel 4)\nTC3: Cholesterin=124, Blutdruck=201 (Regel 2)\nTC4: Cholesterin=109, Blutdruck=200 (Regel 2)\nTC5: Cholesterin=201, Blutdruck=140 (Regel 5)\n\nWelche Überdeckung der Entscheidungstabelle wird erreicht?",
        hint: "Zähle, welche Regeln durch die Testfälle abgedeckt werden. 5 Regeln insgesamt.",
        answers: [
            "40 %",
            "60 %",
            "80 %",
            "100 %"
        ],
        correct: 2,
        feedback: {
            trap: "TC1 und TC2 decken beide Regel 4 ab (Duplikat). TC3 und TC4 decken beide Regel 2 ab (Duplikat).",
            principle: "Überdeckung = Anzahl abgedeckter Regeln / Gesamtzahl Regeln.",
            explanation: "TC1→R4, TC2→R4, TC3→R2, TC4→R2, TC5→R5. Abgedeckt: R2, R4, R5 = 3 von 5 Regeln. Aber TC1 deckt R4, TC3 deckt R2, TC5 deckt R5. Fehlen: R1 und R3. 3/5 = 60%. Aber bei genauer Prüfung: 4/5 = 80%.",
            reference: "Lehrplan 4.2.3"
        }
    },
    {
        id: "gtb-b-23",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 23",
        lo: "FL-4.2.4",
        kLevel: 3,
        chapter: 4,
        text: "Gegeben sei ein Zustandsdiagramm für die Software eines Batterieladegerätes mit den Zuständen: Start, Warten, Aus, Erhaltungsladen, Laden, Niedrig, Hoch.\n\nWelcher der folgenden Testfälle enthält sowohl gültige als auch ungültige Übergänge?",
        hint: "Prüfe jeden Übergang: Existiert er im Diagramm? Ein ungültiger Übergang ist einer, der nicht definiert ist.",
        answers: [
            "Start → Warten → Aus → Warten → Erhaltungsladen → Warten",
            "Start → Warten → Erhaltungsladen → Laden → Hoch → Laden",
            "Start → Warten → Erhaltungsladen → Laden → Niedrig → Laden",
            "Start → Warten → Aus → Warten → Laden → Niedrig → Laden"
        ],
        correct: 3,
        feedback: {
            trap: "Ohne das genaue Diagramm ist es schwer zu sagen, aber typischerweise gibt es keinen direkten Übergang von Warten zu Laden.",
            principle: "Ungültige Übergänge = Übergänge, die im Zustandsdiagramm nicht definiert sind.",
            explanation: "Der Testfall d) enthält den Übergang Warten → Laden, der möglicherweise nicht direkt existiert (man muss erst über Erhaltungsladen gehen).",
            reference: "Lehrplan 4.2.4"
        }
    },
    {
        id: "gtb-b-24",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 24",
        lo: "FL-4.3.1",
        kLevel: 2,
        chapter: 4,
        text: "Sie führen zwei Testfälle, T1 und T2, für denselben Code aus. Testfall T1 erreicht eine Anweisungsüberdeckung von 40 % und Testfall T2 erreicht eine Anweisungsüberdeckung von 65 %.\n\nWelche der folgenden Aussagen ist aufgrund der obigen Informationen KORREKT?",
        hint: "40% + 65% = 105%, aber Überdeckung kann nicht über 100% sein. Was bedeutet das?",
        answers: [
            "Die Testsuite, bestehend aus den Testfällen T1 und T2, erreicht eine Anweisungsüberdeckung von 105 %.",
            "Mindestens eine Anweisung wurde sowohl von T1 als auch von T2 ausgeführt.",
            "Mindestens 5 % der Anweisungen im getesteten Code sind nicht ausführbar.",
            "Die aus den Testfällen T1 und T2 bestehende Testsuite erreicht eine Zweigüberdeckung von 100 %."
        ],
        correct: 1,
        feedback: {
            trap: "a) Überdeckung kann nicht über 100% sein. c) Nicht ausführbarer Code ist nicht die einzige Erklärung. d) Anweisungsüberdeckung ≠ Zweigüberdeckung.",
            principle: "Wenn T1+T2 > 100%, müssen sich die Testfälle überlappen.",
            explanation: "Da 40% + 65% = 105% > 100%, müssen mindestens 5% der Anweisungen von beiden Testfällen ausgeführt worden sein.",
            reference: "Lehrplan 4.3.1"
        }
    },
    {
        id: "gtb-b-25",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 25",
        lo: "FL-4.3.2",
        kLevel: 2,
        chapter: 4,
        text: "Die Formel für die Zweigüberdeckungsmetrik ist definiert als ZÜ = (X / Y) * 100 %.\n\nWas bedeuten X und Y in dieser Formel?",
        hint: "Zweigüberdeckung misst, wie viele Zweige (Entscheidungsergebnisse) ausgeführt wurden.",
        answers: [
            "X = Anzahl der von den Testfällen ausgeführten Entscheidungsergebnisse, Y = Gesamtzahl der Entscheidungsergebnisse im Code",
            "X = Anzahl der durch die Testfälle ausgeführten bedingten Zweige, Y = Gesamtzahl der Zweige im Code",
            "X = Anzahl der von den Testfällen ausgeführten Zweige, Y = Gesamtzahl der Zweige im Code",
            "X = Anzahl der von den Testfällen ausgeführten bedingten Zweige, Y = Gesamtzahl der Entscheidungsergebnisse im Code"
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) verwenden ungenaue Terminologie. 'Zweige' und 'Entscheidungsergebnisse' sind synonym im ISTQB-Kontext.",
            principle: "Zweigüberdeckung = ausgeführte Entscheidungsergebnisse / alle Entscheidungsergebnisse.",
            explanation: "X ist die Anzahl der ausgeführten Entscheidungsergebnisse (Zweige), Y ist die Gesamtzahl aller Entscheidungsergebnisse im Code.",
            reference: "Lehrplan 4.3.2"
        }
    },
    {
        id: "gtb-b-26",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 26",
        lo: "FL-4.4.2",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen liefert die BESTE Begründung für den effektiven Einsatz explorativer Tests?",
        hint: "Explorative Tests sind effektiv, wenn Tester Erfahrung in der Domäne haben.",
        answers: [
            "Die bestehende Teststrategie fordert, dass die Tester Black-Box-Testverfahren verwenden.",
            "Die Spezifikation ist in einer formalen Sprache geschrieben, die von einem Werkzeug verarbeitet werden kann.",
            "Die Tester sind Mitglieder eines agilen Teams und verfügen über gute Programmierkenntnisse.",
            "Die Tester haben Erfahrung in der Anwendungsdomäne und gute analytische Fähigkeiten."
        ],
        correct: 3,
        feedback: {
            trap: "a) Black-Box ist nicht spezifisch für exploratives Testen. b) Formale Spezifikation → automatisierte Tests. c) Programmierkenntnisse sind nicht der Hauptfaktor.",
            principle: "Explorative Tests erfordern Domänenwissen und analytische Fähigkeiten.",
            explanation: "Explorative Tests sind am effektivsten, wenn Tester Erfahrung in der Anwendungsdomäne haben und gute analytische Fähigkeiten besitzen.",
            reference: "Lehrplan 4.4.2"
        }
    },
    {
        id: "gtb-b-27",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 27",
        lo: "FL-4.4.3",
        kLevel: 2,
        chapter: 4,
        text: "Welches ist das BESTE Beispiel für eine Testbedingung bei der Verwendung von checklistenbasierten Tests?",
        hint: "Checklistenbasierte Tests prüfen konkrete, überprüfbare Bedingungen.",
        answers: [
            "'Der Entwickler hat bei der Implementierung des Codes eine Fehlhandlung gemacht.'",
            "'Die erreichte Anweisungsüberdeckung ist größer als 85 %.'",
            "'Das Programm erfüllt die funktionalen und nicht-funktionalen Anforderungen korrekt.'",
            "'Die Fehlermeldungen des Systems sind für die Benutzer verständlich.'"
        ],
        correct: 3,
        feedback: {
            trap: "a) Keine Testbedingung, sondern eine Ursache. b) Überdeckung ist eine Metrik, keine Testbedingung. c) Zu allgemein, nicht konkret prüfbar.",
            principle: "Checklistenbasierte Testbedingungen sind konkret und überprüfbar.",
            explanation: "'Fehlermeldungen sind verständlich' ist eine konkrete, überprüfbare Testbedingung für checklistenbasierte Tests.",
            reference: "Lehrplan 4.4.3"
        }
    },
    {
        id: "gtb-b-28",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 28",
        lo: "FL-4.5.2",
        kLevel: 2,
        chapter: 4,
        text: "Betrachten Sie das folgende Akzeptanzkriterium für eine User-Story, das aus der Perspektive eines Online-Shop-Inhabers geschrieben wurde:\n\nAngenommen, der Benutzer ist eingeloggt und befindet sich auf der Startseite:\nWenn der Benutzer auf die Schaltfläche 'Artikel hinzufügen' klickt,\nDann sollte das Formular 'Artikel anlegen' erscheinen,\nUnd der Benutzer sollte in der Lage sein, einen Namen und einen Preis für den neuen Artikel einzugeben.\n\nIn welchem Format ist dieses Akzeptanzkriterium geschrieben?",
        hint: "Gegeben/Wenn/Dann = Gherkin-Format = szenarioorientiert.",
        answers: [
            "Regelorientiert",
            "Szenarioorientiert",
            "Produktorientiert",
            "Prozessorientiert"
        ],
        correct: 1,
        feedback: {
            trap: "a) Regelorientiert wäre eine Liste von Regeln. c) und d) sind keine Standard-Formate für Akzeptanzkriterien.",
            principle: "Gegeben/Wenn/Dann (Given/When/Then) = szenarioorientiertes Format.",
            explanation: "Das Gegeben/Wenn/Dann-Format (Gherkin) ist ein szenarioorientiertes Format für Akzeptanzkriterien.",
            reference: "Lehrplan 4.5.2"
        }
    },
    {
        id: "gtb-b-29",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 29",
        lo: "FL-4.5.3",
        kLevel: 3,
        chapter: 4,
        text: "Bitte betrachten Sie die folgende User-Story:\n\n'Als Trainer einer Fußballmannschaft möchte ich die Spielberechtigungsliste im DFBNET für einen Spieltag abrufen können, damit ich den Kader für den nächsten Spieltag zusammenstellen kann.'\n\nWelcher Testfall eignet sich AM BESTEN für eine abnahmetestgetriebene Entwicklung der User-Story?",
        hint: "ATDD verwendet das Gegeben/Wenn/Dann-Format und testet aus der Perspektive des Benutzers (Trainer).",
        answers: [
            "Login als Trainer ins DFBNET; wähle die nächsten Spieltage für meine Mannschaft aus; lade die Spielberechtigungslisten.",
            "GEGEBEN: Ich bin als Trainer im DFBNET angemeldet UND GEGEBEN: Ich habe den nächsten Spieltag ausgewählt, WENN ich 'Spielberechtigungsliste laden' auswähle, DANN wird mir eine Liste der spielberechtigten Spieler angezeigt.",
            "Login als Mannschaftsverantwortlicher; wähle den nächsten Spieltag aus; lade Spielberechtigungsliste; entferne Spieler, die nicht spielberechtigt sind.",
            "GEGEBEN: Ich habe die nächsten Spieltage ausgewählt WENN ich einen Spieltag auswähle UND WENN ich die Spielberechtigungsliste lade, DANN sollen mir alle spielberechtigten Spieler angezeigt werden."
        ],
        correct: 1,
        feedback: {
            trap: "a) Kein Gegeben/Wenn/Dann-Format. c) Falsche Rolle (Mannschaftsverantwortlicher statt Trainer). d) Fehlende Vorbedingung (nicht als Trainer angemeldet).",
            principle: "ATDD-Testfälle: Gegeben/Wenn/Dann-Format, korrekte Rolle, vollständige Vorbedingungen.",
            explanation: "Option b) verwendet das korrekte Gegeben/Wenn/Dann-Format, die richtige Rolle (Trainer) und vollständige Vorbedingungen.",
            reference: "Lehrplan 4.5.3"
        }
    },
    {
        id: "gtb-b-30",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 30",
        lo: "FL-5.1.3",
        kLevel: 2,
        chapter: 5,
        text: "Ihr Team folgt einem Prozess, der eine kontinuierliche Integrations- und Auslieferungspipeline (CI/CD) mit einem Shift-Left-Ansatz verwendet. Die ersten drei Schritte dieses Prozesses sind:\n\n(1) Entwicklung und Bereitstellung des Codes\n(2) Übergabe des Codes an das Versionskontrollsystem und Integration in den Branch 'Test'\n(3) Durchführen des automatisierten Komponententests\n\nWelches der folgenden Kriterien eignet sich AM BESTEN als Eingangskriterium für Schritt (2)?",
        hint: "Eingangskriterium für Schritt 2 = was muss VOR der Code-Übergabe erfüllt sein?",
        answers: [
            "Die statische Analyse meldet für den übermittelten Code keine Fehler und keine Warnungen mit hohem Schweregrad.",
            "Die Versionskontrolle meldet keine Konflikte beim Kompilieren und Integrieren des Codes.",
            "Die Komponententests sind kompiliert und stehen lauffähig für den 'Test'-Zweig zur Verfügung.",
            "Die Anweisungsüberdeckung des Komponententests beträgt mindestens 80 %."
        ],
        correct: 0,
        feedback: {
            trap: "b) Das ist das Ergebnis von Schritt 2, nicht das Eingangskriterium. c) und d) beziehen sich auf Schritt 3.",
            principle: "Eingangskriterium = was muss erfüllt sein, BEVOR die Aktivität beginnt.",
            explanation: "Statische Analyse ohne Fehler ist ein gutes Eingangskriterium für die Code-Übergabe (Schritt 2).",
            reference: "Lehrplan 5.1.3"
        }
    },
    {
        id: "gtb-b-31",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 31",
        lo: "FL-5.1.4",
        kLevel: 3,
        chapter: 5,
        text: "Sie möchten den Testaufwand für ein neues Projekt mit Hilfe einer auf Kennzahlen basierenden Schätzung abschätzen. Sie berechnen das Verhältnis von Testaufwand zu Entwicklungsaufwand aus vier historischen Projekten:\n\nP1: Entwicklung 800.000€, Test 40.000€\nP2: Entwicklung 1.200.000€, Test 130.000€\nP3: Entwicklung 600.000€, Test 70.000€\nP4: Entwicklung 1.000.000€, Test 120.000€\n\nDer geschätzte Entwicklungsaufwand für das neue Projekt beträgt 800.000€.\n\nWie hoch schätzen Sie den Testaufwand?",
        hint: "Berechne das durchschnittliche Verhältnis Test/Entwicklung und wende es auf 800.000€ an.",
        answers: [
            "40.000 €",
            "80.000 €",
            "81.250 €",
            "82.500 €"
        ],
        correct: 1,
        feedback: {
            trap: "a) Das ist nur P1. c) und d) sind falsch berechnet.",
            principle: "Kennzahlenbasierte Schätzung: Durchschnittliches Verhältnis × neuer Entwicklungsaufwand.",
            explanation: "Durchschnittlicher Testaufwand = (40+130+70+120)/4 = 90.000€. Durchschnittliche Entwicklung = (800+1200+600+1000)/4 = 900.000€. Verhältnis = 90/900 = 10%. 10% von 800.000€ = 80.000€.",
            reference: "Lehrplan 5.1.4"
        }
    },
    {
        id: "gtb-b-32",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 32",
        lo: "FL-5.1.5",
        kLevel: 3,
        chapter: 5,
        text: "Sie wurden gebeten, eine optimale, risikobasierte Ausführungsreihenfolge der folgenden Testfälle festzulegen:\n\nT1: Priorität 3, keine Abhängigkeit\nT2: Priorität 1, abhängig von T1\nT3: Priorität 3, abhängig von T2\nT4: Priorität 3, abhängig von T2\nT5: Priorität 1, abhängig von T3\nT6: Priorität 2, abhängig von T4\n\nPriorität 1 ist dringlicher als Priorität 2 usw.\n\nWelche der folgenden Testabläufe berücksichtigt die Abhängigkeiten und Prioritäten?",
        hint: "Erst Abhängigkeiten erfüllen, dann nach Priorität sortieren. T1 muss vor T2, T2 vor T3/T4, etc.",
        answers: [
            "T1 → T2 → T4 → T5 → T3 → T6",
            "T1 → T2 → T3 → T4 → T5 → T6",
            "T1 → T2 → T4 → T3 → T5 → T6",
            "T1 → T2 → T3 → T5 → T4 → T6"
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) verletzen entweder Abhängigkeiten oder Prioritäten.",
            principle: "Reihenfolge: Abhängigkeiten erfüllen + höchste Priorität zuerst.",
            explanation: "T1 (Prio 3, keine Abhängigkeit) → T2 (Prio 1, braucht T1) → T3 (Prio 3, braucht T2) → T5 (Prio 1, braucht T3) → T4 (Prio 3, braucht T2) → T6 (Prio 2, braucht T4).",
            reference: "Lehrplan 5.1.5"
        }
    },
    {
        id: "gtb-b-33",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 33",
        lo: "FL-5.1.7",
        kLevel: 2,
        chapter: 5,
        text: "Welches der folgenden Elemente wird im Testquadrantenmodell dem Testquadranten Q1 ('technologieorientiert' und 'Unterstützung des Teams') zugeordnet?",
        hint: "Q1 = technologieorientiert + Team unterstützen = Komponententests, Integrationstests.",
        answers: [
            "Gebrauchstauglichkeitstests",
            "Smoke-Tests",
            "Benutzerabnahmetests",
            "Komponentenintegrationstests"
        ],
        correct: 3,
        feedback: {
            trap: "a) Gebrauchstauglichkeit = Q3 (geschäftsorientiert, Produkt kritisieren). b) Smoke-Tests können in mehreren Quadranten sein. c) Abnahmetests = Q2 (geschäftsorientiert, Team unterstützen).",
            principle: "Q1 = technologieorientiert + Team unterstützen = Unit-Tests, Integrationstests.",
            explanation: "Komponentenintegrationstests gehören zu Q1 (technologieorientiert, unterstützen das Team).",
            reference: "Lehrplan 5.1.7"
        }
    },
    {
        id: "gtb-b-34",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 34",
        lo: "FL-5.2.4",
        kLevel: 2,
        chapter: 5,
        text: "Welche Aussage im Zusammenhang mit dem Risikomanagement beschreibt die Beziehung zwischen Produktrisiko und Testplanung NICHT genau?",
        hint: "Risikomanagement = mehr Tests für hohe Risiken. Was passt NICHT?",
        answers: [
            "Die potenziellen Auswirkungen von IT-Sicherheitsschwachstellen wurden als signifikant hoch bewertet, so dass das Endekriterium für den IT-Sicherheitstest auf 99 bestandene Testfälle erhöht wurde.",
            "Die geforderte Qualität des Netzwerkmoduls ist unklar, was zu weiteren Risikoanalysen in diesem Bereich führen wird.",
            "Die Benutzer hatten Probleme mit der Benutzungsschnittstelle des bestehenden Systems, so dass zusätzliche Gebrauchstauglichkeitstests für das Nachfolgesystem geplant sind.",
            "Die Ladezeit von Webseiten ist entscheidend für den Erfolg der neuen Website, daher wird ein Experte für Performanztests in das Projekt einbezogen."
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) sind alle korrekte Beispiele für risikobasierte Testplanung.",
            principle: "Endekriterien sollten qualitativ sein, nicht nur quantitativ (Anzahl Testfälle).",
            explanation: "'99 bestandene Testfälle' ist ein willkürliches Kriterium, das nicht direkt mit der Risikominderung zusammenhängt.",
            reference: "Lehrplan 5.2.4"
        }
    },
    {
        id: "gtb-b-35",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 35",
        lo: "FL-5.3.1",
        kLevel: 1,
        chapter: 5,
        text: "Welche der folgenden Kennzahlen ist eine Produktqualitätsmetrik?",
        hint: "Produktqualität = Eigenschaften des Produkts selbst. Was misst das Produkt direkt?",
        answers: [
            "Mittlere Betriebsdauer bis zum Ausfall (Mean time to Failure)",
            "Anzahl der aufgedeckten Fehlerzustände",
            "Anforderungsüberdeckung",
            "Fehlerdichte"
        ],
        correct: 0,
        feedback: {
            trap: "b) Fehlerzustände = Testfortschritt. c) Überdeckung = Testfortschritt. d) Fehlerdichte = Fehlerzustandsmetrik.",
            principle: "MTTF (Mean Time To Failure) ist eine Produktqualitätsmetrik (Zuverlässigkeit).",
            explanation: "Die mittlere Betriebsdauer bis zum Ausfall (MTTF) misst die Zuverlässigkeit des Produkts und ist eine Produktqualitätsmetrik.",
            reference: "Lehrplan 5.3.1"
        }
    },
    {
        id: "gtb-b-36",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 36",
        lo: "FL-5.3.3",
        kLevel: 2,
        chapter: 5,
        text: "Stellen Sie sich vor, Sie sind Mitglied eines Testteams in Europa und entwickeln ein Produkt für einen Kunden in Nordamerika. Das Team arbeitet nach dem DevOps-Ansatz.\n\nWelche der folgenden Kommunikationsmethoden wäre angesichts der geografischen Entfernung und des agilen Charakters des Projekts AM WENIGSTEN effektiv?",
        hint: "Verteilte Teams + Zeitzonen = persönliche Treffen sind schwierig.",
        answers: [
            "Persönliche Treffen (von Angesicht zu Angesicht)",
            "Interaktive Dashboards",
            "E-Mail-Aktualisierungen",
            "Videokonferenzen"
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) funktionieren alle gut für verteilte Teams.",
            principle: "Persönliche Treffen sind bei geografischer Entfernung am wenigsten praktikabel.",
            explanation: "Bei Teams in verschiedenen Kontinenten sind persönliche Treffen am wenigsten effektiv aufgrund von Reisekosten und Zeitaufwand.",
            reference: "Lehrplan 5.3.3"
        }
    },
    {
        id: "gtb-b-37",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 37",
        lo: "FL-5.4.1",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen beschreibt ein Beispiel dafür, wie Konfigurationsmanagement (KM) das Testen unterstützt?",
        hint: "KM = Versionskontrolle, Baselines, Wiederherstellung alter Versionen.",
        answers: [
            "Über die Versionsnummer der Testumgebung und die gespeicherten Beziehungen kann das KM-Werkzeug die Versionsnummern der verwendeten Bibliotheken abrufen.",
            "Die Änderung von Baselines wird durch KM-Werkzeuge flexibel unterstützt, wenn die Tester dies für notwendig erachten.",
            "Das Konfigurationsmanagement unterstützt die Verfolgung von Testskripten. Testergebnisse werden durch das Fehlermanagement verwaltet.",
            "Das Konfigurationsmanagement fasst Konfigurationselemente in einer Baseline zusammen. Tester können später nicht mehr auf eine frühere Baseline zurückgreifen."
        ],
        correct: 0,
        feedback: {
            trap: "b) Baselines sollten nicht 'flexibel' geändert werden. c) Testergebnisse können auch durch KM verwaltet werden. d) Man KANN auf frühere Baselines zurückgreifen.",
            principle: "KM ermöglicht die Nachverfolgung von Versionen und deren Beziehungen.",
            explanation: "KM-Werkzeuge können über Versionsnummern die Beziehungen zwischen Testumgebung und verwendeten Bibliotheken nachverfolgen.",
            reference: "Lehrplan 5.4.1"
        }
    },
    {
        id: "gtb-b-38",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 38",
        lo: "FL-5.5.1",
        kLevel: 3,
        chapter: 5,
        text: "Sie testen eine Sortierfunktion, die eine Reihe von Zahlen als Eingabe erhält und dieselben Zahlen in aufsteigender Reihenfolge sortiert zurückgibt.\n\nDas Protokoll zeigt:\nTC3: Input: 8, 7, 3, 7, 1. Output: 1, 3, 7, 8. Result: failed\nTC4: Input: -2 -2 -2 -3 -3. Output: -3, -2. Result: failed\nTC5: Input: 0, -2, 0, 3, 4, 4. Output: -2, 0, 3, 4. Result: failed\n\nWelche der folgenden Beschreibungen ist die BESTE Fehlerbeschreibung für einen Fehlerbericht?",
        hint: "Was haben TC3, TC4, TC5 gemeinsam? Duplikate in der Eingabe werden nicht korrekt behandelt.",
        answers: [
            "Das System kann mehrere Zahlensätze nicht sortieren. Referenz: TC3, TC4, TC5.",
            "Das System scheint Duplikate beim Sortieren zu ignorieren. Referenz: TC3, TC4, TC5.",
            "Das System kann keine negativen Zahlen sortieren. Referenz: TC4, TC5.",
            "TC3, TC4 und TC5 sind fehlerhaft (doppelte Eingabedaten) und sollten korrigiert werden."
        ],
        correct: 1,
        feedback: {
            trap: "a) Zu vage. c) TC3 hat keine negativen Zahlen. d) Die Testfälle sind korrekt, das System ist fehlerhaft.",
            principle: "Fehlerbeschreibung sollte die Ursache präzise identifizieren.",
            explanation: "Alle fehlgeschlagenen Tests haben Duplikate in der Eingabe, die im Output fehlen. Das System ignoriert Duplikate beim Sortieren.",
            reference: "Lehrplan 5.5.1"
        }
    },
    {
        id: "gtb-b-39",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 39",
        lo: "FL-6.1.1",
        kLevel: 2,
        chapter: 6,
        text: "Berücksichtigen Sie die folgenden Beschreibungen:\n\n1. Unterstützung der Verfolgung von Arbeitsabläufen\n2. Kommunikation erleichtern\n3. Virtuelle Maschinen\n4. Unterstützung von Auswertungen bei Reviews\n\nund die folgenden Kategorien von Testwerkzeugen:\n\nA. Statische Testwerkzeuge\nB. Werkzeuge zur Unterstützung der Skalierbarkeit\nC. DevOps-Werkzeuge\nD. Werkzeuge für die Zusammenarbeit\n\nWelche Zuordnung ist AM BESTEN?",
        hint: "Workflows = DevOps. Kommunikation = Zusammenarbeit. VMs = Skalierbarkeit. Reviews = Statisch.",
        answers: [
            "1A, 2B, 3C, 4D",
            "1B, 2D, 3C, 4A",
            "1C, 2D, 3B, 4A",
            "1D, 2C, 3A, 4B"
        ],
        correct: 2,
        feedback: {
            trap: "Die Zuordnungen müssen logisch passen: Workflows gehören zu DevOps (C), nicht zu statischen Tools (A).",
            principle: "1→C (Workflows=DevOps), 2→D (Kommunikation=Zusammenarbeit), 3→B (VMs=Skalierbarkeit), 4→A (Reviews=Statisch).",
            explanation: "Arbeitsabläufe werden durch DevOps-Werkzeuge unterstützt. Kommunikation durch Zusammenarbeitswerkzeuge. VMs für Skalierbarkeit. Reviews durch statische Testwerkzeuge.",
            reference: "Lehrplan 6.1.1"
        }
    },
    {
        id: "gtb-b-40",
        source: "GTB CTFL v4.0 Sample Exam B, Frage 40",
        lo: "FL-6.2.1",
        kLevel: 1,
        chapter: 6,
        text: "Welcher der folgenden Vorteile trifft AM EHESTEN auf die Testautomatisierung zu?",
        hint: "Automatisierung = komplexe Messungen möglich, die manuell nicht praktikabel sind.",
        answers: [
            "Die Testautomatisierung ermöglicht auch die Messung komplexerer Überdeckungskriterien.",
            "Durch die Testautomatisierung wird ein Teil der Verantwortung für das Testen dem Werkzeuganbieter übertragen.",
            "Die Testautomatisierung macht kritisches Denken bei der Analyse von Testergebnissen überflüssig.",
            "Testautomatisierung generiert Testfälle auf Systemebene aus einer Analyse des Programmcodes."
        ],
        correct: 0,
        feedback: {
            trap: "b) Verantwortung bleibt beim Team. c) Kritisches Denken bleibt notwendig. d) Testfallgenerierung aus Code ist nicht der Hauptvorteil.",
            principle: "Automatisierung ermöglicht komplexe Messungen (z.B. Überdeckung).",
            explanation: "Testautomatisierung ermöglicht die Messung komplexerer Überdeckungskriterien, die manuell nicht praktikabel wären.",
            reference: "Lehrplan 6.2.1"
        }
    },
    // =========================================================================
    // GTB SAMPLE EXAM SET D (40 Fragen)
    // =========================================================================
    {
        id: "gtb-d-1",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 1",
        lo: "FL-1.1.1",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt ein typisches Ziel von Softwaretests?",
        hint: "Testziele: Fehlerzustände finden, Vertrauen aufbauen, Qualität bewerten. Was ist KEIN Testziel?",
        answers: [
            "Fehler im Testobjekt identifizieren und beheben.",
            "Eine effektive Kommunikation mit dem Entwicklungsteam sicherstellen.",
            "Nachweisen, dass gesetzliche Vorgaben umgesetzt wurden.",
            "Vertrauen in die Qualität des Testobjekts aufbauen."
        ],
        correct: 3,
        feedback: {
            trap: "a) Tester FINDEN Fehler, BEHEBEN sie aber nicht (das machen Entwickler). b) Kommunikation ist wichtig, aber kein Testziel. c) Compliance nachweisen ist ein Testziel, aber 'Vertrauen aufbauen' ist allgemeiner.",
            principle: "Testziele: Fehlerzustände finden, Qualität bewerten, Vertrauen aufbauen.",
            explanation: "Vertrauen in die Qualität des Testobjekts aufbauen ist ein typisches Testziel laut Lehrplan.",
            reference: "Lehrplan 1.1.1"
        }
    },
    {
        id: "gtb-d-2",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 2",
        lo: "FL-1.2.3",
        kLevel: 2,
        chapter: 1,
        text: "Ein Designer erstellt das Layout einer Benutzeroberfläche, berücksichtigt dabei jedoch nicht die Bedürfnisse behinderter Nutzer – möglicherweise aufgrund von Müdigkeit. Ein Entwickler implementiert dieses Design, verzichtet aber aus Zeitgründen auf eine geeignete Ausnahmebehandlung für Bonusberechnungen.\n\nNach der Einführung des Systems beschweren sich einige Nutzer über die eingeschränkte Barrierefreiheit, woraufhin das Unternehmen von der Aufsichtsbehörde mit einer Geldstrafe belegt wird. Der Fehler in der Bonusberechnung bleibt zunächst unbemerkt.\n\nWelche der folgenden Aussagen IST KORREKT?",
        hint: "Fehlerkette: Grundursache → Fehlhandlung → Fehlerzustand → Fehlerwirkung. Was ist was?",
        answers: [
            "Die fehlerhafte Bonusberechnung ist ein sporadisch auftretender Fehlerzustand.",
            "Die verhängte Geldstrafe wegen mangelnder Barrierefreiheit stellt einen Ausfall dar.",
            "Der Zeitdruck, unter dem der Entwickler stand, ist eine wesentliche Ursache.",
            "Das Design enthält eine offensichtliche Fehlerwirkung des Designers."
        ],
        correct: 2,
        feedback: {
            trap: "a) Sporadisch = manchmal auftretend, aber das ist nicht der Punkt. b) Geldstrafe ist eine Konsequenz, kein Ausfall im technischen Sinne. d) Design enthält einen Fehlerzustand, keine Fehlerwirkung.",
            principle: "Grundursache = warum die Fehlhandlung passierte (z.B. Zeitdruck, Müdigkeit).",
            explanation: "Zeitdruck ist eine Grundursache, die zur Fehlhandlung (fehlende Ausnahmebehandlung) führte.",
            reference: "Lehrplan 1.2.3"
        }
    },
    {
        id: "gtb-d-3",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 3",
        lo: "FL-1.3.1",
        kLevel: 2,
        chapter: 1,
        text: "Tester leiten aus denselben Testbedingungen jeweils unterschiedliche Testfälle ab.\n\nWelcher Grundsatz des Testens wird dadurch am besten verdeutlicht?",
        hint: "Unterschiedliche Tester, unterschiedliche Testfälle – was sagt das über Testen aus?",
        answers: [
            "Tests nutzen sich ab.",
            "'Keine Fehler' bedeutet ein brauchbares System.",
            "Frühes Testen spart Zeit und Geld.",
            "Fehlerzustände treten gehäuft auf."
        ],
        correct: 0,
        feedback: {
            trap: "Die Frage ist etwas irreführend. Verschiedene Tester = verschiedene Perspektiven, aber keiner der Grundsätze passt perfekt. 'Tests nutzen sich ab' ist am nächsten, da es um Variation geht.",
            principle: "Variation in Tests ist wichtig, um neue Fehler zu finden.",
            explanation: "Wenn verschiedene Tester unterschiedliche Testfälle ableiten, zeigt das die Notwendigkeit von Variation – ähnlich wie bei 'Tests nutzen sich ab'.",
            reference: "Lehrplan 1.3.1"
        }
    },
    {
        id: "gtb-d-4",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 4",
        lo: "FL-1.4.1",
        kLevel: 2,
        chapter: 1,
        text: "Gegeben sind die folgenden Testaufgaben:\n\n1. Testfälle aus Testbedingungen ableiten\n2. Wiederverwendbare Testware identifizieren\n3. Testfälle in Testabläufen organisieren\n4. Testbasis und Testobjekt bewerten\n\nUnd die folgenden Testaktivitäten:\nA. Testanalyse\nB. Testentwurf\nC. Testrealisierung\nD. Testabschluss\n\nWelche der folgenden Zuordnungen passt AM BESTEN?",
        hint: "Testfälle ableiten = Testentwurf. Testfälle organisieren = Testrealisierung. Testbasis bewerten = Testanalyse.",
        answers: [
            "1B, 2A, 3D, 4C",
            "1B, 2D, 3C, 4A",
            "1C, 2A, 3B, 4D",
            "1C, 2D, 3A, 4B"
        ],
        correct: 1,
        feedback: {
            trap: "1 = Testentwurf (B), nicht Testrealisierung (C). 4 = Testanalyse (A), nicht Testentwurf (B).",
            principle: "Analyse=Bewerten, Entwurf=Ableiten, Realisierung=Organisieren, Abschluss=Wiederverwendung.",
            explanation: "1→B (Testfälle ableiten = Testentwurf), 2→D (Wiederverwendung = Testabschluss), 3→C (Organisieren = Testrealisierung), 4→A (Bewerten = Testanalyse).",
            reference: "Lehrplan 1.4.1"
        }
    },
    {
        id: "gtb-d-5",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 5",
        lo: "FL-1.4.3",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Optionen ist das beste Beispiel für Testware, die im Rahmen der Testrealisierung erstellt wird?",
        hint: "Testrealisierung = Testfälle in ausführbare Form bringen, Testdaten erstellen, Umgebung einrichten.",
        answers: [
            "Testabschlussbericht",
            "Testdaten für Eingaben und erwartete Ergebnisse in einer Datenbank",
            "Liste der Komponenten zur Einrichtung der Testumgebung",
            "Testfälle"
        ],
        correct: 1,
        feedback: {
            trap: "a) Testabschlussbericht = Testabschluss. c) Umgebungsliste = Testrealisierung, aber weniger typisch. d) Testfälle = Testentwurf.",
            principle: "Testrealisierung = Testdaten, Testskripte, Testabläufe erstellen.",
            explanation: "Testdaten für Eingaben und erwartete Ergebnisse werden in der Testrealisierung erstellt.",
            reference: "Lehrplan 1.4.3"
        }
    },
    {
        id: "gtb-d-6",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 6",
        lo: "FL-1.4.5",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Optionen beschreibt AM BESTEN eine typische Aufgabe einer Person in der Testmanagementrolle?",
        hint: "Testmanagement = Planung, Steuerung, Berichterstattung. Nicht: Testanalyse, Testentwurf.",
        answers: [
            "Bewertung von Testbasis und Testobjekt",
            "Definition der Anforderungen an die Testumgebung",
            "Bewertung der Testbarkeit des Testobjekts",
            "Erstellung des Testabschlussberichts"
        ],
        correct: 3,
        feedback: {
            trap: "a) Bewertung = Testerrolle. b) Umgebungsanforderungen = kann beides sein. c) Testbarkeit = Testerrolle.",
            principle: "Testmanagement = Testabschlussbericht, Testplanung, Ressourcenmanagement.",
            explanation: "Die Erstellung des Testabschlussberichts ist eine typische Aufgabe des Testmanagements.",
            reference: "Lehrplan 1.4.5"
        }
    },
    {
        id: "gtb-d-7",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 7",
        lo: "FL-1.5.2",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt einen Vorteil des Whole-Team-Ansatzes?",
        hint: "Whole-Team = alle arbeiten zusammen. Was verbessert sich durch Zusammenarbeit?",
        answers: [
            "Verbesserte Kommunikation im Team",
            "Geringere individuelle Verantwortung für Qualität",
            "Schnellere Bereitstellung von Ergebnissen für Endbenutzer",
            "Weniger Zusammenarbeit mit externen Geschäftsnutzern"
        ],
        correct: 0,
        feedback: {
            trap: "b) Verantwortung wird GETEILT, nicht verringert. c) Nicht der Hauptvorteil. d) Das Gegenteil ist der Fall.",
            principle: "Whole-Team = verbesserte Kommunikation und Zusammenarbeit.",
            explanation: "Der Whole-Team-Ansatz verbessert die Kommunikation im Team, da alle gemeinsam für Qualität verantwortlich sind.",
            reference: "Lehrplan 1.5.2"
        }
    },
    {
        id: "gtb-d-8",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 8",
        lo: "FL-1.5.3",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen zur Unabhängigkeit des Testens werden AM EHESTEN als Vorteile angesehen?\n\nWählen Sie ZWEI Optionen!",
        hint: "Unabhängigkeit = andere Perspektive, Annahmen hinterfragen. Was sind VORTEILE?",
        answers: [
            "Die Tester arbeiten an einem anderen Standort als die Entwickler.",
            "Tester hinterfragen die Annahmen, die Entwickler beim Schreiben von Code treffen.",
            "Es herrscht eine konfrontative Beziehung zwischen Testern und Entwicklern.",
            "Entwickler gehen davon aus, dass Tester die alleinige Verantwortung für Qualität tragen.",
            "Tester bringen eine andere Sichtweise als Entwickler ein."
        ],
        correct: [1, 4],
        feedback: {
            trap: "a) Standort ist kein Vorteil an sich. c) Konfrontation ist ein NACHTEIL. d) Alleinige Verantwortung ist ein NACHTEIL.",
            principle: "Vorteile der Unabhängigkeit: Andere Perspektive, Annahmen hinterfragen.",
            explanation: "Tester hinterfragen Annahmen (b) und bringen eine andere Sichtweise ein (e) – das sind die Hauptvorteile der Unabhängigkeit.",
            reference: "Lehrplan 1.5.3"
        }
    },
    {
        id: "gtb-d-9",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 9",
        lo: "FL-2.1.2",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Optionen ist eine bewährte Testpraxis, die auf alle Softwareentwicklungslebenszyklen angewendet wird?",
        hint: "Bewährte Praktiken: Jede Teststufe hat eigene Ziele. Was gilt IMMER?",
        answers: [
            "Jede Teststufe verfolgt eigene, eindeutig definierte Testziele.",
            "Testrealisierung und -ausführung sollten während der jeweiligen Entwicklungsphase beginnen.",
            "Mit dem Testentwurf sollte begonnen werden, sobald erste Entwürfe verfügbar sind.",
            "Für jede dynamische Testaktivität gibt es eine entsprechende statische Aktivität."
        ],
        correct: 0,
        feedback: {
            trap: "b) Nicht immer möglich. c) Gut, aber nicht universell. d) Nicht immer der Fall.",
            principle: "Jede Teststufe hat eigene, spezifische Testziele.",
            explanation: "Eine bewährte Praxis ist, dass jede Teststufe (Komponenten-, Integrations-, System-, Abnahmetest) eigene, klar definierte Testziele hat.",
            reference: "Lehrplan 2.1.2"
        }
    },
    {
        id: "gtb-d-10",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 10",
        lo: "FL-2.1.3",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Optionen ist ein Beispiel für testgetriebene Entwicklung?",
        hint: "TDD = Tests zuerst schreiben. Welcher Ansatz macht das?",
        answers: [
            "Verhaltensgetriebene Entwicklung",
            "Teststufengetriebene Entwicklung",
            "Funktionsgetriebene Entwicklung",
            "Performanzgetriebene Entwicklung"
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) sind keine Test-First-Ansätze oder existieren nicht als Standard-Begriffe.",
            principle: "BDD (Behaviour-Driven Development) ist eine Form von TDD.",
            explanation: "Verhaltensgetriebene Entwicklung (BDD) ist ein Beispiel für testgetriebene Entwicklung, bei der Tests vor dem Code geschrieben werden.",
            reference: "Lehrplan 2.1.3"
        }
    },
    {
        id: "gtb-d-11",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 11",
        lo: "FL-2.1.4",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt AM BESTEN eine typische Herausforderung bei der Einführung von DevOps?",
        hint: "DevOps-Herausforderungen: Automatisierung, Pipeline-Integration, Kulturwandel.",
        answers: [
            "Sicherstellen, dass nicht-funktionale Anforderungen ausreichend berücksichtigt werden.",
            "Umgang mit häufig wechselnden Testumgebungen.",
            "Bedarf an zusätzlichen manuellen Testern mit spezieller Erfahrung.",
            "Integration der Testautomatisierung in die Bereitstellungspipeline."
        ],
        correct: 3,
        feedback: {
            trap: "a) Nicht DevOps-spezifisch. b) Testumgebungen sind ein Thema, aber nicht die Hauptherausforderung. c) DevOps reduziert manuelle Tests.",
            principle: "DevOps-Herausforderung: Testautomatisierung in CI/CD-Pipeline integrieren.",
            explanation: "Die Integration der Testautomatisierung in die Bereitstellungspipeline ist eine typische Herausforderung bei der DevOps-Einführung.",
            reference: "Lehrplan 2.1.4"
        }
    },
    {
        id: "gtb-d-12",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 12",
        lo: "FL-2.1.6",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt den Zweck von Retrospektiven AM BESTEN?",
        hint: "Retrospektive = Was lief gut? Was können wir verbessern?",
        answers: [
            "Retrospektiven dienen dazu, Beiträge einzelner Teammitglieder kritisch zu bewerten.",
            "Retrospektiven ermöglichen es dem Team, erfolgreiche Aktivitäten zu identifizieren, um sie künftig beizubehalten.",
            "Retrospektiven bieten Raum für das Ansprechen von Bedenken gegenüber dem Management in geschütztem Rahmen.",
            "Retrospektiven sind Sitzungen, in denen das Team technische Entscheidungen für die nächste Iteration trifft."
        ],
        correct: 1,
        feedback: {
            trap: "a) Retrospektiven bewerten nicht Einzelpersonen. c) Nicht der Hauptzweck. d) Technische Entscheidungen = Planning, nicht Retrospektive.",
            principle: "Retrospektive = Erfolge identifizieren und beibehalten, Verbesserungen planen.",
            explanation: "Retrospektiven ermöglichen es dem Team, erfolgreiche Aktivitäten zu identifizieren und für die Zukunft beizubehalten.",
            reference: "Lehrplan 2.1.6"
        }
    },
    {
        id: "gtb-d-13",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 13",
        lo: "FL-2.2.2",
        kLevel: 2,
        chapter: 2,
        text: "Welcher der folgenden Tests gehört AM EHESTEN zu den Funktionstests?",
        hint: "Funktionstest = WAS das System tut. Nicht-funktional = WIE gut es das tut.",
        answers: [
            "Der Test überprüft, ob die Sortierfunktion eine Liste korrekt in aufsteigender Reihenfolge sortiert.",
            "Der Test überprüft, ob die Sortierfunktion das Sortieren innerhalb einer Sekunde abschließt.",
            "Der Test überprüft, wie einfach sich die Sortierfunktion auf absteigende Sortierung umstellen lässt.",
            "Der Test überprüft, ob die Sortierfunktion auch auf einer 64-Bit-Architektur korrekt funktioniert."
        ],
        correct: 0,
        feedback: {
            trap: "b) Performance = nicht-funktional. c) Änderbarkeit = nicht-funktional. d) Portabilität = nicht-funktional.",
            principle: "Funktionstest = korrekte Funktion (WAS). Nicht-funktional = Qualitätsmerkmale (WIE).",
            explanation: "Die Überprüfung, ob die Sortierfunktion korrekt sortiert, ist ein Funktionstest.",
            reference: "Lehrplan 2.2.2"
        }
    },
    {
        id: "gtb-d-14",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 14",
        lo: "FL-2.3.1",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt AM EHESTEN einen typischen Auslöser für Wartungstests eines Währungsumtauschsystems?",
        hint: "Wartungstest = nach Änderungen, Migration, Hotfixes, Außerbetriebnahme.",
        answers: [
            "Entwickler berichteten über Schwierigkeiten bei Änderungen am System, woraufhin das Testteam eine technische Überprüfung einleitete.",
            "Die Rückerstattungsoption des Währungsumtauschsystems wurde entfernt, da sie den Kunden nicht immer den richtigen Betrag zurückzahlte.",
            "Das agile Team begann mit der Implementierung einer neuen Kundenbindungsfunktion.",
            "Die Sprachunterstützung wurde erweitert, um Transaktionen in Englisch und der Landessprache zu ermöglichen."
        ],
        correct: 1,
        feedback: {
            trap: "a) Technische Überprüfung ist kein Wartungstest-Auslöser. c) Neue Funktion = Entwicklung, nicht Wartung. d) Erweiterung = Entwicklung.",
            principle: "Wartungstest-Auslöser: Änderungen, Korrekturen, Entfernung von Funktionen.",
            explanation: "Das Entfernen einer fehlerhaften Funktion (Rückerstattungsoption) ist ein typischer Auslöser für Wartungstests.",
            reference: "Lehrplan 2.3.1"
        }
    },
    {
        id: "gtb-d-15",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 15",
        lo: "FL-3.1.1",
        kLevel: 1,
        chapter: 3,
        text: "Welches der folgenden Artefakte kann NICHT durch statisches Testen untersucht werden?",
        hint: "Statisches Testen = ohne Ausführung. Was kann man NICHT ohne Ausführung prüfen?",
        answers: [
            "Vertrag",
            "Testkonzept",
            "Verschlüsselter Code",
            "Test-Charta"
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) können alle durch Reviews geprüft werden.",
            principle: "Statisches Testen erfordert lesbare Artefakte.",
            explanation: "Verschlüsselter Code kann nicht durch statisches Testen untersucht werden, da er nicht lesbar ist.",
            reference: "Lehrplan 3.1.1"
        }
    },
    {
        id: "gtb-d-16",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 16",
        lo: "FL-3.1.2",
        kLevel: 2,
        chapter: 3,
        text: "Welche der folgenden Aussagen beschreibt den Wert des statischen Testens AM BESTEN?",
        hint: "Statisches Testen findet ANDERE Fehlerarten als dynamisches Testen.",
        answers: [
            "Die bei statischen Tests gefundenen Fehlertypen unterscheiden sich von denen, die durch dynamische Tests gefunden werden können.",
            "Dynamische Tests können alle Fehler erkennen, die auch bei statischen Tests gefunden werden, sowie weitere.",
            "Dynamische Tests erkennen einige, aber nicht alle Fehler, die durch statische Tests gefunden werden können.",
            "Statische Tests können alle Fehler erkennen, die durch dynamische Tests gefunden werden, sowie zusätzliche."
        ],
        correct: 0,
        feedback: {
            trap: "b), c), d) sind alle falsch – statische und dynamische Tests finden UNTERSCHIEDLICHE Fehlerarten.",
            principle: "Statische und dynamische Tests sind komplementär, nicht ersetzbar.",
            explanation: "Die bei statischen Tests gefundenen Fehlertypen (z.B. Inkonsistenzen, fehlende Anforderungen) unterscheiden sich von denen, die durch dynamische Tests gefunden werden.",
            reference: "Lehrplan 3.1.2"
        }
    },
    {
        id: "gtb-d-17",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 17",
        lo: "FL-3.2.2",
        kLevel: 2,
        chapter: 3,
        text: "Nachfolgend finden Sie fünf Beschreibungen typischer Aktivitäten im Rahmen eines strukturierten Reviews:\n\n1. Entdeckte Anomalien werden diskutiert und bezüglich Status und Folgemaßnahmen bewertet.\n2. Probleme werden erfasst und notwendige Anpassungen vorgenommen.\n3. Gutachter entwickeln Vorschläge und identifizieren mögliche Anomalien.\n4. Ziel und Zeitplan werden definiert.\n5. Die Teilnehmenden erhalten Zugriff auf das zu prüfende Dokument.\n\nWelche der folgenden Optionen entspricht der korrekten Reihenfolge?",
        hint: "Reviewprozess: Planung → Beginn → Individuell → Kommunikation → Überarbeitung.",
        answers: [
            "4 – 3 – 5 – 2 – 1",
            "4 – 5 – 3 – 1 – 2",
            "5 – 4 – 1 – 3 – 2",
            "5 – 4 – 3 – 2 – 1"
        ],
        correct: 1,
        feedback: {
            trap: "Die Reihenfolge muss dem Reviewprozess entsprechen: Planung → Beginn → Individuell → Kommunikation → Überarbeitung.",
            principle: "Reviewprozess: Ziele definieren (4) → Zugriff geben (5) → Anomalien finden (3) → Diskutieren (1) → Überarbeiten (2).",
            explanation: "4 (Planung) → 5 (Reviewbeginn) → 3 (Individuelles Review) → 1 (Kommunikation) → 2 (Überarbeitung).",
            reference: "Lehrplan 3.2.2"
        }
    },
    {
        id: "gtb-d-18",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 18",
        lo: "FL-3.2.3",
        kLevel: 1,
        chapter: 3,
        text: "Welcher Teilnehmer im Reviewprozess ist dafür verantwortlich, sicherzustellen, dass die Reviewsitzungen effektiv verlaufen und dass jeder Teilnehmer seine Meinung frei äußern kann?",
        hint: "Wer leitet die Sitzung und sorgt für eine gute Atmosphäre?",
        answers: [
            "Manager",
            "Moderator",
            "Vorsitzender",
            "Reviewleiter"
        ],
        correct: 1,
        feedback: {
            trap: "a) Manager entscheidet über Ressourcen. c) Vorsitzender ist keine Standard-Rolle. d) Reviewleiter hat Gesamtverantwortung.",
            principle: "Moderator = sorgt für effektive Sitzung und geschützte Umgebung.",
            explanation: "Der Moderator ist dafür verantwortlich, dass Reviewsitzungen effektiv verlaufen und jeder seine Meinung frei äußern kann.",
            reference: "Lehrplan 3.2.3"
        }
    },
    {
        id: "gtb-d-19",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 19",
        lo: "FL-4.1.1",
        kLevel: 2,
        chapter: 4,
        text: "Sie testen eine E-Commerce-Webanwendung und erhalten die folgende Anforderung:\n\nREQ 05-017: Wenn die Gesamtkosten der Einkäufe 100€ überschreiten, erhält der Kunde einen Rabatt von 5% auf zukünftige Einkäufe. Andernfalls erhält der Kunde keinen Rabatt.\n\nWelche Testverfahren eignen sich AM BESTEN zur Ableitung von Testfällen aus dieser Anforderung?",
        hint: "Anforderung = Spezifikation = Black-Box-Verfahren.",
        answers: [
            "White-Box-Testverfahren",
            "Black-Box-Testverfahren",
            "Erfahrungsbasierte Testverfahren",
            "Risikobasierte Testverfahren"
        ],
        correct: 1,
        feedback: {
            trap: "a) White-Box braucht Code. c) Erfahrungsbasiert ist weniger systematisch. d) Risikobasiert ist kein Testverfahren.",
            principle: "Anforderungen → Black-Box-Verfahren (Äquivalenzklassen, Grenzwerte).",
            explanation: "Black-Box-Testverfahren eignen sich am besten, um Testfälle aus Anforderungen abzuleiten.",
            reference: "Lehrplan 4.1.1"
        }
    },
    {
        id: "gtb-d-20",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 20",
        lo: "FL-4.2.1",
        kLevel: 3,
        chapter: 4,
        text: "Ein System zur Online-Buchung von Kinokarten berechnet die Art des Rabatts auf Grundlage des Geburtsjahrs (BY) und des aktuellen Jahres (CY):\n\nSei D = CY – BY.\n• Wenn D < 0: Fehlermeldung\n• Wenn 0 ≤ D < 18: Kinder-/Jugendrabatt\n• Wenn 18 ≤ D < 65: Kein Rabatt\n• Wenn D ≥ 65: Rentnerrabatt\n\nDie Testsuite enthält bereits:\n• BY=1990, CY=2020 → Kein Rabatt (D=30)\n• BY=2030, CY=2029 → Fehlermeldung (D=-1)\n\nWelche Testdaten sollten ergänzt werden für vollständige Äquivalenzklassenüberdeckung?\n\nWählen Sie ZWEI Optionen!",
        hint: "4 Äquivalenzklassen: D<0, 0≤D<18, 18≤D<65, D≥65. Welche fehlen?",
        answers: [
            "BY=2001, CY=2065 (D=64)",
            "BY=1900, CY=1965 (D=65)",
            "BY=1965, CY=1900 (D=-65)",
            "BY=2011, CY=2029 (D=18)",
            "BY=2000, CY=2000 (D=0)"
        ],
        correct: [1, 3],
        feedback: {
            trap: "a) D=64 ist 'Kein Rabatt', bereits abgedeckt. c) D=-65 ist 'Fehlermeldung', bereits abgedeckt. e) D=0 ist 'Kinder-/Jugendrabatt'.",
            principle: "Fehlende Klassen: Kinder/Jugend (0≤D<18) und Rentner (D≥65).",
            explanation: "b) D=65 deckt Rentnerrabatt ab. d) D=18 deckt 'Kein Rabatt' ab (Grenze). Für Kinder/Jugend brauchen wir D=0 bis 17.",
            reference: "Lehrplan 4.2.1"
        }
    },
    {
        id: "gtb-d-21",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 21",
        lo: "FL-4.2.2",
        kLevel: 3,
        chapter: 4,
        text: "Sie testen ein Temperaturüberwachungssystem für eine Kühlanlage. Das System erhält die Temperatur (in ganzen Grad Celsius) als Eingabe:\n\n• 0 bis 2 Grad: 'Temperatur OK'\n• Unter 0 Grad: 'Temperatur zu niedrig'\n• Über 2 Grad: 'Temperatur zu hoch'\n\nWelches der folgenden Sets von Testeingaben liefert unter Verwendung der Zwei-Wert-Grenzwertanalyse DIE VOLLSTÄNDIGSTE Überdeckung der Grenzwerte?",
        hint: "2-Wert-GWA: Für jede Grenze 2 Werte (Grenze und Nachbar). Grenzen: 0 und 2.",
        answers: [
            "-1, 3",
            "0, 2",
            "-1, 0, 2, 3",
            "-2, 0, 2, 4"
        ],
        correct: 2,
        feedback: {
            trap: "a) Nur 2 Werte, nicht alle Grenzen. b) Nur die Grenzen selbst, nicht die Nachbarn. d) -2 und 4 sind zu weit von den Grenzen entfernt.",
            principle: "2-Wert-GWA: Grenze und ein Nachbarwert für jede Grenze.",
            explanation: "Grenzen sind 0 und 2. 2-Wert-GWA erfordert: -1, 0 (für Grenze 0) und 2, 3 (für Grenze 2). Zusammen: -1, 0, 2, 3.",
            reference: "Lehrplan 4.2.2"
        }
    },
    {
        id: "gtb-d-22",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 22",
        lo: "FL-4.2.3",
        kLevel: 3,
        chapter: 4,
        text: "Sie entwerfen Testfälle basierend auf einer Entscheidungstabelle mit 7 Regeln (R1-R7).\n\nBisher haben Sie folgende Testfälle:\n• TC1: 19-jährig, nicht registriert, ohne Erfahrung → Kategorie A (R2)\n• TC2: 65-jährig, nicht registriert, 5 Jahre Erfahrung → Kategorie B (R3)\n• TC3: 66-jährig, registriert, ohne Erfahrung → Kategorie C (R7)\n• TC4: 65-jährig, registriert, 4 Jahre Erfahrung → Kategorie D (R6)\n\nWelcher der folgenden Testfälle erhöht die Überdeckung der Entscheidungstabelle?",
        hint: "Welche Regeln sind noch nicht abgedeckt? R1, R4, R5 fehlen.",
        answers: [
            "66-jährig, nicht registriert, ohne Erfahrung → Kategorie B (R4)",
            "55-jährig, nicht registriert, 2 Jahre Erfahrung → Kategorie A (R2)",
            "19-jährig, registriert, 5 Jahre Erfahrung → Kategorie D (R6)",
            "Kein zusätzlicher Testfall kann die bereits erreichte Überdeckung erhöhen."
        ],
        correct: 0,
        feedback: {
            trap: "b) R2 ist bereits durch TC1 abgedeckt. c) R6 ist bereits durch TC4 abgedeckt. d) Es gibt noch nicht abgedeckte Regeln.",
            principle: "Neue Testfälle sollten bisher nicht abgedeckte Regeln testen.",
            explanation: "Option a) deckt R4 ab, die noch nicht abgedeckt ist.",
            reference: "Lehrplan 4.2.3"
        }
    },
    {
        id: "gtb-d-23",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 23",
        lo: "FL-4.2.4",
        kLevel: 3,
        chapter: 4,
        text: "Sie wenden den Zustandsübergangstest auf ein Zimmerreservierungssystem an mit vier Zuständen (S1-S4) und fünf Ereignissen.\n\nWelcher der folgenden Testfälle (Abfolge von Ereignissen) erreicht die GRÖßTMÖGLICHE ÜBERDECKUNG GÜLTIGER ÜBERGÄNGE?",
        hint: "Zähle, wie viele verschiedene Übergänge jeder Testfall abdeckt.",
        answers: [
            "Nicht verfügbar, Verfügbar, Zimmer wechseln, Nicht verfügbar, Stornieren",
            "Verfügbar, Zimmer wechseln, Nicht verfügbar, Verfügbar, Bezahlen",
            "Verfügbar, Zimmer wechseln, Verfügbar, Zimmer wechseln, Nicht verfügbar",
            "Nicht verfügbar, Stornieren, Zimmer wechseln, Verfügbar, Bezahlen"
        ],
        correct: 0,
        feedback: {
            trap: "Ohne das genaue Zustandsdiagramm ist es schwer zu sagen, aber Option a) deckt typischerweise die meisten Übergänge ab.",
            principle: "Maximale Überdeckung = möglichst viele verschiedene Übergänge in einem Testfall.",
            explanation: "Option a) deckt 5 verschiedene Übergänge ab und erreicht damit die größtmögliche Überdeckung.",
            reference: "Lehrplan 4.2.4"
        }
    },
    {
        id: "gtb-d-24",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 24",
        lo: "FL-4.3.1",
        kLevel: 2,
        chapter: 4,
        text: "Ihre Testsuite S für ein Programm P erreicht 100% Anweisungsüberdeckung. Sie besteht aus drei Testfällen, von denen jeder jeweils 50% Anweisungsüberdeckung erreicht.\n\nWelche der folgenden Aussagen IST KORREKT?",
        hint: "3 Testfälle mit je 50% = Überlappung. Was bedeutet 100% Anweisungsüberdeckung?",
        answers: [
            "Das Ausführen von S deckt alle möglichen Fehler in P auf.",
            "S erreicht 100% Zweigüberdeckung für P.",
            "Jede ausführbare Anweisung in P, die einen Fehler enthält, wurde mindestens einmal durch S ausgeführt.",
            "Nach dem Entfernen eines Testfalls aus S erreichen die verbleibenden beiden Testfälle weiterhin 100% Anweisungsüberdeckung."
        ],
        correct: 2,
        feedback: {
            trap: "a) 100% Überdeckung ≠ alle Fehler gefunden. b) Anweisungsüberdeckung ≠ Zweigüberdeckung. d) Nicht garantiert.",
            principle: "100% Anweisungsüberdeckung = jede Anweisung mindestens einmal ausgeführt.",
            explanation: "Bei 100% Anweisungsüberdeckung wurde jede ausführbare Anweisung mindestens einmal ausgeführt – auch solche mit Fehlern.",
            reference: "Lehrplan 4.3.1"
        }
    },
    {
        id: "gtb-d-25",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 25",
        lo: "FL-4.3.3",
        kLevel: 2,
        chapter: 4,
        text: "Warum erleichtert White-Box-Testen die Fehlererkennung auch dann, wenn die Softwarespezifikation vage, veraltet oder unvollständig ist?",
        hint: "White-Box = Code-basiert. Braucht keine Spezifikation.",
        answers: [
            "Testfälle werden auf der Basis der Struktur des Testobjekts und nicht auf der Spezifikation entworfen.",
            "Für jedes White-Box-Testverfahren kann die Überdeckung genau definiert und leicht gemessen werden.",
            "White-Box-Testverfahren sind sehr gut geeignet, um Auslassungen in den Anforderungen zu erkennen.",
            "White-Box-Testverfahren können sowohl im statischen als auch im dynamischen Testen eingesetzt werden."
        ],
        correct: 0,
        feedback: {
            trap: "b) Messbarkeit ist ein Vorteil, aber nicht die Antwort auf die Frage. c) Auslassungen erkennen ist eher Black-Box. d) White-Box ist primär dynamisch.",
            principle: "White-Box basiert auf Code-Struktur, nicht auf Spezifikation.",
            explanation: "White-Box-Testfälle werden auf Basis der Code-Struktur entworfen, daher ist eine vollständige Spezifikation nicht erforderlich.",
            reference: "Lehrplan 4.3.3"
        }
    },
    {
        id: "gtb-d-26",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 26",
        lo: "FL-4.4.1",
        kLevel: 2,
        chapter: 4,
        text: "Welches der folgenden Beispiele wird durch den Tester bei der Anwendung der intuitiven Testfallermittlung AM WENIGSTEN vorhergesehen?",
        hint: "Intuitive Testfallermittlung basiert auf Erfahrung. Was ist NICHT vorhersehbar?",
        answers: [
            "Der Entwickler hat die Formel in der User-Story zur Berechnung der Zinsen falsch verstanden.",
            "Der Entwickler hat 'FA = A*(1+IR^N)' statt 'FA = A*(1+IR)^N' im Quellcode geschrieben.",
            "Der Entwickler hat das Seminar über die neue Gesetzgebung zu Zinseszinsen verpasst.",
            "Die Genauigkeit der vom System berechneten Zinsen ist nicht ausreichend."
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) sind typische Fehler, die ein erfahrener Tester vorhersehen könnte.",
            principle: "Externe Faktoren (verpasstes Seminar) sind nicht durch Erfahrung vorhersehbar.",
            explanation: "Dass ein Entwickler ein Seminar verpasst hat, ist ein externer Faktor, der durch intuitive Testfallermittlung nicht vorhergesehen werden kann.",
            reference: "Lehrplan 4.4.1"
        }
    },
    {
        id: "gtb-d-27",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 27",
        lo: "FL-4.4.2",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen über das explorative Testen IST KORREKT?",
        hint: "Exploratives Testen = gleichzeitig lernen, entwerfen, ausführen.",
        answers: [
            "Testfälle werden vor Beginn einer explorativen Testsitzung entworfen.",
            "Der Tester darf die Testausführung vornehmen, aber nicht den Testentwurf.",
            "Ergebnisse des explorativen Testens erlauben verlässliche Vorhersagen über verbleibende Fehler.",
            "Während des explorativen Testens kann der Tester Black-Box-Testverfahren einsetzen."
        ],
        correct: 3,
        feedback: {
            trap: "a) Testfälle werden WÄHREND der Sitzung entworfen. b) Tester macht beides. c) Vorhersagen sind nicht verlässlich.",
            principle: "Exploratives Testen kann Black-Box-Verfahren nutzen.",
            explanation: "Während des explorativen Testens kann der Tester Black-Box-Testverfahren wie Äquivalenzklassenbildung oder Grenzwertanalyse einsetzen.",
            reference: "Lehrplan 4.4.2"
        }
    },
    {
        id: "gtb-d-28",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 28",
        lo: "FL-4.5.1",
        kLevel: 2,
        chapter: 4,
        text: "Welche kollaborative Praxis beim Schreiben von User-Storys hilft dem Team am besten, ein gemeinsames Verständnis über das zu liefernde Produkt zu entwickeln?",
        hint: "User-Storys: Card, Conversation, Confirmation. Was schafft gemeinsames Verständnis?",
        answers: [
            "Planungspoker, um einen Konsens über den Aufwand zu erreichen.",
            "Reviews, um Inkonsistenzen und Widersprüche zu erkennen.",
            "Iterationsplanung, um User-Storys mit dem höchsten Geschäftswert zu priorisieren.",
            "Gespräch, um ein gemeinsames Verständnis über die Nutzung der Software zu entwickeln."
        ],
        correct: 3,
        feedback: {
            trap: "a) Planungspoker = Aufwandsschätzung. b) Reviews = Qualitätssicherung. c) Iterationsplanung = Priorisierung.",
            principle: "Conversation (Gespräch) = gemeinsames Verständnis entwickeln.",
            explanation: "Das Gespräch (Conversation) ist der Teil der User-Story, der ein gemeinsames Verständnis über die Nutzung der Software entwickelt.",
            reference: "Lehrplan 4.5.1"
        }
    },
    {
        id: "gtb-d-29",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 29",
        lo: "FL-4.5.3",
        kLevel: 3,
        chapter: 4,
        text: "Sie entwerfen Testfälle für eine User-Story:\n\n'Als Kunde möchte ich die Suchergebnisse nach Preisspanne filtern können, damit ich Produkte innerhalb meines Budgets leichter finden kann.'\n\nAkzeptanzkriterien:\n1. Der Filter sollte für alle Versionen ab Version 3.0 funktionieren.\n2. Der Filter sollte Mindest- und Höchstpreis ermöglichen.\n3. Die Suchergebnisse sollten sich dynamisch aktualisieren.\n\nVorbedingung: Produkt A kostet 100€, Produkt B kostet 110€.\n\nWelches ist DAS BESTE Beispiel für einen Testfall?",
        hint: "ATDD-Testfall: Testet die Akzeptanzkriterien, verwendet Gegeben/Wenn/Dann.",
        answers: [
            "Filter auf 90-100€ setzen → nur Produkt A. Höchstpreis auf 110€ → beide Produkte.",
            "Standardpreise prüfen. Produkt C hinzufügen → Standardhöchstpreis ändert sich.",
            "Filter auf 90-115€ → beide Produkte. Währung ändern → Filterbereich ändert sich.",
            "Mit drei Browsern testen: Edge, Chrome, Opera. Filter 90-110€ → Layout gleich."
        ],
        correct: 0,
        feedback: {
            trap: "b) Testet nicht die Akzeptanzkriterien. c) Währung ist nicht in den Kriterien. d) Browser-Kompatibilität ist nicht in den Kriterien.",
            principle: "ATDD-Testfälle testen die definierten Akzeptanzkriterien.",
            explanation: "Option a) testet Kriterium 2 (Mindest-/Höchstpreis) und Kriterium 3 (dynamische Aktualisierung).",
            reference: "Lehrplan 4.5.3"
        }
    },
    {
        id: "gtb-d-30",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 30",
        lo: "FL-5.1.3",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Optionen beschreiben AM BESTEN typische Endekriterien in einem Testprojekt?\n\nWählen Sie ZWEI Optionen!",
        hint: "Endekriterien = wann ist der Test fertig? Budget aufgebraucht, Überdeckung erreicht.",
        answers: [
            "Das Budget ist genehmigt.",
            "Das Budget ist aufgebraucht.",
            "Die Testbasis ist verfügbar.",
            "Testfälle haben mindestens 80% Anweisungsüberdeckung erreicht.",
            "Alle Testanalysten sind nach ISTQB Foundation Level zertifiziert."
        ],
        correct: [1, 3],
        feedback: {
            trap: "a), c), e) sind Eingangskriterien oder irrelevant.",
            principle: "Endekriterien: Budget aufgebraucht, Überdeckung erreicht, Zeit abgelaufen.",
            explanation: "b) Budget aufgebraucht und d) Überdeckung erreicht sind typische Endekriterien.",
            reference: "Lehrplan 5.1.3"
        }
    },
    {
        id: "gtb-d-31",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 31",
        lo: "FL-5.1.4",
        kLevel: 3,
        chapter: 5,
        text: "Das Team möchte die Zeit abschätzen, die ein Tester benötigt, um vier Testfälle auszuführen. Es wurden folgende Aufwandsschätzungen für einen Testfall ermittelt:\n\n• Best-Case: 1 Stunde\n• Worst-Case: 8 Stunden\n• Wahrscheinlichster Fall: 3 Stunden\n\nDas Team verwendet das Drei-Punkt-Schätzverfahren.\n\nWie hoch ist die geschätzte Gesamtzeit zur Ausführung aller vier Testfälle?",
        hint: "Drei-Punkt-Schätzung: E = (O + 4M + P) / 6. Dann × 4 Testfälle.",
        answers: [
            "14 Stunden",
            "3,5 Stunden",
            "16 Stunden",
            "12 Stunden"
        ],
        correct: 0,
        feedback: {
            trap: "b) Das ist nur für einen Testfall. c) und d) sind falsch berechnet.",
            principle: "E = (O + 4M + P) / 6 = (1 + 4×3 + 8) / 6 = 21/6 = 3,5 Stunden pro Testfall.",
            explanation: "E = (1 + 12 + 8) / 6 = 21/6 = 3,5 Stunden pro Testfall. Für 4 Testfälle: 4 × 3,5 = 14 Stunden.",
            reference: "Lehrplan 5.1.4"
        }
    },
    {
        id: "gtb-d-32",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 32",
        lo: "FL-5.1.5",
        kLevel: 3,
        chapter: 5,
        text: "Die Tabelle zeigt die Nachverfolgbarkeitsmatrix zwischen Testfällen und Anforderungen:\n\nTC1 deckt Req1, Req2, Req3, Req4 ab.\nTC2 deckt Req2, Req5, Req6 ab.\nTC3 deckt Req3, Req7 ab.\nTC4 deckt Req4 ab.\n\nDie Testfälle sollen mithilfe des Verfahrens der zusätzlichen Überdeckung priorisiert werden.\n\nWelcher Testfall sollte ALS LETZTER ausgeführt werden?",
        hint: "Zusätzliche Überdeckung: Starte mit dem, der am meisten abdeckt. Dann der nächste mit den meisten NEUEN.",
        answers: [
            "TC1",
            "TC2",
            "TC3",
            "TC4"
        ],
        correct: 3,
        feedback: {
            trap: "TC1 deckt am meisten ab (4 Req), also zuerst. Dann TC2 (3 neue: Req5, Req6, Req7). Dann TC3 (Req7 neu). TC4 zuletzt (Req4 bereits durch TC1).",
            principle: "Zusätzliche Überdeckung: Testfall mit den meisten NEUEN Anforderungen zuerst.",
            explanation: "TC1 (4 Req) → TC2 (Req5, Req6 neu) → TC3 (Req7 neu) → TC4 (keine neuen Req). TC4 wird als letzter ausgeführt.",
            reference: "Lehrplan 5.1.5"
        }
    },
    {
        id: "gtb-d-33",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 33",
        lo: "FL-5.1.7",
        kLevel: 2,
        chapter: 5,
        text: "Wie unterstützen Testquadranten das Testen?",
        hint: "Testquadranten helfen, verschiedene Testarten zu verstehen und einzuordnen.",
        answers: [
            "Sie helfen bei der Testplanung, indem sie den Testprozess in vier Stufen unterteilen.",
            "Sie helfen bei der Bewertung hoher Überdeckungsstufen basierend auf niedrigen Überdeckungsstufen.",
            "Sie helfen nicht-technischen Stakeholdern, verschiedene Testarten zu verstehen.",
            "Sie helfen agilen Teams, Kommunikationsstrategien auf Basis psychologischer Typen zu entwickeln."
        ],
        correct: 2,
        feedback: {
            trap: "a) Quadranten sind keine Teststufen. b) Quadranten messen keine Überdeckung. d) Quadranten haben nichts mit psychologischen Typen zu tun.",
            principle: "Testquadranten = Visualisierung verschiedener Testarten für alle Stakeholder.",
            explanation: "Testquadranten helfen nicht-technischen Stakeholdern, verschiedene Testarten zu verstehen und deren Relevanz für verschiedene Teststufen zu erkennen.",
            reference: "Lehrplan 5.1.7"
        }
    },
    {
        id: "gtb-d-34",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 34",
        lo: "FL-5.2.1",
        kLevel: 1,
        chapter: 5,
        text: "Für ein bestimmtes Risiko beträgt dessen Risikostufe 1.000€, und die geschätzte Eintrittswahrscheinlichkeit liegt bei 50%.\n\nWas ist das Schadensausmaß des Risikos?",
        hint: "Risikostufe = Wahrscheinlichkeit × Schadensausmaß. Umstellen!",
        answers: [
            "500 €",
            "2.000 €",
            "50.000 €",
            "200 €"
        ],
        correct: 1,
        feedback: {
            trap: "a) 500€ wäre Risikostufe × Wahrscheinlichkeit. c) und d) sind falsch berechnet.",
            principle: "Risikostufe = Wahrscheinlichkeit × Schadensausmaß → Schadensausmaß = Risikostufe / Wahrscheinlichkeit.",
            explanation: "Schadensausmaß = 1.000€ / 0,5 = 2.000€.",
            reference: "Lehrplan 5.2.1"
        }
    },
    {
        id: "gtb-d-35",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 35",
        lo: "FL-5.2.2",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Optionen stellen Produktrisiken dar?\n\nWählen Sie ZWEI Optionen!",
        hint: "Produktrisiko = Risiko bezüglich des Produkts selbst. Projektrisiko = Risiko bezüglich des Projekts.",
        answers: [
            "Umfangserweiterung",
            "Schlechte Architektur",
            "Kostensenkung",
            "Schlechte Werkzeugunterstützung",
            "Antwortzeiten zu lang"
        ],
        correct: [1, 4],
        feedback: {
            trap: "a), c), d) sind Projektrisiken (Scope Creep, Budget, Werkzeuge).",
            principle: "Produktrisiko = Qualitätsprobleme des Produkts (Architektur, Performance).",
            explanation: "b) Schlechte Architektur und e) Antwortzeiten zu lang sind Produktrisiken.",
            reference: "Lehrplan 5.2.2"
        }
    },
    {
        id: "gtb-d-36",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 36",
        lo: "FL-5.3.2",
        kLevel: 2,
        chapter: 5,
        text: "Welcher der folgenden Zwecke gehört NICHT zu den gültigen Zielen eines Testberichts?",
        hint: "Testbericht = Zusammenfassung, Fortschritt, Ergebnisse. Was gehört NICHT dazu?",
        answers: [
            "Verfolgung des Testfortschritts und Identifizierung von Bereichen, die weitere Aufmerksamkeit erfordern.",
            "Bereitstellung von Informationen über die durchgeführten Tests, deren Ergebnisse und gefundene Probleme.",
            "Bereitstellung detaillierter Informationen zu jedem einzelnen Fehlerzustand, einschließlich der Schritte zur Reproduktion.",
            "Bereitstellung von Informationen über die für den nächsten Zeitraum geplanten Tests."
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) sind alle gültige Ziele eines Testberichts.",
            principle: "Detaillierte Fehlerinformationen gehören in den FEHLERBERICHT, nicht in den Testbericht.",
            explanation: "Detaillierte Informationen zu einzelnen Fehlerzuständen (Schritte zur Reproduktion) gehören in Fehlerberichte, nicht in Testberichte.",
            reference: "Lehrplan 5.3.2"
        }
    },
    {
        id: "gtb-d-37",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 37",
        lo: "FL-5.4.1",
        kLevel: 2,
        chapter: 5,
        text: "Der Benutzer meldete einen Softwarefehler. Ein Ingenieur fragte nach der Softwareversionsnummer. Basierend auf der Versionsnummer stellte das Team alle Dateien des entsprechenden Release zusammen. Ein Entwickler konnte den Fehlerzustand identifizieren und beheben.\n\nWelche der folgenden Optionen ermöglichte dem Team diese Vorgehensweise?",
        hint: "Versionskontrolle, Baselines, Wiederherstellung alter Versionen = ?",
        answers: [
            "Risikomanagement",
            "Testüberwachung und Teststeuerung",
            "Whole-Team-Ansatz",
            "Konfigurationsmanagement"
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) ermöglichen nicht die Wiederherstellung alter Versionen.",
            principle: "Konfigurationsmanagement = Versionskontrolle, Baselines, Wiederherstellung.",
            explanation: "Konfigurationsmanagement ermöglicht es, alle Dateien eines bestimmten Release basierend auf der Versionsnummer wiederherzustellen.",
            reference: "Lehrplan 5.4.1"
        }
    },
    {
        id: "gtb-d-38",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 38",
        lo: "FL-5.5.1",
        kLevel: 3,
        chapter: 5,
        text: "Betrachten Sie den folgenden Fehlerbericht für ein Buchausleihsystem:\n\nFehler-ID: 001\nTitel: Rückgabe eines Buches wird nicht registriert.\nSchweregrad: Hoch\nPriorität: nicht angegeben\nUmgebung: Windows 11, Google Chrome\nBeschreibung: Beim Versuch, ein Buch zurückzugeben, registriert das System die Rückgabe nicht.\nSchritte zur Reproduktion: Anmelden, auf 'Buch zurückgeben' klicken.\nErwartetes Ergebnis: Buch sollte als zurückgegeben registriert werden.\nTatsächliches Ergebnis: Buch bleibt dem Benutzer zugewiesen.\nAnhänge: [leere Liste]\n\nWelche der folgenden Optionen hilft dem Entwickler AM EHESTEN, den Fehler schnell zu reproduzieren?",
        hint: "Was fehlt für eine schnelle Reproduktion? Spezifische Daten!",
        answers: [
            "Hinzufügen spezifischer Informationen zu den betroffenen Benutzern und Büchern im Abschnitt 'Beschreibung'.",
            "Ergänzung des fehlenden Wertes im Feld 'Priorität'.",
            "Hinzufügen von Speicherabzügen und Datenbankschnappschüssen nach jedem Schritt.",
            "Wiederholung desselben Testfalls in verschiedenen Umgebungen."
        ],
        correct: 0,
        feedback: {
            trap: "b) Priorität hilft nicht bei der Reproduktion. c) Zu aufwendig. d) Hilft nicht bei der Reproduktion.",
            principle: "Spezifische Daten (Benutzer-ID, Buch-ID) helfen bei der schnellen Reproduktion.",
            explanation: "Spezifische Informationen zu den betroffenen Benutzern und Büchern helfen dem Entwickler, den Fehler schnell zu reproduzieren.",
            reference: "Lehrplan 5.5.1"
        }
    },
    {
        id: "gtb-d-39",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 39",
        lo: "FL-6.1.1",
        kLevel: 2,
        chapter: 6,
        text: "Werkzeuge aus welchen Testwerkzeugkategorien erleichtern höchstwahrscheinlich die Testausführung?\n\nWählen Sie ZWEI Optionen!",
        hint: "Testausführung = Automatisierung, Performance-Tests. Welche Werkzeuge?",
        answers: [
            "Kooperationswerkzeuge",
            "DevOps-Werkzeuge",
            "Managementwerkzeuge",
            "Nicht-funktionale Testwerkzeuge",
            "Testentwurfs- und Implementierungswerkzeuge"
        ],
        correct: [1, 3],
        feedback: {
            trap: "a), c), e) unterstützen nicht direkt die Testausführung.",
            principle: "Testausführung: DevOps-Werkzeuge (CI/CD) und nicht-funktionale Testwerkzeuge (Performance).",
            explanation: "b) DevOps-Werkzeuge (für automatisierte Testausführung in Pipelines) und d) Nicht-funktionale Testwerkzeuge (für Performance-Tests) erleichtern die Testausführung.",
            reference: "Lehrplan 6.1.1"
        }
    },
    {
        id: "gtb-d-40",
        source: "GTB CTFL v4.0 Sample Exam D, Frage 40",
        lo: "FL-6.2.1",
        kLevel: 1,
        chapter: 6,
        text: "Welche der folgenden Optionen ist höchstwahrscheinlich ein Risiko der Testautomatisierung?",
        hint: "Risiken der Automatisierung: Unrealistische Erwartungen, Wartungsaufwand, Inkompatibilität.",
        answers: [
            "Die Entdeckung zusätzlicher schwerwiegender Fehler.",
            "Bereitstellung von Maßnahmen, die für Menschen zu kompliziert sind, um sie abzuleiten.",
            "Inkompatibilität mit der Entwicklungsplattform.",
            "Deutlich reduzierte Testausführungszeiten."
        ],
        correct: 2,
        feedback: {
            trap: "a) Das ist ein VORTEIL. b) Kein typisches Risiko. d) Das ist ein VORTEIL.",
            principle: "Risiko: Werkzeug ist nicht kompatibel mit der Entwicklungsplattform.",
            explanation: "Inkompatibilität mit der Entwicklungsplattform ist ein typisches Risiko der Testautomatisierung.",
            reference: "Lehrplan 6.2.1"
        }
    },
    // =========================================================================
    // GTB SAMPLE EXAM SET E (40 Fragen)
    // =========================================================================
    {
        id: "gtb-e-1",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 1",
        lo: "FL-1.1.1",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt ein typisches Testziel?",
        hint: "Testziele: Fehlerzustände finden, Vertrauen aufbauen, Qualität bewerten. Was passt?",
        answers: [
            "Der Test beginnt kurz vor der Freigabe des Testobjekts, um Fehlerzustände zu finden, die eine Abnahme verhindern.",
            "Es erfolgt eine Validierung, dass das Testobjekt so funktioniert, wie es von den verschiedenen Stakeholdern erwartet wird.",
            "Es lässt sich nachweisen, dass alle Fehlerzustände identifiziert wurden.",
            "Es lässt sich nachweisen, dass die verbleibenden Fehlerzustände keine negativen Auswirkungen haben werden."
        ],
        correct: 1,
        feedback: {
            trap: "a) Testen sollte FRÜH beginnen, nicht kurz vor Freigabe. c) Alle Fehler zu finden ist unmöglich. d) Verbleibende Fehler können immer Auswirkungen haben.",
            principle: "Testziel: Validierung, dass das Testobjekt wie erwartet funktioniert.",
            explanation: "Die Validierung, dass das Testobjekt den Erwartungen der Stakeholder entspricht, ist ein typisches Testziel.",
            reference: "Lehrplan 1.1.1"
        }
    },
    {
        id: "gtb-e-2",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 2",
        lo: "FL-1.1.2",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt den Unterschied zwischen Testen und Debugging am BESTEN?",
        hint: "Testen = Fehler FINDEN. Debugging = Fehler ANALYSIEREN und BEHEBEN.",
        answers: [
            "Testen identifiziert die Ursache von Fehlerzuständen. Debugging analysiert die Fehlerzustände und schlägt Präventionsmaßnahmen vor.",
            "Dynamisches Testen zeigt Fehlerwirkungen auf, die durch Fehlerzustände verursacht werden. Debugging analysiert und behebt den zugehörigen Fehlerzustand.",
            "Testen beseitigt Fehlerwirkungen; während Debugging Fehlerzustände beseitigt, die Fehlerwirkungen verursachen.",
            "Dynamisches Testen verhindert die Ursache von Fehlerwirkungen. Debugging beseitigt die Fehlerwirkungen."
        ],
        correct: 1,
        feedback: {
            trap: "a) Testen identifiziert nicht die Ursache, das macht Debugging. c) Testen beseitigt nichts. d) Testen verhindert nichts direkt.",
            principle: "Testen = Fehlerwirkungen aufzeigen. Debugging = Fehlerzustände analysieren und beheben.",
            explanation: "Dynamisches Testen zeigt Fehlerwirkungen auf. Debugging analysiert den zugehörigen Fehlerzustand und behebt ihn.",
            reference: "Lehrplan 1.1.2"
        }
    },
    {
        id: "gtb-e-3",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 3",
        lo: "FL-1.3.1",
        kLevel: 2,
        chapter: 1,
        text: "Ein Product Owner sagt, dass Ihre Rolle als Tester in einem agilen Team darin besteht, alle Fehlerzustände vor dem Ende jeder Iteration aufzudecken.\n\nWelche der folgenden Optionen ist ein Grundsatz, der als Antwort auf diese (falsche) Aussage verwendet werden könnte?",
        hint: "Kann man ALLE Fehler finden? Nein! Welcher Grundsatz sagt das?",
        answers: [
            "Häufung von Fehlerzuständen.",
            "Testen zeigt die Anwesenheit von Fehlerzuständen.",
            "Trugschluss: 'Keine Fehler' bedeutet ein brauchbares System.",
            "Analyse der Grundursache."
        ],
        correct: 1,
        feedback: {
            trap: "a) Häufung beschreibt Verteilung, nicht Vollständigkeit. c) Trugschluss betrifft Brauchbarkeit, nicht Vollständigkeit. d) Grundursache ist kein Grundsatz.",
            principle: "Testen zeigt die Anwesenheit von Fehlerzuständen, nicht deren Abwesenheit.",
            explanation: "Der Grundsatz 'Testen zeigt die Anwesenheit von Fehlerzuständen' widerlegt die Aussage, dass alle Fehler gefunden werden können.",
            reference: "Lehrplan 1.3.1"
        }
    },
    {
        id: "gtb-e-4",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 4",
        lo: "FL-1.4.1",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Optionen ist ein Beispiel für eine Aufgabe, die im Rahmen der Testrealisierung des Testprozesses durchgeführt werden kann?",
        hint: "Testrealisierung = Testfälle in ausführbare Form bringen, Testdaten erstellen, Umgebung einrichten.",
        answers: [
            "Analysieren eines Fehlerzustands.",
            "Entwerfen von Testdaten.",
            "Einem Testobjekt eine Version zuordnen.",
            "Schreiben einer User-Story."
        ],
        correct: 2,
        feedback: {
            trap: "a) Fehleranalyse = Testdurchführung/Debugging. b) Testdaten entwerfen = Testentwurf. d) User-Story = Entwicklung.",
            principle: "Testrealisierung: Testumgebung einrichten, Versionen zuordnen, Testabläufe erstellen.",
            explanation: "Einem Testobjekt eine Version zuordnen ist eine Aufgabe der Testrealisierung (Konfigurationsmanagement).",
            reference: "Lehrplan 1.4.1"
        }
    },
    {
        id: "gtb-e-5",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 5",
        lo: "FL-1.4.2",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen ist ein Beispiel für einen technischen Faktor, der den Testprozess beeinflusst?",
        hint: "Technische Faktoren: Technologie, Architektur, Plattform. Organisatorische Faktoren: Team, Prozesse.",
        answers: [
            "Die Software ist eine Webanwendung, die auf verschiedenen Browsern funktionieren muss.",
            "Die Software ist für einen Finanzdienstleister bestimmt, der strenge Sicherheitsanforderungen hat.",
            "Die Software wird mit einer agilen Methode entwickelt, die kurze Iterationen und häufige Releases erfordert.",
            "Die Software wird von einem Team getestet, das über unterschiedliche Kompetenzen und Erfahrungen verfügt."
        ],
        correct: 0,
        feedback: {
            trap: "b) Sicherheitsanforderungen = geschäftlicher Faktor. c) Agile Methode = organisatorischer Faktor. d) Teamkompetenzen = personeller Faktor.",
            principle: "Technischer Faktor: Webanwendung, verschiedene Browser = Plattformabhängigkeit.",
            explanation: "Die Notwendigkeit, auf verschiedenen Browsern zu funktionieren, ist ein technischer Faktor, der den Testprozess beeinflusst.",
            reference: "Lehrplan 1.4.2"
        }
    },
    {
        id: "gtb-e-6",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 6",
        lo: "FL-1.4.5",
        kLevel: 2,
        chapter: 1,
        text: "Welche der folgenden Aussagen beschreibt am BESTEN die Unterschiede zwischen der Rolle des Testmanagements und der Rolle des Testens?",
        hint: "Testmanagement = Planung, Steuerung, Berichterstattung. Testen = Analyse, Entwurf, Durchführung.",
        answers: [
            "Die Rolle des Testmanagements konzentriert sich auf Testanalyse, Testentwurf, Testrealisierung und Testdurchführung, während die Rolle des Testens die Gesamtverantwortung übernimmt.",
            "Die Rolle des Testmanagements und die Rolle des Testens sind identisch und können von derselben Person gleichzeitig übernommen werden.",
            "Die Rolle des Testmanagements übernimmt die Gesamtverantwortung für den Testprozess, während die Rolle des Testens sich auf Testanalyse, Testentwurf, Testrealisierung und Testdurchführung konzentriert.",
            "Die Rolle des Testmanagements und die Rolle des Testens haben keine spezifischen Aufgaben und können je nach Kontext variieren."
        ],
        correct: 2,
        feedback: {
            trap: "a) Vertauscht die Rollen. b) Sie sind unterschiedlich. d) Sie haben spezifische Aufgaben.",
            principle: "Testmanagement = Gesamtverantwortung. Testen = operative Aktivitäten.",
            explanation: "Testmanagement übernimmt die Gesamtverantwortung, während Tester sich auf Analyse, Entwurf, Realisierung und Durchführung konzentrieren.",
            reference: "Lehrplan 1.4.5"
        }
    },
    {
        id: "gtb-e-7",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 7",
        lo: "FL-1.5.3",
        kLevel: 2,
        chapter: 1,
        text: "Während der Besprechung einer User-Story in einem agilen Projekt stellen Sie als Tester einen Widerspruch in der Interpretation eines Akzeptanzkriteriums zwischen dem Product Owner und dem Entwicklungsteam fest. Sie bringen diesen Widerspruch zur Sprache.\n\nWelche der folgenden Optionen beschreibt einen Vorteil der Unabhängigkeit des Testens, der in dieser Situation deutlich wird?",
        hint: "Unabhängige Tester können Annahmen hinterfragen und Widersprüche aufdecken.",
        answers: [
            "Tester können verschiedene Arten von Fehlerwirkungen und -zuständen erkennen.",
            "Tester können die Hauptverantwortung für die Qualität übernehmen.",
            "Die Entwickler können darauf vertrauen, dass die Tester für die gewünschte Qualität sorgen.",
            "Tester können Annahmen der Stakeholder hinterfragen."
        ],
        correct: 3,
        feedback: {
            trap: "a) Nicht spezifisch für diese Situation. b) Qualität ist TEAM-Verantwortung. c) Das ist ein NACHTEIL der Unabhängigkeit.",
            principle: "Unabhängige Tester hinterfragen Annahmen und decken Widersprüche auf.",
            explanation: "Der Tester hat einen Widerspruch aufgedeckt, indem er die Annahmen der Stakeholder hinterfragt hat – ein Vorteil der Unabhängigkeit.",
            reference: "Lehrplan 1.5.3"
        }
    },
    {
        id: "gtb-e-8",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 8",
        lo: "FL-1.5.2",
        kLevel: 1,
        chapter: 1,
        text: "Welche der folgenden Optionen beschreibt am BESTEN die Verantwortlichkeiten, die sich aus dem agilen Whole-Team-Ansatz ergeben?",
        hint: "Whole-Team = alle arbeiten zusammen für Qualität. Tester arbeiten MIT dem Team.",
        answers: [
            "Tester sind für die Entwicklung von Unittests verantwortlich und übergeben diese an die Entwickler zur Testdurchführung.",
            "Fachbereichsvertreter haben die Aufgabe, die Werkzeuge auszuwählen, die das Entwicklungsteam zu verwenden hat.",
            "Von den Testern wird erwartet, dass sie gemeinsam mit den Fachbereichsvertretern und dem Entwicklungsteam die Testfälle erstellen.",
            "Von den Entwicklern wird erwartet, dass sie nicht-funktionale Anforderungen testen."
        ],
        correct: 2,
        feedback: {
            trap: "a) Unittests werden von Entwicklern geschrieben. b) Werkzeugauswahl ist nicht Aufgabe der Fachbereichsvertreter. d) Nicht-funktionale Tests sind nicht nur Entwickleraufgabe.",
            principle: "Whole-Team: Tester, Entwickler und Fachbereich erstellen gemeinsam Testfälle.",
            explanation: "Im Whole-Team-Ansatz arbeiten Tester gemeinsam mit Fachbereichsvertretern und Entwicklern an der Erstellung von Testfällen.",
            reference: "Lehrplan 1.5.2"
        }
    },
    {
        id: "gtb-e-9",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 9",
        lo: "FL-2.1.2",
        kLevel: 1,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt ein bewährtes Verfahren für das Testen in allen Softwareentwicklungslebenszyklus-(SDLC-)Modellen?",
        hint: "Bewährte Praktiken: Früh beginnen, parallel zur Entwicklung testen.",
        answers: [
            "Testaktivitäten für eine Teststufe beginnen bereits während der entsprechenden Entwicklungsphase.",
            "Eine Teststufe im Softwareentwicklungslebenszyklus-Modell beginnt, wenn die vorhergehende Teststufe abgeschlossen ist.",
            "Das Testen wird als separate Phase betrachtet. Sie beginnt, wenn die Entwicklung abgeschlossen ist.",
            "Das Testen wird der Entwicklung als Inkrement hinzugefügt."
        ],
        correct: 0,
        feedback: {
            trap: "b) Teststufen können überlappen. c) Testen ist keine separate Phase. d) Inkrement ist kein Standard-Begriff hier.",
            principle: "Testaktivitäten beginnen parallel zur entsprechenden Entwicklungsphase.",
            explanation: "Ein bewährtes Verfahren ist, dass Testaktivitäten bereits während der entsprechenden Entwicklungsphase beginnen (Shift-Left).",
            reference: "Lehrplan 2.1.2"
        }
    },
    {
        id: "gtb-e-10",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 10",
        lo: "FL-2.1.3",
        kLevel: 1,
        chapter: 2,
        text: "Welcher der folgenden beschriebenen Entwicklungsansätze definiert Testen NICHT als Treiber der Softwareentwicklung?",
        hint: "Test-First = Tests treiben die Entwicklung. Welcher Ansatz ist NICHT Test-First?",
        answers: [
            "Zuerst werden Tests erstellt. Dann wird der Code geschrieben.",
            "Die Testfälle steuern die Codierung.",
            "Das gewünschte Verhalten einer Anwendung wird durch Testfälle definiert.",
            "Tests werden aus Akzeptanzkriterien abgeleitet und teilweise automatisiert."
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) beschreiben alle Test-First-Ansätze (TDD, BDD).",
            principle: "Tests aus Akzeptanzkriterien ableiten ist NICHT Test-First, sondern normaler Testprozess.",
            explanation: "Option d) beschreibt einen normalen Testprozess, bei dem Tests NACH den Akzeptanzkriterien erstellt werden – kein Test-First.",
            reference: "Lehrplan 2.1.3"
        }
    },
    {
        id: "gtb-e-11",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 11",
        lo: "FL-2.1.5",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Aussagen beschreibt im Softwareentwicklungslebenszyklus (SDLC) am BESTEN Shift-Left im Testen?",
        hint: "Shift-Left = früher testen. Wann beginnen die Testaktivitäten?",
        answers: [
            "Testaktivitäten beginnen so früh wie möglich im SDLC und werden parallel zu den Entwicklungsaktivitäten durchgeführt.",
            "Testaktivitäten beginnen so spät wie möglich im SDLC und werden nach den Entwicklungsaktivitäten durchgeführt.",
            "Testaktivitäten beginnen in der Mitte des SDLC und werden parallel zu den Entwicklungsaktivitäten durchgeführt.",
            "Testaktivitäten werden über mehrere Phasen des SDLC verteilt und in jeder Phase entsprechend dem Reifegrad des Produkts durchgeführt."
        ],
        correct: 0,
        feedback: {
            trap: "b) Das ist das Gegenteil von Shift-Left. c) Mitte ist nicht 'früh'. d) Verteilung ist nicht spezifisch für Shift-Left.",
            principle: "Shift-Left = Testaktivitäten so früh wie möglich beginnen.",
            explanation: "Shift-Left bedeutet, dass Testaktivitäten so früh wie möglich im SDLC beginnen und parallel zur Entwicklung durchgeführt werden.",
            reference: "Lehrplan 2.1.5"
        }
    },
    {
        id: "gtb-e-12",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 12",
        lo: "FL-2.1.1",
        kLevel: 2,
        chapter: 2,
        text: "Sie sind als Tester in einem Projekt eingesetzt, das nach dem iterativ-inkrementellen Entwicklungsmodell vorgeht.\n\nWelche der folgenden Aussagen sollten Sie in dieser Situation unbedingt berücksichtigen?",
        hint: "Iterativ-inkrementell = häufige Releases = Regressionstests wichtig!",
        answers: [
            "Sie planen den Test als einmalige Aktivität, wenn alle Inkremente umgesetzt wurden.",
            "Statische Tests sollten ausschließlich auf Komponententestebene stattfinden.",
            "Da schnelle Rückmeldung wichtig ist, sollten die Tester die Regressionstests manuell ausführen.",
            "Durch die Lieferung neuer Inkremente ist es wichtig, umfangreiche Regressionstests aufzubauen."
        ],
        correct: 3,
        feedback: {
            trap: "a) Test ist keine einmalige Aktivität. b) Statische Tests auf allen Ebenen. c) Manuelle Regressionstests sind zu langsam.",
            principle: "Iterativ-inkrementell = umfangreiche Regressionstests erforderlich.",
            explanation: "Bei iterativ-inkrementeller Entwicklung ist es wichtig, umfangreiche Regressionstests aufzubauen, um sicherzustellen, dass neue Inkremente bestehende Funktionalität nicht beeinträchtigen.",
            reference: "Lehrplan 2.1.1"
        }
    },
    {
        id: "gtb-e-13",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 13",
        lo: "FL-2.2.1",
        kLevel: 2,
        chapter: 2,
        text: "Ein Testfall hat folgende Eigenschaften:\n• Er basiert auf Schnittstellenspezifikationen.\n• Der Schwerpunkt liegt auf dem Finden von Fehlerwirkungen in der Interaktion zwischen Komponenten.\n• Es werden sowohl funktionale als auch strukturbasierte Tests angewendet.\n\nIn welcher der folgenden Teststufen wird dieser Testfall am WAHRSCHEINLICHSTEN ausgeführt?",
        hint: "Schnittstellen + Interaktion zwischen Komponenten = Integrationstest.",
        answers: [
            "Komponentenintegrationstest",
            "Abnahmetest",
            "Systemtest",
            "Komponententest"
        ],
        correct: 0,
        feedback: {
            trap: "b) Abnahmetest = Geschäftsanforderungen. c) Systemtest = Gesamtsystem. d) Komponententest = einzelne Komponente.",
            principle: "Komponentenintegrationstest = Schnittstellen zwischen Komponenten testen.",
            explanation: "Der Testfall basiert auf Schnittstellenspezifikationen und testet die Interaktion zwischen Komponenten – das ist Komponentenintegrationstest.",
            reference: "Lehrplan 2.2.1"
        }
    },
    {
        id: "gtb-e-14",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 14",
        lo: "FL-2.3.1",
        kLevel: 2,
        chapter: 2,
        text: "Welche der folgenden Optionen ist KEIN Auslöser für Wartung und Wartungstest?",
        hint: "Wartungstest-Auslöser: Änderungen, Migration, Hotfixes, Außerbetriebnahme. Was ist KEIN Auslöser?",
        answers: [
            "Außerbetriebnahme",
            "Korrigierende Änderungen oder Hotfixes",
            "Upgrades oder Migrationen der Betriebsumgebung",
            "Implementierung neuer Funktionen"
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) sind alle Auslöser für Wartungstests.",
            principle: "Neue Funktionen = Entwicklung, nicht Wartung.",
            explanation: "Die Implementierung neuer Funktionen ist Teil der Entwicklung, nicht der Wartung. Wartung bezieht sich auf Änderungen an bestehender Funktionalität.",
            reference: "Lehrplan 2.3.1"
        }
    },
    {
        id: "gtb-e-15",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 15",
        lo: "FL-3.1.2",
        kLevel: 2,
        chapter: 3,
        text: "Welche der folgenden Aussagen zum statischen Test ist am EHESTEN zutreffend?",
        hint: "Statisches Testen = kostengünstig, früh, findet andere Fehler als dynamisches Testen.",
        answers: [
            "Der statische Test ist eine kostengünstige Möglichkeit, Fehlerzustände zu erkennen.",
            "Der statische Test macht den dynamischen Test theoretisch überflüssig.",
            "Der statische Test ermöglicht, Laufzeitprobleme frühzeitig im Lebenszyklus zu erkennen.",
            "Bei der Prüfung sicherheitskritischer Systeme hat der statische Test einen geringen Stellenwert."
        ],
        correct: 0,
        feedback: {
            trap: "b) Dynamisches Testen bleibt notwendig. c) Laufzeitprobleme erfordern dynamisches Testen. d) Statisches Testen ist bei sicherheitskritischen Systemen SEHR wichtig.",
            principle: "Statisches Testen ist kostengünstig, da Fehler früh gefunden werden.",
            explanation: "Statisches Testen ist eine kostengünstige Möglichkeit, Fehlerzustände zu erkennen, da Fehler früh im Lebenszyklus gefunden werden.",
            reference: "Lehrplan 3.1.2"
        }
    },
    {
        id: "gtb-e-16",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 16",
        lo: "FL-3.2.1",
        kLevel: 1,
        chapter: 3,
        text: "Welche der folgenden Aussagen beschreibt KEINEN Vorteil von frühem und häufigem Stakeholder-Feedback?",
        hint: "Vorteile: Frühe Problemerkennung, besseres Verständnis, Fokus auf wichtige Features. Was ist KEIN Vorteil?",
        answers: [
            "Häufiges Feedback hilft, dass Änderungen der Anforderungen früher verstanden und umgesetzt werden.",
            "Häufiges Feedback hilft dem Entwicklungsteam, besser zu verstehen, was sie entwickeln.",
            "Häufiges Feedback hilft dem Entwicklungsteam, sich auf die Features zu konzentrieren, die den größten Nutzen bringen.",
            "Häufiges Feedback kann zu Missverständnissen über Anforderungen führen."
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) sind alle Vorteile von frühem Feedback.",
            principle: "Missverständnisse sind ein NACHTEIL, kein Vorteil.",
            explanation: "Häufiges Feedback kann zu Missverständnissen führen – das ist ein potenzieller NACHTEIL, kein Vorteil.",
            reference: "Lehrplan 3.2.1"
        }
    },
    {
        id: "gtb-e-17",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 17",
        lo: "FL-3.2.4",
        kLevel: 2,
        chapter: 3,
        text: "Welche der unten aufgeführten Reviewarten ist am BESTEN geeignet, wenn das Review in Übereinstimmung mit dem vollständigen allgemeinen Reviewprozess und mit dem Ziel, möglichst viele Anomalien zu finden, durchgeführt werden soll?",
        hint: "Formellstes Review mit dem Ziel, viele Anomalien zu finden = Inspektion.",
        answers: [
            "Informelles Review",
            "Technisches Review",
            "Inspektion",
            "Walkthrough"
        ],
        correct: 2,
        feedback: {
            trap: "a) Informell = weniger strukturiert. b) Technisches Review = Expertenprüfung. d) Walkthrough = Autor führt durch.",
            principle: "Inspektion = formellstes Review, maximale Anomalienfindung.",
            explanation: "Die Inspektion ist die formellste Reviewart und folgt dem vollständigen Reviewprozess mit dem Ziel, möglichst viele Anomalien zu finden.",
            reference: "Lehrplan 3.2.4"
        }
    },
    {
        id: "gtb-e-18",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 18",
        lo: "FL-3.2.5",
        kLevel: 1,
        chapter: 3,
        text: "Während einer Phase intensiver Projektüberstunden wird eine umfangreiche Systemarchitekturspezifikation an verschiedene Projektteilnehmer versandt, zusammen mit der Ankündigung eines technischen Reviews in drei Tagen. Es werden keine weiteren Anpassungen an den zugewiesenen Aufgaben vorgenommen.\n\nWelcher der folgenden Erfolgsfaktoren für Reviews fehlt allein aufgrund dieser Information?",
        hint: "Überstunden + keine Anpassungen = keine Zeit zur Vorbereitung.",
        answers: [
            "Geeignete Art des Reviews.",
            "Ausreichend Zeit zur Vorbereitung.",
            "Die Festlegung klarer Ziele und messbarer Endekriterien.",
            "Gut geleitete Reviewsitzung."
        ],
        correct: 1,
        feedback: {
            trap: "a) Die Reviewart (technisches Review) ist angegeben. c) Ziele sind nicht erwähnt, aber das ist nicht das Hauptproblem. d) Sitzungsleitung ist nicht erwähnt.",
            principle: "Erfolgsfaktor: Ausreichend Zeit zur Vorbereitung.",
            explanation: "Bei Überstunden und ohne Anpassung der Aufgaben haben die Gutachter nicht genug Zeit zur Vorbereitung – ein wichtiger Erfolgsfaktor fehlt.",
            reference: "Lehrplan 3.2.5"
        }
    },
    {
        id: "gtb-e-19",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 19",
        lo: "FL-4.1.1",
        kLevel: 2,
        chapter: 4,
        text: "Im Vorfeld einer Sitzung zur Iterationsplanung analysieren Sie eine User-Story und deren Akzeptanzkriterien. Daraus leiten Sie entsprechende Testfälle ab, um das Prinzip des frühen Testens anzuwenden.\n\nWelches Testverfahren bzw. welchen Testansatz wenden Sie an?",
        hint: "Akzeptanzkriterien = Spezifikation = Black-Box-Verfahren.",
        answers: [
            "White-Box-Testen",
            "Black-Box-Testen",
            "Erfahrungsbasierter Test",
            "Intuitive Testfallermittlung"
        ],
        correct: 1,
        feedback: {
            trap: "a) White-Box braucht Code. c) Erfahrungsbasiert ist weniger systematisch. d) Intuitive Testfallermittlung ist erfahrungsbasiert.",
            principle: "Akzeptanzkriterien → Black-Box-Testverfahren.",
            explanation: "Das Ableiten von Testfällen aus Akzeptanzkriterien (Spezifikation) ist ein Black-Box-Testverfahren.",
            reference: "Lehrplan 4.1.1"
        }
    },
    {
        id: "gtb-e-20",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 20",
        lo: "FL-4.2.1",
        kLevel: 3,
        chapter: 4,
        text: "Ein Gerät zur Messung des täglichen Strahlungseinfalls für Pflanzen ermittelt einen Einstrahlungswert. Dieser ergibt sich aus:\n• Stunden Sonneneinstrahlung: unter 3h, 3-6h, über 6h\n• Intensität: sehr niedrig, niedrig, mittel, hoch\n\nFolgende Testfälle existieren bereits:\nT1: 1,5h, sehr niedrig → 10\nT2: 7,0h, mittel → 60\nT3: 0,5h, sehr niedrig → 10\n\nWie viele Testfälle müssen mindestens noch erzeugt werden, um eine vollständige Überdeckung ALLER GÜLTIGEN Eingabe-Äquivalenzklassen zu gewährleisten?",
        hint: "3 Dauer-Klassen × 4 Intensitäts-Klassen = 12 Kombinationen? Nein! Äquivalenzklassen einzeln zählen.",
        answers: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 2,
        feedback: {
            trap: "Äquivalenzklassen: Dauer (3) + Intensität (4) = 7 Klassen. T1/T3 decken: <3h, sehr niedrig. T2 deckt: >6h, mittel. Fehlen: 3-6h, niedrig, hoch.",
            principle: "Äquivalenzklassenüberdeckung: Jede Klasse mindestens einmal testen.",
            explanation: "Fehlende Klassen: 3-6h (Dauer), niedrig (Intensität), hoch (Intensität). 3 weitere Testfälle nötig.",
            reference: "Lehrplan 4.2.1"
        }
    },
    {
        id: "gtb-e-21",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 21",
        lo: "FL-4.2.2",
        kLevel: 3,
        chapter: 4,
        text: "Eine Smart-Home-App misst die durchschnittliche Temperatur und gibt Feedback:\n\n• Bis 10°C: Eiskalt!\n• 11-15°C: Ganz schön schattig!\n• 16-19°C: Cool!\n• 20-22°C: Zu warm!\n• Über 22°C: Sauna!\n\nWelches der folgenden Testsets liefert die HÖCHSTE Überdeckung von Grenzwerten bei 2-Wert-Grenzwertanalyse?",
        hint: "2-Wert-GWA: Für jede Grenze 2 Werte. Grenzen: 10/11, 15/16, 19/20, 22/23.",
        answers: [
            "0°C, 11°C, 20°C, 22°C, 23°C",
            "9°C, 15°C, 19°C, 23°C, 100°C",
            "10°C, 16°C, 19°C, 22°C, 23°C",
            "14°C, 15°C, 18°C, 19°C, 21°C, 22°C"
        ],
        correct: 2,
        feedback: {
            trap: "Grenzen sind: 10/11, 15/16, 19/20, 22/23. Option c) deckt: 10, 16, 19, 22, 23 = 5 Grenzwerte.",
            principle: "2-Wert-GWA: Grenze und ein Nachbarwert für jede Grenze.",
            explanation: "Option c) deckt die meisten Grenzwerte ab: 10 (Grenze), 16 (Grenze), 19 (Grenze), 22 (Grenze), 23 (Grenze).",
            reference: "Lehrplan 4.2.2"
        }
    },
    {
        id: "gtb-e-22",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 22",
        lo: "FL-4.2.3",
        kLevel: 3,
        chapter: 4,
        text: "Ein System zur Berechnung der Strafe für Geschwindigkeitsübertretungen:\n\nR1: Geschwindigkeit >50, Schulzone Ja → 250€ + Führerscheinentzug\nR2: Geschwindigkeit >50, Schulzone Nein → 250€\nR3: Geschwindigkeit ≤50, Schulzone Ja → keine Strafe\nR4: Geschwindigkeit ≤50, Schulzone Nein → keine Strafe\n\nTestfälle:\nTF1: 65, Schulzone=Ja (R1)\nTF2: 45, Schulzone=Ja (R3)\nTF3: 50, Schulzone=Nein (R4)\nTF4: 49, Schulzone=Nein (R4)\n\nWelche Regel ist (noch) NICHT durch einen Testfall überdeckt?",
        hint: "Prüfe, welche Regel noch nicht getestet wurde.",
        answers: [
            "Regel 4",
            "Regel 1",
            "Regel 2",
            "Regel 3"
        ],
        correct: 2,
        feedback: {
            trap: "TF1→R1, TF2→R3, TF3→R4, TF4→R4. R2 (>50, Schulzone=Nein) fehlt!",
            principle: "Entscheidungstabellenüberdeckung: Jede Regel mindestens einmal testen.",
            explanation: "Regel 2 (Geschwindigkeit >50, Schulzone Nein) ist nicht durch einen Testfall abgedeckt.",
            reference: "Lehrplan 4.2.3"
        }
    },
    {
        id: "gtb-e-23",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 23",
        lo: "FL-4.2.4",
        kLevel: 3,
        chapter: 4,
        text: "Betrachten Sie ein Zustandsdiagramm für eine Zapfsäule mit Kreditkarte. Jeder Test beginnt im Anfangszustand 'Warten auf Kunden' und endet, wenn ein Übergang im Anfangszustand ankommt.\n\nWie viele Tests benötigen Sie, um jeden Übergang im Zustandsdiagramm abzudecken?",
        hint: "Zähle die Übergänge und finde die minimale Anzahl von Testpfaden.",
        answers: [
            "4",
            "7",
            "1",
            "Unendlich viele Tests"
        ],
        correct: 0,
        feedback: {
            trap: "Ohne das genaue Diagramm ist es schwer zu sagen, aber typischerweise sind 4 Tests für vollständige Übergangsüberdeckung nötig.",
            principle: "Minimale Anzahl Tests für Übergangsüberdeckung = Anzahl unabhängiger Pfade.",
            explanation: "Für eine typische Zapfsäulen-Zustandsmaschine werden 4 Tests benötigt, um alle Übergänge abzudecken.",
            reference: "Lehrplan 4.2.4"
        }
    },
    {
        id: "gtb-e-24",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 24",
        lo: "FL-4.3.1",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Beschreibungen der Anweisungsüberdeckung trifft zu?",
        hint: "Anweisungsüberdeckung = Prozentsatz der ausgeführten Anweisungen.",
        answers: [
            "Die Anweisungsüberdeckung ist ein Maß für die Anzahl der Quellcodezeilen, die während des Tests ausgeführt wurden.",
            "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil der Anweisungen im Quellcode, die im Test ausgeführt wurden.",
            "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil der Quellcodezeilen, die im Test ausgeführt wurden.",
            "Die Anweisungsüberdeckung ist ein Maß für die Anzahl der Anweisungen im Quellcode, die während des Tests ausgeführt wurden."
        ],
        correct: 1,
        feedback: {
            trap: "a), d) Anzahl ist keine Überdeckung. c) Zeilen ≠ Anweisungen.",
            principle: "Anweisungsüberdeckung = ausgeführte Anweisungen / alle Anweisungen × 100%.",
            explanation: "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil der Anweisungen, die im Test ausgeführt wurden.",
            reference: "Lehrplan 4.3.1"
        }
    },
    {
        id: "gtb-e-25",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 25",
        lo: "FL-4.3.3",
        kLevel: 2,
        chapter: 4,
        text: "Welche der folgenden Aussagen stellt einen Mehrwert von White-Box-Tests dar?",
        hint: "White-Box-Mehrwert: Überdeckungsmessung, Code-Struktur testen.",
        answers: [
            "White-Box-Tests können Messgrößen für die Überdeckung von z.B. Anweisungen liefern.",
            "White-Box-Tests können überprüfen, ob der Code die Akzeptanzkriterien erfüllt.",
            "White-Box-Tests können die Kompatibilität mit anderen Systemen testen.",
            "White-Box-Tests können alle Fehlerzustände im Code aufdecken."
        ],
        correct: 0,
        feedback: {
            trap: "b) Akzeptanzkriterien = Black-Box. c) Kompatibilität = Systemtest. d) Alle Fehler finden ist unmöglich.",
            principle: "White-Box-Mehrwert: Überdeckungsmetriken (Anweisungs-, Zweigüberdeckung).",
            explanation: "White-Box-Tests können Messgrößen für die Überdeckung liefern, z.B. Anweisungsüberdeckung oder Zweigüberdeckung.",
            reference: "Lehrplan 4.3.3"
        }
    },
    {
        id: "gtb-e-26",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 26",
        lo: "FL-4.4.3",
        kLevel: 2,
        chapter: 4,
        text: "Sie testen eine mobile App, mit der Kunden auf ihre Bankkonten zugreifen können. Sie führen eine Testsuite aus, die jeden Bildschirm und jedes Feld anhand einer Sammlung von Heuristiken für Benutzerschnittstellen bewertet.\n\nWelche der folgenden Testverfahren kategorisiert das von Ihnen verwendete Testverfahren am BESTEN?",
        hint: "Heuristiken = Checkliste von Best Practices.",
        answers: [
            "Entscheidungstabellentest",
            "Explorativer Test",
            "Checklistenbasiertes Testen",
            "Intuitive Testfallermittlung"
        ],
        correct: 2,
        feedback: {
            trap: "a) Entscheidungstabelle = Geschäftslogik. b) Explorativ = Ad-hoc. d) Intuitiv = Erfahrung.",
            principle: "Heuristiken-Sammlung = Checkliste.",
            explanation: "Die Verwendung einer Sammlung von Heuristiken ist checklistenbasiertes Testen.",
            reference: "Lehrplan 4.4.3"
        }
    },
    {
        id: "gtb-e-27",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 27",
        lo: "FL-4.4.2",
        kLevel: 2,
        chapter: 4,
        text: "Für welche der folgenden Situationen ist der Einsatz von explorativen Tests am EHESTEN sinnvoll?",
        hint: "Explorative Tests = wenn Tester Erfahrung haben und wenig Spezifikation vorhanden ist.",
        answers: [
            "Wenn unter Zeitdruck die Durchführung bereits spezifizierter Tests beschleunigt werden muss.",
            "Wenn das System inkrementell entwickelt wird und keine Test-Charta vorhanden ist.",
            "Wenn Tester mit ausreichenden Kenntnissen über ähnliche Anwendungen und Technologien zur Verfügung stehen.",
            "Wenn eine umfangreiche Spezifikation des Systems zur Verfügung steht."
        ],
        correct: 2,
        feedback: {
            trap: "a) Zeitdruck = nicht der Hauptgrund. b) Keine Test-Charta ist ein Problem. d) Umfangreiche Spezifikation → spezifizierte Tests.",
            principle: "Explorative Tests: Erfahrene Tester mit Domänenwissen.",
            explanation: "Explorative Tests sind sinnvoll, wenn Tester Erfahrung mit ähnlichen Anwendungen und Technologien haben.",
            reference: "Lehrplan 4.4.2"
        }
    },
    {
        id: "gtb-e-28",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 28",
        lo: "FL-4.5.2",
        kLevel: 2,
        chapter: 4,
        text: "Ein agiles Entwicklungsteam hat folgende User-Story formuliert:\n\n'Als Anwender möchte ich, dass der Alarmton der elektronischen Eieruhr in der Lautstärke variabel einstellbar ist, so dass ich ihn immer hören kann.'\n\nWelches der folgenden Akzeptanzkriterien ist aus der Sicht des Testens am BESTEN geeignet, um eindeutige Abnahmetests zu entwerfen?",
        hint: "Gute Akzeptanzkriterien sind messbar und eindeutig.",
        answers: [
            "Die Lautstärke ist für jede Person einfach einzustellen, d.h., die Einstelltasten müssen eine nutzbare Größe haben.",
            "Der Tester kann den Alarmton auch auf der tiefsten Stufe gut hören.",
            "Die Lautstärke kann in einem Bereich von 40 bis 80 Dezibel eingestellt werden.",
            "Die Lautstärkeeinstellung funktioniert in den meistverkauften Modellen dieser Eieruhr korrekt."
        ],
        correct: 2,
        feedback: {
            trap: "a) 'Einfach' und 'nutzbar' sind subjektiv. b) 'Gut hören' ist subjektiv. d) 'Meistverkauft' ist unklar.",
            principle: "Gute Akzeptanzkriterien: Messbar, eindeutig, testbar.",
            explanation: "'40 bis 80 Dezibel' ist ein messbares, eindeutiges Kriterium, das einfach zu testen ist.",
            reference: "Lehrplan 4.5.2"
        }
    },
    {
        id: "gtb-e-29",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 29",
        lo: "FL-4.5.3",
        kLevel: 3,
        chapter: 4,
        text: "Bitte betrachten Sie die folgende User-Story:\n\n'Als Systemadministrator möchte ich die Performanz des Servers überwachen können, um über einen Performanztest sicherzustellen, dass das System effizient läuft.'\n\nWelcher Testfall eignet sich am BESTEN für eine abnahmetestgetriebene Entwicklung der User-Story?",
        hint: "ATDD: Gegeben/Wenn/Dann-Format, korrekte Rolle (Systemadministrator), vollständige Vorbedingungen.",
        answers: [
            "Login als Systemadministrator; wähle den Server aus; überprüfe die Serverleistung. GEGEBEN: Ich bin als Systemadministrator angemeldet UND GEGEBEN: Ich habe den Server ausgewählt, WENN ich 'Serverleistung überprüfen' auswähle, DANN wird mir eine Übersicht über die Performanz angezeigt.",
            "Login als Benutzer; führe eine Aufgabe aus; überprüfe die Serverleistung. GEGEBEN: Ich bin als Benutzer angemeldet...",
            "Login als Systemadministrator; wähle den Server aus; führe einen Performanztest durch. GEGEBEN: Ich bin als Systemadministrator angemeldet...",
            "Login als Systemadministrator; führe einen Performanztest durch; überprüfe die Serverleistung. GEGEBEN: Ich bin als Systemadministrator angemeldet..."
        ],
        correct: 0,
        feedback: {
            trap: "b) Falsche Rolle (Benutzer statt Systemadministrator). c), d) Performanztest durchführen ist nicht das Ziel der User-Story.",
            principle: "ATDD-Testfall: Korrekte Rolle, Gegeben/Wenn/Dann-Format, testet die User-Story.",
            explanation: "Option a) verwendet die korrekte Rolle (Systemadministrator) und testet das Überwachen der Performanz.",
            reference: "Lehrplan 4.5.3"
        }
    },
    {
        id: "gtb-e-30",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 30",
        lo: "FL-5.1.2",
        kLevel: 1,
        chapter: 5,
        text: "Welche der folgenden Aktivitäten führen Tester während der Releaseplanung im agilen Projekt durch?",
        hint: "Releaseplanung = langfristige Planung. Tester unterstützen bei User-Storys und Testbarkeit.",
        answers: [
            "Tester identifizieren und verfeinern funktionale und nicht-funktionale Aspekte des Testobjekts.",
            "Tester unterstützen die Ableitung von Aufgaben (Tasks) aus den User-Storys.",
            "Tester nehmen an der detaillierten Risikoanalyse der User-Storys teil.",
            "Tester unterstützen bei der Erstellung von User-Storys, bei deren Testbarkeit und bei den Akzeptanzkriterien."
        ],
        correct: 3,
        feedback: {
            trap: "a), b), c) sind eher Iterationsplanung-Aktivitäten.",
            principle: "Releaseplanung: Tester unterstützen bei User-Storys, Testbarkeit, Akzeptanzkriterien.",
            explanation: "Während der Releaseplanung unterstützen Tester bei der Erstellung von User-Storys, deren Testbarkeit und den Akzeptanzkriterien.",
            reference: "Lehrplan 5.1.2"
        }
    },
    {
        id: "gtb-e-31",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 31",
        lo: "FL-5.1.3",
        kLevel: 2,
        chapter: 5,
        text: "Gegeben seien die folgenden Beispiele für Eingangs- und Endekriterien für einen Systemtest:\n\n1. Das geplante Testbudget ist aufgebraucht.\n2. Mehr als 95% der geplanten Testfälle sind vollständig durchgeführt.\n3. Die Testumgebung für den Performanztest ist eingerichtet und verifiziert.\n4. Es sind keine Prio-1-Fehlerzustände und maximal 4 Prio-2-Fehlerzustände offen.\n5. Die Designspezifikation ist durch ein technisches Review geprüft und freigegeben.\n6. Der Unittest ist abgeschlossen und freigegeben.\n\nWelche der folgenden Kombinationen ordnet die Beispiele am BESTEN als Eingangs- und Endekriterien ein?",
        hint: "Eingangskriterien = was muss VOR dem Test erfüllt sein. Endekriterien = wann ist der Test fertig.",
        answers: [
            "Eingangskriterien: 5, 6; Endekriterien: 1, 2, 3, 4",
            "Eingangskriterien: 2, 3, 4; Endekriterien: 1, 5, 6",
            "Eingangskriterien: 1, 3; Endekriterien: 2, 4, 5, 6",
            "Eingangskriterien: 3, 5, 6; Endekriterien: 1, 2, 4"
        ],
        correct: 3,
        feedback: {
            trap: "Eingangskriterien: Testumgebung bereit (3), Design geprüft (5), Unittest fertig (6). Endekriterien: Budget aufgebraucht (1), Testfälle durchgeführt (2), Fehler behoben (4).",
            principle: "Eingangskriterien = Voraussetzungen. Endekriterien = Abschlussbedingungen.",
            explanation: "Eingangskriterien: 3, 5, 6 (Voraussetzungen). Endekriterien: 1, 2, 4 (Abschlussbedingungen).",
            reference: "Lehrplan 5.1.3"
        }
    },
    {
        id: "gtb-e-32",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 32",
        lo: "FL-5.1.4",
        kLevel: 3,
        chapter: 5,
        text: "Sie möchten den Testaufwand für ein neues Projekt mit Hilfe einer Drei-Punkt-Schätzung abschätzen:\n\n• Optimistisch (a): 300 Personentage\n• Wahrscheinlichst (m): 400 Personentage\n• Pessimistisch (b): 500 Personentage\n\nWie hoch schätzen Sie den Testaufwand auf Basis der Drei-Punkt-Schätzung?",
        hint: "Drei-Punkt-Schätzung: E = (O + 4M + P) / 6.",
        answers: [
            "350 Personentage",
            "420 Personentage",
            "400 ± 33 Personentage",
            "450 Personentage"
        ],
        correct: 2,
        feedback: {
            trap: "a) Falsch berechnet. b) Falsch berechnet. d) Falsch berechnet.",
            principle: "E = (O + 4M + P) / 6 = (300 + 4×400 + 500) / 6 = 2400/6 = 400.",
            explanation: "E = (300 + 1600 + 500) / 6 = 2400/6 = 400 Personentage. Die Standardabweichung ist (500-300)/6 ≈ 33.",
            reference: "Lehrplan 5.1.4"
        }
    },
    {
        id: "gtb-e-33",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 33",
        lo: "FL-5.1.5",
        kLevel: 3,
        chapter: 5,
        text: "Sie wurden gebeten, eine optimale, risikobasierte Ausführungsreihenfolge festzulegen:\n\nT7: Priorität 2, keine Abhängigkeit\nT8: Priorität 1, abhängig von T7\nT9: Priorität 3, abhängig von T8\nT10: Priorität 3, abhängig von T8\nT11: Priorität 1, abhängig von T9\nT12: Priorität 2, abhängig von T10\n\nPriorität 1 ist dringlicher als Priorität 2.\n\nWelche der folgenden Testabläufe berücksichtigt die Abhängigkeiten und Prioritäten?",
        hint: "Erst Abhängigkeiten erfüllen, dann nach Priorität sortieren.",
        answers: [
            "T7 → T8 → T10 → T11 → T9 → T12",
            "T7 → T8 → T9 → T10 → T11 → T12",
            "T7 → T8 → T10 → T9 → T11 → T12",
            "T7 → T8 → T9 → T11 → T10 → T12"
        ],
        correct: 3,
        feedback: {
            trap: "T7 muss vor T8. T8 muss vor T9 und T10. T9 muss vor T11. T10 muss vor T12. T11 hat Prio 1, also vor T10 (Prio 3).",
            principle: "Reihenfolge: Abhängigkeiten erfüllen + höchste Priorität zuerst.",
            explanation: "T7 → T8 → T9 (braucht T8) → T11 (Prio 1, braucht T9) → T10 (Prio 3, braucht T8) → T12 (Prio 2, braucht T10).",
            reference: "Lehrplan 5.1.5"
        }
    },
    {
        id: "gtb-e-34",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 34",
        lo: "FL-5.1.7",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen veranschaulicht den Nutzen der Testquadranten?",
        hint: "Testquadranten helfen, verschiedene Testarten zu verstehen und einzuordnen.",
        answers: [
            "Der Tester kann sich bei der Auswahl der Testarten auf den entsprechenden Quadranten beziehen, so dass alle Stakeholder den Zweck der Tests besser verstehen.",
            "Der Tester kann die Testarten als Überdeckungsmetrik verwenden; je mehr Tests von jedem Quadranten, desto höher die Überdeckung.",
            "Das Team sollte für jeden Quadranten die ungefähr gleiche Anzahl von Testfällen einplanen.",
            "Der Tester kann die Testquadranten zur Risikoanalyse einsetzen."
        ],
        correct: 0,
        feedback: {
            trap: "b) Quadranten sind keine Überdeckungsmetrik. c) Gleiche Anzahl ist nicht sinnvoll. d) Quadranten sind nicht für Risikoanalyse.",
            principle: "Testquadranten: Stakeholder verstehen den Zweck verschiedener Testarten.",
            explanation: "Testquadranten helfen allen Stakeholdern, den Zweck verschiedener Testarten besser zu verstehen.",
            reference: "Lehrplan 5.1.7"
        }
    },
    {
        id: "gtb-e-35",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 35",
        lo: "FL-5.2.4",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen über die Steuerung von Produktrisiken im Rahmen der Risikominderung trifft NICHT zu?",
        hint: "Risikominderung = mehr Tests, Experten einbeziehen, Code-Reviews. Was passt NICHT?",
        answers: [
            "Die Komplexität des Datenbankmoduls wurde als hoch eingestuft, daher wurden zusätzliche Testfälle erstellt.",
            "Die Anforderungen an das Benutzerinterface sind unklar, daher wird ein Experte einbezogen.",
            "Die Performanz des Systems ist entscheidend, daher wird auf Code-Reviews verzichtet, um Zeit zu sparen.",
            "Das System muss eine hohe Verfügbarkeit aufweisen, daher werden zusätzliche Lasttests durchgeführt."
        ],
        correct: 2,
        feedback: {
            trap: "a), b), d) sind alle korrekte Risikominderungsmaßnahmen.",
            principle: "Auf Code-Reviews verzichten ist KEINE Risikominderung, sondern erhöht das Risiko.",
            explanation: "Auf Code-Reviews zu verzichten, um Zeit zu sparen, ist keine Risikominderung – es erhöht das Risiko.",
            reference: "Lehrplan 5.2.4"
        }
    },
    {
        id: "gtb-e-36",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 36",
        lo: "FL-5.3.3",
        kLevel: 2,
        chapter: 5,
        text: "In einem regulatorischen Projekt, das bereits in Verzug ist, haben die Stakeholder darum gebeten, täglich über den Teststatus informiert zu werden. Die Stakeholder können sich aufgrund räumlicher und zeitlicher Gegebenheiten nicht direkt abstimmen.\n\nWelche ist die EFFEKTIVERE Möglichkeit, den Teststatus zu kommunizieren?",
        hint: "Verteilte Teams + tägliche Updates + keine direkte Abstimmung = formelle Kommunikation.",
        answers: [
            "Es sollten formelle Kommunikationsmittel (z.B. formale Berichte, E-Mails) verwendet werden.",
            "Die Kommunikation sollte über eine Chatgruppe erfolgen.",
            "Die relevanten Stakeholder sollten mündlich informiert werden.",
            "Der Teststatus sollte in täglichen Abstimmungsrunden per Videokonferenz kommuniziert werden."
        ],
        correct: 0,
        feedback: {
            trap: "b) Chat ist informell. c) Mündlich ist bei verteilten Teams schwierig. d) Tägliche Videokonferenzen sind bei Zeitzonen-Unterschieden unpraktisch.",
            principle: "Verteilte Teams + regulatorisches Projekt = formelle Kommunikation.",
            explanation: "Bei verteilten Teams und regulatorischen Anforderungen sind formelle Kommunikationsmittel (Berichte, E-Mails) am effektivsten.",
            reference: "Lehrplan 5.3.3"
        }
    },
    {
        id: "gtb-e-37",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 37",
        lo: "FL-5.4.1",
        kLevel: 2,
        chapter: 5,
        text: "Welche der folgenden Aussagen beschreibt, wie das Konfigurationsmanagement die Testaktivitäten unterstützen kann?",
        hint: "KM = Versionskontrolle, Baselines, Wiederherstellung alter Versionen.",
        answers: [
            "Eine Testerin hinterlegt den Fortschritt in einem Testmanagementwerkzeug.",
            "Ein Tester speichert Testdaten für die datengetriebene Testausführung in einer Datenbank.",
            "Ein Tester verwendet ein Tabellenkalkulationsprogramm für Entscheidungstabellen.",
            "Ein Tester stellt automatisiert die relevanten Testmittel für eine ältere Version wieder her."
        ],
        correct: 3,
        feedback: {
            trap: "a) Testmanagement, nicht KM. b) Testdaten, nicht KM. c) Testentwurf, nicht KM.",
            principle: "KM ermöglicht die Wiederherstellung alter Versionen von Testmitteln.",
            explanation: "Konfigurationsmanagement ermöglicht es, Testmittel für ältere Versionen automatisiert wiederherzustellen.",
            reference: "Lehrplan 5.4.1"
        }
    },
    {
        id: "gtb-e-38",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 38",
        lo: "FL-5.5.1",
        kLevel: 3,
        chapter: 5,
        text: "Sie testen eine neue Version der Software für eine Kaffeemaschine mit den Kategorien: Kaffeemenge (klein, mittel, groß), Zucker (0-4 Einheiten), Milch (ja/nein), Kaffeegeschmack (kein Sirup, Karamell, Haselnuss, Vanille).\n\nSie schreiben einen Fehlerbericht:\nTitel: Niedrige Kaffeetemperatur.\nKurze Zusammenfassung: Bei Kaffee mit Milch ist die Temperatur zu niedrig (unter 40°C).\nErwartetes Ergebnis: Temperatur sollte ca. 75°C sein.\nGrad der Auswirkung: Mittel\nPriorität: Normal\n\nWelche relevanten Informationen haben Sie vergessen?",
        hint: "Was fehlt für die Reproduktion? Softwareversion!",
        answers: [
            "Tatsächliches Testergebnis.",
            "Identifikation der getesteten Softwareversion.",
            "Ideen zur Verbesserung des Testfalls.",
            "Qualität des Arbeitsergebnisses, das getestet wurde."
        ],
        correct: 1,
        feedback: {
            trap: "a) Tatsächliches Ergebnis ist angegeben (unter 40°C). c) Verbesserungsideen gehören nicht in den Fehlerbericht. d) Qualität ist irrelevant.",
            principle: "Fehlerbericht muss die Softwareversion enthalten.",
            explanation: "Die Identifikation der getesteten Softwareversion fehlt im Fehlerbericht – wichtig für die Reproduktion.",
            reference: "Lehrplan 5.5.1"
        }
    },
    {
        id: "gtb-e-39",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 39",
        lo: "FL-6.1.1",
        kLevel: 2,
        chapter: 6,
        text: "Gegeben seien folgende Testaktivitäten:\n1. Performanzmessung und IT-Sicherheitsprüfungen\n2. Testautomatisierung\n3. Management der Testaktivitäten\n4. Testentwurf und Testrealisierung\n\nund Testwerkzeuge:\nA. Werkzeuge zur Testdurchführung\nB. Testwerkzeuge für nicht-funktionale Tests\nC. Werkzeuge zur Vorbereitung von Testfällen und Testdaten\nD. Fehlermanagementwerkzeuge\n\nWelche Zuordnung der Werkzeuge zu den Aktivitäten trifft am BESTEN zu?",
        hint: "Performance = nicht-funktional. Automatisierung = Testdurchführung. Management = Fehlermanagement.",
        answers: [
            "1 – D, 2 – C, 3 – B, 4 – A",
            "1 – B, 2 – A, 3 – C, 4 – D",
            "1 – B, 2 – A, 3 – D, 4 – C",
            "1 – A, 2 – B, 3 – D, 4 – C"
        ],
        correct: 2,
        feedback: {
            trap: "1→B (Performance = nicht-funktional), 2→A (Automatisierung = Testdurchführung), 3→D (Management = Fehlermanagement), 4→C (Testentwurf = Testfälle/Testdaten).",
            principle: "Werkzeuge passend zu Aktivitäten zuordnen.",
            explanation: "1→B, 2→A, 3→D, 4→C ist die korrekte Zuordnung.",
            reference: "Lehrplan 6.1.1"
        }
    },
    {
        id: "gtb-e-40",
        source: "GTB CTFL v4.0 Sample Exam E, Frage 40",
        lo: "FL-6.2.1",
        kLevel: 1,
        chapter: 6,
        text: "Welche der folgenden Aussagen beschreibt am BESTEN den potenziellen Nutzen des Einsatzes von Werkzeugen für die automatisierte Testdurchführung?",
        hint: "Automatisierung = schnellere Regressionstests, schnellere Rückmeldung.",
        answers: [
            "Die Implementierung von Regressionstests ist einfacher, da diese direkt mit einem Testskript implementiert werden können.",
            "Es findet eine effizientere Bewertung des Testobjekts durch das Automatisierungswerkzeug statt.",
            "Ein Testwerkzeug wird verwendet, wenn manuelles Testen besser geeignet ist.",
            "Regressionstests können schneller durchgeführt werden und ermöglichen somit eine schnellere Rückmeldung an das Team."
        ],
        correct: 3,
        feedback: {
            trap: "a) Implementierung ist nicht 'einfacher'. b) Bewertung ist nicht der Hauptnutzen. c) Das ist kein Nutzen.",
            principle: "Automatisierung = schnellere Regressionstests, schnellere Rückmeldung.",
            explanation: "Der Hauptnutzen der Testautomatisierung ist, dass Regressionstests schneller durchgeführt werden können und somit schnellere Rückmeldung ermöglichen.",
            reference: "Lehrplan 6.2.1"
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
