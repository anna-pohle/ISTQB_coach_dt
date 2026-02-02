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
            trap: "Die anderen Optionen suggerieren absolute Aussagen (keine Fehler, alle Kombinationen), was laut Grundsatz 1 und 2 unmöglich ist.",
            principle: "Testen kann nicht beweisen, dass keine Fehler vorhanden sind – nur vorhandene Fehler aufzeigen.",
            explanation: "Durch das Testen werden Fehler aufgedeckt, was das Risiko verringert und gleichzeitig mehr Vertrauen in die Qualität des Testobjekts schafft.",
            reference: "Lehrplan 1.1.1, Aufzählungspunkt 4 + 8"
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
            trap: "Option d) verwechselt 'Fehlervermeidung' mit 'Fehlersuche' – Testen findet, vermeidet aber nicht aktiv.",
            principle: "Tester FINDEN Fehler, Entwickler BEHEBEN sie.",
            explanation: "Unter Debugging versteht man das Auffinden, Analysieren und Beseitigen der Ursachen von Fehlern – typischerweise NACH dem dynamischen Test.",
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
            trap: "Der Trugschluss 'Keine Fehler' bezieht sich auf den Irrtum, dass Fehlerfreiheit = Erfolg bedeutet – das ist hier nicht das Problem.",
            principle: "Grundsatz 5: Tests nutzen sich ab (Pesticide Paradox).",
            explanation: "Wenn dieselben Tests immer wieder wiederholt werden, finden sie irgendwann keine neuen Fehler mehr. Um neue Fehler zu finden, müssen Tests modifiziert oder erweitert werden.",
            reference: "Lehrplan 1.3, Punkt 5"
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
            trap: "Option a) gehört zur Testplanung, Option c) zum Testentwurf, Option d) zur Testdurchführung.",
            principle: "Testanalyse = WAS soll getestet werden? (Testbedingungen definieren)",
            explanation: "Die Definition von Testbedingungen (z.B. 'Zahlungen aufteilen') ist ein Teil der Testanalyse.",
            reference: "Lehrplan 1.4.1, Anteil Testanalyse"
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
            trap: "Option a) verspricht zu viel – Verfolgbarkeit ermöglicht keine AUTOMATISIERUNG. Option d) bezieht sich auf Code-Analyse, nicht Verfolgbarkeit.",
            principle: "Verfolgbarkeit verbindet Anforderungen mit Tests und zeigt Überdeckungsgrade.",
            explanation: "Wenn Testfälle mit Anforderungen verknüpft sind, kann festgestellt werden, ob Anforderungen durch Tests überdeckt werden.",
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
        hint: "Ordne: Geschäftlich→Abnahme, Kommunikation→Integration, Isoliert→Komponente, User-Story→System.",
        answers: [
            "1D, 2B, 3A, 4C",
            "1D, 2B, 3C, 4A",
            "1B, 2A, 3D, 4C",
            "1C, 2A, 3B, 4D"
        ],
        correct: 0,
        feedback: {
            trap: "Verwechslung der Teststufen: Geschäftsanforderungen → Abnahmetest (D), nicht Systemtest (C).",
            principle: "Komponente→A, Integration→B, System→C, Abnahme→D. Geschäftlich→D, Technisch→A/B.",
            explanation: "Geschäftsanforderungen (1) → Abnahmetest (D), Kommunikation (2) → Integration (B), Isolierte Komponente (3) → Komponententest (A), User-Story (4) → Systemtest (C).",
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
            trap: "Option a) beschreibt Retrospektiven. Früh+häufig muss nicht sein, wenn man nur zukünftige Projekte verbessern will.",
            principle: "Frühes Feedback = Frühe Problemerkennung = Weniger Missverständnisse.",
            explanation: "Frühes und häufiges Feedback ermöglicht die frühzeitige Aufdeckung potenzieller Qualitätsprobleme wie missverstandener Anforderungen.",
            reference: "Lehrplan 3.2.1, 1. Absatz"
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
            trap: "Bei Inspektionen leitet der Autor NICHT das Meeting. Technische Reviews fokussieren auf technische Korrektheit, nicht Schulung.",
            principle: "Walkthrough = Autor leitet + Kommunikation/Schulung als Zweck.",
            explanation: "Walkthroughs werden vom Autor geleitet und dienen der Kommunikation und Schulung der Gutachter.",
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
            trap: "Die ersten drei Optionen sind alle Erfolgsfaktoren. Management-Beteiligung bei Befunden kann zu politischem Druck führen.",
            principle: "Reviews sollten fachlich bleiben – Management-Beteiligung bei Befunden ist kontraproduktiv.",
            explanation: "Management sollte Reviews unterstützen, aber nicht persönlich bei der Kommunikation von Befunden mitwirken.",
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
        hint: "Wie viele Äquivalenzklassen gibt es? Ungültig niedrig, gültig, ungültig hoch = 3 Klassen. Minimal = 1 Wert pro Klasse.",
        answers: [
            "0,0; 20,0; 60,0",
            "0,0; 0,1; 50,0",
            "0,0; 0,1; 50,0; 70,0",
            "-0,1; 0,0; 0,1; 49,9; 50,0; 50,1"
        ],
        correct: 0,
        feedback: {
            trap: "Option b) deckt nur 2 Klassen ab (zu niedrig, gültig). Es fehlt die Klasse 'zu hoch'.",
            principle: "Äquivalenzklassen: ungültig niedrig (<0,1) | gültig (0,1-50,0) | ungültig hoch (>50,0). Je 1 Wert pro Klasse.",
            explanation: "Es gibt 3 Äquivalenzklassen: <0,1 (ungültig), 0,1-50,0 (gültig), >50,0 (ungültig). Option a) deckt alle mit minimalem Set ab: 0,0 (ungültig niedrig), 20,0 (gültig), 60,0 (ungültig hoch).",
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
        hint: "2-Wert-GWA: Pro Grenze nur 2 Werte (Grenzwert + direkter ungültiger Nachbar). Also: 2 Grenzen × 2 Werte = 4 Werte total.",
        answers: [
            "0,3; 24,9; 25,2",
            "0,4; 0,5; 0,6; 24,9; 25,0; 25,1",
            "0,4; 0,5; 25,0; 25,1",
            "0,5; 0,6; 24,9; 25,0"
        ],
        correct: 2,
        feedback: {
            trap: "Option b) verwendet zu viele Werte – 2-Wert-Analyse braucht nur 2 Werte pro Grenze (!). Option d) fehlt die ungültigen Werte.",
            principle: "2-Wert-GWA: Je Grenze 2 Werte (Grenzwert + nächster ungültiger Nachbar).",
            explanation: "Untere Grenze: 0,4 (ungültig) + 0,5 (gültig). Obere Grenze: 25,0 (gültig) + 25,1 (ungültig). → 4 Werte total.",
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
            trap: "Option a) ist undurchführbar – wenn kein Ziel vereinbart ist, kann es nicht erreicht werden. Option b) ist fachlich falsch – nicht erreichtes Ziel sollte keine Prämie bringen.",
            principle: "Entscheidungstabellen müssen alle logisch möglichen Kombinationen abdecken.",
            explanation: "Fehlender Fall: Mitarbeiter >1 Jahr, Ziel vereinbart, Ziel NICHT erreicht → keine Prämie. Das ist eine realistische Situation.",
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
            trap: "Option a) sagt 'alle Übergänge' – aber ungültige Übergänge werden nicht getestet. Option d) verwechselt Zustandsüberdeckung mit Übergangsüberdeckung.",
            principle: "0-Switch-Überdeckung = Alle GÜLTIGEN Übergänge mindestens einmal.",
            explanation: "Die 5 Testfälle decken alle 5 gültigen Übergänge ab → 100% 0-Switch-Überdeckung.",
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
            trap: "Option a) misst Testfälle, nicht Anweisungen. Option d) ist Binär, nicht prozentual.",
            principle: "Anweisungsüberdeckung = Prozent der ausgeführten Code-Zeilen.",
            explanation: "Anweisungsüberdeckung gibt den prozentualen Anteil der ausgeführten Anweisungen im Code an.",
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
            trap: "Die ersten drei Aussagen sind korrekt für White-Box. Die vierte ist falsch – fehlende Anforderungen findet man durch Anforderungsanalyse, nicht White-Box.",
            principle: "White-Box prüft CODE-Struktur, nicht ANFORDERUNGEN.",
            explanation: "White-Box-Tests prüfen die Codestruktur. Nicht implementierte Anforderungen sind im Code nicht sichtbar – dafür braucht man Anforderungs-Traceability.",
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
            trap: "Option b) erfordert eigene Entwicklererfahrung – das ist nicht notwendig. Option c) beschreibt eher Benutzbarkeitstest.",
            principle: "Error Guessing = Erfahrung mit TYPISCHEN Fehlern nutzen, nicht eigene Fehler.",
            explanation: "Intuitive Testfallermittlung (Error Guessing) nutzt Wissen über typische Fehler und Erfahrung mit vergangenen Fehlerzuständen.",
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
            trap: "Checklistenbasiert braucht eine Checkliste. Anweisungstest braucht CODE-Zugang. Intuitive Testfallermittlung braucht weniger Domänenwissen.",
            principle: "Exploratives Testen = Keine formale Testbasis + Fachwissen nutzen + Lernen während des Testens.",
            explanation: "Bei fehlender Spezifikation und vorhandenem Fachwissen ist exploratives Testen ideal – man lernt die Anwendung beim Testen.",
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
            trap: "Nicht einfach den Durchschnitt nehmen! Die wahrscheinlichste Schätzung wird 4-fach gewichtet.",
            principle: "Formel: E = (O + 4×W + P) ÷ 6",
            explanation: "E = (2 + 4×11 + 14) ÷ 6 = (2 + 44 + 14) ÷ 6 = 60 ÷ 6 = 10 Personenstunden",
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
        hint: "Usability = geschäftlich (Benutzer), kritisierend. Komponente = technisch, unterstützend. Performance/Zuverlässigkeit = technisch, kritisierend.",
        answers: [
            "1C, 2A, 3B, 4D",
            "1D, 2A, 3C, 4B",
            "1C, 2B, 3D, 4A",
            "1D, 2B, 3C, 4A"
        ],
        correct: 0,
        feedback: {
            trap: "Gebrauchstauglichkeit ist geschäftlich, nicht technisch. Zuverlässigkeit ist technisch, nicht geschäftlich.",
            principle: "Q1=Komponente, Q2=Funktion, Q3=Usability, Q4=Performance/Zuverlässigkeit",
            explanation: "Usability (1)→Q3 (geschäftlich, kritisierend), Komponente (2)→Q1, Funktion (3)→Q2, Zuverlässigkeit (4)→Q4.",
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
            trap: "Risikoakzeptanz bedeutet KEINE Maßnahmen ergreifen. Risikotransfer bedeutet das Risiko an Dritte übertragen (z.B. Versicherung).",
            principle: "Tests sind eine Form der RISIKOMINDERUNG.",
            explanation: "Performanztests und Alpha/Beta-Tests sind aktive Maßnahmen zur Risikominderung – sie reduzieren die Wahrscheinlichkeit, dass das Problem auftritt.",
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
            trap: "Option a) verwechselt Abschluss- mit Fortschrittsberichten. Regelmäßig = Fortschritt, nicht Abschluss.",
            principle: "Fortschrittsbericht = regelmäßig WÄHREND des Testens | Abschlussbericht = AM ENDE einer Stufe.",
            explanation: "Testabschlussberichte werden erstellt, wenn eine Teststufe abgeschlossen ist, und bauen auf den Fortschrittsberichten auf.",
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
            trap: "Testdatentools sind nicht für Überwachung (a) oder Abschluss (d). Testanalyse (b) braucht keine Daten.",
            principle: "Testdaten werden bei TESTENTWURF definiert und bei TESTREALISIERUNG erstellt.",
            explanation: "Testdaten-Werkzeuge unterstützen den Testentwurf (welche Daten brauchen wir?) und die Testrealisierung (Daten erstellen).",
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
            trap: "Option d) ist eher ein Vorteil (mehr Zeit für wertvolle manuelle Tests). Option a) betrifft Produktion, nicht Automatisierung.",
            principle: "Häufigstes Automatisierungs-Risiko: Überschätzte Erwartungen.",
            explanation: "Unrealistische Erwartungen an die Funktionalität eines Werkzeugs sind ein häufiges Risiko – Tools können nicht alles lösen.",
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
            trap: "Option a) beschreibt Validierung (nicht Testziel), Option c) verwechselt 'Fehler initiieren' mit 'Fehlerwirkungen provozieren'.",
            principle: "Testen provoziert Fehlerwirkungen, um Fehlerzustände zu FINDEN – nicht zu initiieren.",
            explanation: "Ein typisches Testziel ist, Fehlerwirkungen zu provozieren und dadurch Fehlerzustände im Code zu identifizieren.",
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
            trap: "Option a) verwechselt die Rollen – Testen identifiziert nicht die Ursache, sondern findet die Fehlerwirkung.",
            principle: "Testen FINDET Fehler, Debugging BEHEBT sie.",
            explanation: "Beim Testen werden Fehlerwirkungen gefunden. Debugging umfasst das Analysieren, Lokalisieren und Beheben der Fehlerzustände.",
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
            trap: "Option a) beschreibt einen anderen Grundsatz (vollständiges Testen unmöglich). Option c) ist ein unrealistisches Ziel.",
            principle: "Trugschluss 'keine Fehler' = Auch fehlerfreie Software kann unbrauchbar sein, wenn sie Benutzerbedürfnisse nicht erfüllt.",
            explanation: "Endnutzer bei Abnahmetests einzubeziehen stellt sicher, dass das System auch die echten Bedürfnisse erfüllt – nicht nur technisch fehlerfrei ist.",
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
        hint: "Ordne: Analyse→Bedingungen, Entwurf→Überdeckung, Realisierung→Ausführungsplan, Abschluss→Änderungsanforderungen.",
        answers: [
            "1B, 2D, 3C, 4A",
            "1B, 2D, 3A, 4C",
            "1D, 2C, 3A, 4B",
            "1D, 2C, 3B, 4A"
        ],
        correct: 0,
        feedback: {
            trap: "Testüberdeckungen entstehen beim Testentwurf (B), nicht beim Testabschluss (D).",
            principle: "Testanalyse→Testbedingungen | Testentwurf→Überdeckung | Testrealisierung→Ausführungsplan | Testabschluss→Änderungsanforderungen",
            explanation: "1. Testüberdeckungen → Testentwurf (B), 2. Änderungsanforderungen → Testabschluss (D), 3. Testausführungsplan → Testrealisierung (C), 4. Priorisierte Testbedingungen → Testanalyse (A).",
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
            trap: "Ablenkungen verwechseln Tester- und Testmanager-Aufgaben oder drehen die Rollen um.",
            principle: "Agile Teams: Testmanagement teils im Team, teils extern (für teamübergreifende Aufgaben).",
            explanation: "In agilen Teams führt das Team selbst einige Testmanagementaufgaben durch. Teamübergreifende Aufgaben werden von einem externen Testmanager koordiniert.",
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
            trap: "Option c) ist zu extrem – unabhängig heißt nicht 'außerhalb der Organisation'.",
            principle: "Unabhängigkeit bringt andere Perspektiven, kann aber zu Konflikten führen.",
            explanation: "Unabhängige Tester haben andere Perspektiven und finden andere Fehler, aber ihre Unabhängigkeit kann zu Spannungen mit Entwicklern führen.",
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
            trap: "Option a) beschreibt das V-Modell, gilt aber nicht für alle SDLCs.",
            principle: "Gute Praxis: Zu JEDER Entwicklungsaktivität gibt es eine Testaktivität.",
            explanation: "Für jede Softwareentwicklungsaktivität sollte es eine entsprechende Testaktivität geben – das gilt für alle SDLCs.",
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
            trap: "Shift-Left hat nichts mit Automatisierung zu tun – es geht um FRÜHERE Testaktivitäten.",
            principle: "Shift-Left = Testaktivitäten FRÜHER im SDLC durchführen.",
            explanation: "Shift-Left bedeutet, Testaktivitäten früher durchzuführen, um Fehler zu finden, bevor sie teuer zu beheben werden.",
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
            trap: "Retrospektiven sind für das TEAM, nicht für Endanwender.",
            principle: "Retrospektiven verbessern Teamprozesse – Endanwender sind nicht Zielgruppe.",
            explanation: "Retrospektiven fokussieren auf Team-Verbesserungen. Endanwender-Verständnis zu verbessern ist kein typisches Retrospektiv-Ergebnis.",
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
            trap: "Komponententests werden von ENTWICKLERN durchgeführt, aber fokussieren auf Verifikation, nicht Validierung.",
            principle: "Abnahmetest = Validierung durch BENUTZER/STAKEHOLDER, nicht Tester.",
            explanation: "Abnahmetests validieren, ob das System die Geschäftsanforderungen erfüllt. Sie werden typischerweise von Benutzern/Stakeholdern durchgeführt.",
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
            trap: "Nur Fehlernachtests reicht nicht – Regressionstests prüfen, ob andere Funktionen noch funktionieren.",
            principle: "Nach Fehlerbehebung: Erst Fehlernachtest (Fehler behoben?), dann Regressionstest (nichts kaputt gemacht?).",
            explanation: "Erst wird geprüft, ob der Fehler behoben ist (Fehlernachtest), dann ob keine neuen Probleme entstanden sind (Regressionstest).",
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
            trap: "Antwortzeit (b) und Speicherverbrauch (e) erfordern AUSFÜHRUNG des Programms – also dynamische Tests.",
            principle: "Statische Tests finden Inkonsistenzen und ungenutzte Variablen OHNE Ausführung.",
            explanation: "Inkonsistenzen in Dokumenten (a) und ungenutzte Variablen (d) werden durch statische Analyse/Reviews gefunden, ohne das Programm auszuführen.",
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
            trap: "Option c) ist kein Vorteil – ständige Änderungen sind problematisch, nicht vorteilhaft.",
            principle: "Frühes Feedback = Änderungen FRÜHER verstehen = Weniger Nacharbeit.",
            explanation: "Durch frühes Stakeholder-Feedback werden Anforderungsänderungen früher erkannt und können rechtzeitig umgesetzt werden.",
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
            trap: "Walkthrough wird vom AUTOR geleitet (A), Inspektion sammelt METRIKEN (C).",
            principle: "Technisch=Konsens(D), Informell=ohne Doku(B), Inspektion=Metriken(C), Walkthrough=Autor leitet(A).",
            explanation: "1. Technisches Review→D (Konsens), 2. Informelles Review→B (ohne Doku), 3. Inspektion→C (Metriken), 4. Walkthrough→A (Autor leitet).",
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
            trap: "Management-Teilnahme (a) kann Reviews politisch machen. Gutachter bewerten (c) ist kontraproduktiv.",
            principle: "Große Dokumente aufteilen = Fokussierte Reviews = Bessere Ergebnisse.",
            explanation: "Reviews sind effektiver, wenn große Arbeitsprodukte in überschaubare Teile aufgeteilt werden.",
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
            trap: "Beide können auf allen Teststufen (b) und in allen SDLCs (d) eingesetzt werden.",
            principle: "Black-Box = basiert auf SPEZIFIKATION | Erfahrungsbasiert = basiert auf ERFAHRUNG.",
            explanation: "Black-Box-Verfahren nutzen die Spezifikation als Testbasis, erfahrungsbasierte Verfahren nutzen das Wissen und die Erfahrung der Tester.",
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
        hint: "ÄK: zu kurz | 4 Ziffern alle gleich (ungültig) | 4 Ziffern mit ≥2 verschiedenen (gültig) | zu lang. Welche deckt alle?",
        answers: [
            "112, 1111, 1234, 123456",
            "1, 123, 1111, 1234",
            "12, 112, 1112, 11112",
            "1, 111, 1111, 11111"
        ],
        correct: 1,
        feedback: {
            trap: "Option d) deckt nur ungültige Längen und identische Ziffern ab – es fehlt ein gültiger Fall mit unterschiedlichen Ziffern.",
            principle: "Äquivalenzklassen: zu kurz | 4 Ziffern identisch | 4 Ziffern unterschiedlich | zu lang.",
            explanation: "Option b) deckt alle Klassen ab: 1 (zu kurz), 123 (zu kurz), 1111 (4 identische=ungültig), 1234 (4 mit ≥2 unterschiedlichen=gültig).",
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
            trap: "Grenzwerte sind 100/101 und 199/200 – nicht 99/100 oder 200/201.",
            principle: "2-Wert-GWA: Grenze + direkter Nachbar. Hier: 100↔101 und 199↔200.",
            explanation: "Die Grenzwerte für 'Wert OK' (101-199) sind: 101, 199 (gültig) und 100, 200 (ungültig). Option d) testet genau diese.",
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
            trap: "Widersprüchliche Regeln = gleiche Bedingungen, unterschiedliche Aktionen.",
            principle: "Entscheidungstabellen: Gleiche Eingabekombination darf nur EINE Aktion haben.",
            explanation: "Die Kombination C2=T, C3=T führt bei C1=T zu 'Führerschein ausstellen' (R1), bei C1=F aber auch – das zeigt einen Widerspruch in der Tabelle.",
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
            trap: "Nicht die Anzahl der Zustände zählen, sondern die Übergänge!",
            principle: "100% Übergangsüberdeckung = Jeder Pfeil im Diagramm mindestens einmal.",
            explanation: "Mit 3 Testfällen können alle Übergänge im Diagramm abgedeckt werden, wenn die Pfade geschickt gewählt werden.",
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
            trap: "Nicht die Anzahl der Knoten zählen – Überdeckungselemente sind hier die ZWEIGE (Kanten)!",
            principle: "Bei Zweigtests: Überdeckungselemente = Zweige = ausgehende Kanten von Entscheidungen (Rauten).",
            explanation: "Im Diagramm gibt es 2 Entscheidungsknoten (Rauten), jeder hat 2 Ausgänge (true/false). Also: 2 × 2 = 4 Überdeckungselemente (Zweige).",
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
            trap: "Option c) ist falsch – Zweigtests sind White-Box und beinhalten KEINE Black-Box-Verfahren.",
            principle: "White-Box-Metriken zeigen, wie viel CODE durch Black-Box-Tests abgedeckt wird.",
            explanation: "White-Box-Überdeckungsmessungen zeigen Testern, welche Teile des Codes durch ihre Black-Box-Tests ausgeführt wurden.",
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
            trap: "Die Liste enthält typische FEHLERTYPEN, nicht allgemeine Checklistenpunkte.",
            principle: "Fehlerangriff (Error Guessing) = Liste von typischen Fehlern systematisch prüfen.",
            explanation: "Diese Liste enthält typische Fehlertypen (Error Types) – das ist charakteristisch für Fehlerangriff/Error Guessing.",
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
            trap: "Option a) und c) beschreiben nicht, wie MEHR Überdeckung entsteht.",
            principle: "Checklistenbasiert: Verschiedene Tester = verschiedene Interpretationen = breitere Überdeckung.",
            explanation: "Da verschiedene Tester dieselben Checklistenpunkte unterschiedlich interpretieren, werden insgesamt mehr Varianten getestet.",
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
            trap: "Option a) ist regelbasiert, Option c) ist Code, Option d) ist standardbasiert.",
            principle: "Szenarioorientiert = Beschreibt einen ABLAUF/Workflow (Wenn...dann...).",
            explanation: "Option b) beschreibt ein Szenario: Kunde legt Artikel in Warenkorb → geht zur Kasse → wird aufgefordert, sich anzumelden.",
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
            trap: "AC3 sagt: Spezielle Benutzer haben ALLE Rechte regulärer Benutzer. Also Etagen 1-3 für spezielle Benutzer testen!",
            principle: "ATDD: Testfall muss das spezifische Akzeptanzkriterium direkt prüfen.",
            explanation: "AC3 prüft, ob spezielle Benutzer die Rechte regulärer Benutzer haben. Also: Spezieller Benutzer → Etagen 1, 2, 3.",
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
            trap: "Testkonzepte definieren WAS getestet wird, nicht die konkreten TESTDATEN.",
            principle: "Testkonzept = Strategie, Kriterien, Berichte | NICHT = konkrete Testdaten.",
            explanation: "Konkrete Testdaten und erwartete Ergebnisse gehören nicht ins Testkonzept, sondern in die Testfälle/Testspezifikation.",
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
            trap: "Die Formel vereinfacht sich zu E(n) = A(n-1). Lies den TATSÄCHLICHEN Wert aus Iteration 4 ab.",
            principle: "E(n) = E(n-1) × A(n-1) / E(n-1) = A(n-1). Schätzung = letzter tatsächlicher Wert.",
            explanation: "Die Formel vereinfacht sich zu E(n) = A(n-1). Der tatsächliche Aufwand für Iteration 4 war 8,25 Personentage.",
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
            trap: "Abhängigkeiten müssen VOR Prioritäten berücksichtigt werden!",
            principle: "Testausführungsreihenfolge: 1. Abhängigkeiten erfüllen, 2. Nach Priorität sortieren.",
            explanation: "Unter Berücksichtigung der Abhängigkeiten und Prioritäten ist TC 6 der sechste Testfall.",
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
            trap: "Die Pyramide zeigt SCHICHTEN von Tests, nicht Prioritäten oder Abhängigkeiten.",
            principle: "Testpyramide = Viele kleine Tests unten (Unit), wenige große oben (E2E).",
            explanation: "Die Testpyramide zeigt die unterschiedliche Granularität von Tests: viele kleine Unit-Tests, wenige große End-to-End-Tests.",
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
            trap: "Testquadranten definieren nicht die Position im SDLC (a) und nicht die Granularität (b).",
            principle: "Testquadranten = Gruppierung nach Geschäftlich/Technisch + Team-unterstützend/Produkt-kritisierend.",
            explanation: "Testquadranten gruppieren Tests nach verschiedenen Kriterien wie Stakeholder-Ausrichtung (geschäftlich/technisch).",
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
            trap: "Ablenkungen: 'Risikoüberwachung' und 'Risikoidentifizierung' sind allgemeines Risikomanagement. 'Überdeckungselemente' gehört zum Testentwurf, nicht zur Risikoanalyse. Die Frage fragt nach GRÜNDLICHKEIT und UMFANG!",
            principle: "Hohes Risiko = Gründlichere Tests | Niedriges Risiko = Weniger gründlich.",
            explanation: "Das Risikoniveau bestimmt, wie gründlich getestet wird: Hohe Risiken erfordern intensivere Tests.",
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
            trap: "Fortschrittsberichte werden nicht im Testentwurf oder bei der Testanalyse erstellt.",
            principle: "Testfortschrittsberichte dienen der ÜBERWACHUNG und STEUERUNG – Teil der Testplanung.",
            explanation: "Testfortschrittsberichte werden bei der Testüberwachung und -steuerung genutzt, die Teil der Testplanung ist.",
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
            trap: "Fehlerstatus ist Teil des FEHLERMANAGEMENTS, nicht des Konfigurationsmanagements.",
            principle: "Konfigurationsmanagement = Versionierung, Änderungsverfolgung | Fehlermanagement = Fehlerstatus.",
            explanation: "Fehlerstatus gehört zum Fehlermanagement, nicht zum Konfigurationsmanagement.",
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
            trap: "Das Testobjekt (c) ist angegeben (WebShop v0.99). Es fehlt aber die TESTUMGEBUNG!",
            principle: "Fehlerbericht muss Testumgebung enthalten – ohne sie ist Reproduktion schwierig.",
            explanation: "Es fehlen die Testumgebungsinformationen (Browser, Betriebssystem, etc.), die für die Reproduktion des Fehlers wichtig sind.",
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
            trap: "Optionen a), b) und d) sind typische Testziele laut Lehrplan.",
            principle: "Testziele beziehen sich auf SOFTWAREQUALITÄT, nicht auf Testumgebung.",
            explanation: "Die Verringerung des Risikos einer unzureichenden Testumgebung ist kein typisches Testziel. Stattdessen wird im Lehrplan das Verringern des Risikos unzureichender SOFTWAREQUALITÄT genannt.",
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
            trap: "Grundursache = Ablenkung | Fehlerwirkung = Akzeptanz ungültiger Werte | Fehlhandlung = Denkfehler",
            principle: "Fehlerzustand = Problem IM CODE selbst.",
            explanation: "Die fehlerhaft programmierte Logik im Code ist ein Fehlerzustand (Defect). Die Grundursache war die Ablenkung, die Fehlerwirkung ist das Akzeptieren ungültiger Werte.",
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
            trap: "a) = Testentwurf | b) = Testrealisierung | c) = Testabschluss",
            principle: "Testanalyse = Analyse der Testbasis auf testbare Merkmale.",
            explanation: "Die Bewertung der Testbasis hinsichtlich Testbarkeit gehört zur Testanalyse. Infrastruktur gehört zum Testentwurf, Testsuiten zur Testrealisierung, Lessons Learned zum Testabschluss.",
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
            trap: "Das Pareto-Prinzip (80/20-Regel) beschreibt genau die Häufung von Fehlern.",
            principle: "Fehlerclusterung = Kleine Anzahl von Komponenten enthält meiste Fehler.",
            explanation: "Der Grundsatz 'Fehlerzustände treten gehäuft auf' besagt, dass eine kleine Anzahl von Komponenten die meisten Fehlerzustände enthält – genau das Pareto-Prinzip.",
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
            trap: "Testwissen hilft beim Finden, Sorgfalt beim Dokumentieren – aber WEITERGABE erfordert Kommunikation.",
            principle: "Kommunikation = Schlüssel für effektive Informationsweitergabe an Stakeholder.",
            explanation: "Kommunikationsfähigkeit ist besonders wichtig für die effektive Weitergabe von Informationen an andere Stakeholder wie Entwickler.",
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
            trap: "Testskript = Anweisungen (B), Test-Charta = Ziel/Agenda (D).",
            principle: "Testsuite=Sammlung(A) | Testfall=erwartete Ergebnisse(C) | Testskript=Anweisungen(B) | Test-Charta=Ziel(D)",
            explanation: "1. Testsuite → A (Menge von Testfällen), 2. Testfall → C (erwartete Ergebnisse), 3. Testskript → B (Anweisungen), 4. Test-Charta → D (Ziel/Agenda).",
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
            trap: "Auswirkungsanalyse liefert KEINE Qualitätsinfo (a), und Restrisiko wird anders analysiert (d).",
            principle: "Verfolgbarkeit = Änderungsauswirkung verstehen + Regressionstests auswählen.",
            explanation: "Verfolgbarkeit hilft am besten bei der Auswirkungsanalyse von Änderungen und der Auswahl geeigneter Testfälle für Regressionstests.",
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
            trap: "Whole-Team ≠ beliebige Aufgaben (a) oder separate Arbeit (c) oder feste Rollen (d).",
            principle: "Whole-Team = Gemeinsame Qualitätsverantwortung im gesamten Team.",
            explanation: "Beim Whole-Team-Ansatz ist jedes Teammitglied für die Qualität verantwortlich. Es geht um gemeinsame Verantwortung, nicht um beliebige oder separate Aufgaben.",
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
            trap: "Statische Tests (b) und Testplanung (c) können IMMER früh erfolgen. Abnahmetests (d) brauchen ein fertiges Produkt.",
            principle: "Sequenziell = Code erst spät verfügbar = Dynamische Tests erst spät möglich.",
            explanation: "In sequenziellen SDLC-Modellen wird ausführbarer Code erst in späteren Phasen erstellt. Daher können dynamische Tests nicht früh durchgeführt werden.",
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
            trap: "Es gibt zu JEDER Entwicklungsaktivität eine Testaktivität (nicht a). Reviews sind wichtig (nicht d).",
            principle: "Gute Praxis: Unterschiedliche Testziele, Testumfänge und Testtiefen pro Teststufe.",
            explanation: "Tester sollten unterschiedliche Testziele für jede Teststufe definieren und passende Testumfänge und Testtiefen festlegen. Das gilt für alle SDLCs.",
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
            trap: "TDD verwendet Testcode, nicht natürliche Sprache. ATDD nutzt Akzeptanzkriterien, aber nicht unbedingt Given/When/Then.",
            principle: "BDD = Gegeben/Wenn/Dann-Format (Gherkin-Syntax).",
            explanation: "BDD (Behavior-Driven Development) verwendet das Gegeben/Wenn/Dann-Format, um das erwartete Verhalten in natürlicher Sprache zu beschreiben.",
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
            trap: "DevOps erhöht den Fokus auf NICHT-funktionale Tests (nicht b). Regressionstests werden NICHT minimiert (c).",
            principle: "DevOps = Schnellere Releases, kürzere Time-to-Market.",
            explanation: "DevOps ermöglicht schnellere Produktfreigaben und kürzere Markteinführungszeiten durch Zusammenarbeit von Entwicklung und Betrieb.",
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
            trap: "Auch wenn es eine Geschäftsanforderung ist (a), wird hier das WIE (Performanz) getestet, nicht das WAS (Funktion).",
            principle: "Performanztest = Nicht-funktionaler Test = Prüft WIE das System funktioniert.",
            explanation: "Das Messen der Bearbeitungszeit ist ein Performanztest – eine Art des nicht-funktionalen Testens, das prüft, wie das System unter bestimmten Bedingungen funktioniert.",
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
            trap: "Option a) macht falsche Annahmen über Fehlernachtests. Option b) vertauscht die Definitionen.",
            principle: "Regression = Keine negativen Seiteneffekte | Fehlernachtest = Fehler wirklich behoben.",
            explanation: "Regressionstests prüfen, dass Änderungen keine negativen Auswirkungen auf unveränderte Bereiche haben. Fehlernachtests prüfen, dass der ursprüngliche Fehler behoben wurde.",
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
            trap: "Testfälle (a), Anforderungen (b) und Dokumentation (d) können alle statisch geprüft werden.",
            principle: "Rechtlich geschützter Code von Drittanbietern darf nicht analysiert werden.",
            explanation: "Ausführbarer Code von Drittanbietern, der rechtlich geschützt ist, darf nicht mit statischen Tests geprüft werden – man hat keinen Zugang zum Quellcode.",
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
            trap: "Fehlerwirkungen (a) und Performanz (b) erfordern AUSFÜHRUNG = dynamischer Test.",
            principle: "Statischer Test = Lücken in Verfolgbarkeit/Überdeckung leichter finden.",
            explanation: "Lücken in der Überdeckung von Anforderungen (z.B. IT-Sicherheit) werden durch statische Tests leichter gefunden als durch dynamische Tests.",
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
            trap: "Technisches Review wird vom MODERATOR geleitet (a). Arbeitsergebnisse werden VOR der Sitzung verteilt (c).",
            principle: "Formales Review = Strukturierter Prozess mit mehreren Aktivitäten.",
            explanation: "Formale Reviews folgen einem strukturierten Prozess mit Aktivitäten wie Planung, Reviewbeginn, individuelles Review, Reviewsitzung, Kommunikation/Analyse, Behebung und Berichterstattung.",
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
            trap: "Überarbeitung = Autor (a). Sitzungsleitung = Moderator (c). Aufzeichnung = Protokollant (d).",
            principle: "Management entscheidet, WAS geprüft wird (Auswahl und Priorisierung).",
            explanation: "Das Management kann entscheiden, was geprüft werden soll, indem es Arbeitsprodukte basierend auf Anforderungen, Risiken und Geschäftszielen auswählt und priorisiert.",
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
            trap: "Interne Struktur prüfen (a) = White-Box. Erfahrung nutzen (c) = erfahrungsbasiert.",
            principle: "Black-Box = Implementierungsunabhängig = Kein Quellcode-Zugang nötig.",
            explanation: "Black-Box-Testverfahren können unabhängig von der Implementierung durchgeführt werden – der Tester braucht keine Kenntnis des Quellcodes.",
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
            trap: "Die ÄKs sind: 0-1000, 1001-2000, 2001-4000, 4001-6000, >6000. Zähle, wie viele verschiedene ÄKs jede Option abdeckt!",
            principle: "Höchste ÄK-Überdeckung = Werte aus möglichst vielen verschiedenen Klassen.",
            explanation: "Option d) deckt 4 verschiedene ÄKs ab: 666/999 (ÄK1), 2222 (ÄK3), 5555 (ÄK4), 6666 (ÄK5) = 80% Überdeckung. Die anderen Optionen decken nur 3 ÄKs ab.",
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
            trap: "2-Wert-GWA hat 10 Grenzwerte (0, 50, 51, 70, 71, 90, 91, 100 + Nachbarn -1, 101). Die Testfälle decken 6 davon ab.",
            principle: "2-Wert-GWA: Grenzwert + direkter Nachbar. Überdeckung = getestete GW / alle GW.",
            explanation: "Bei 10 Überdeckungselementen und 6 getesteten Werten (0, 50, 70, 90, 91, 100) ergibt sich 60% Überdeckung. -1 und 101 fehlen, sowie 51 und 71.",
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
            trap: "Nur MITGLIEDER können ein T-Shirt erhalten. Bei R8 ist es ein Nicht-Mitglied!",
            principle: "Entscheidungstabelle muss die Anforderungen korrekt abbilden.",
            explanation: "R8 ist falsch: Nur Mitglieder können ein T-Shirt erhalten. Ein Nicht-Mitglied (R8) darf kein T-Shirt bekommen, auch nicht bei der 15. Ausleihe.",
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
            trap: "Übergänge 'test' und 'run' können nicht im selben Testfall vorkommen. Nach 'run' gibt es zwei Wege zu OFF.",
            principle: "100% Übergangsüberdeckung = Jeder Pfeil im Diagramm mindestens einmal.",
            explanation: "Mindestens 3 Testfälle sind nötig: z.B. TF1: test→done, TF2: run→error→done, TF3: run→pause→resume→pause→done. So werden alle Übergänge abgedeckt.",
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
            trap: "100% Anweisungsüberdeckung garantiert NICHT 100% Zweigüberdeckung (c). Mehr Testfälle heißt nicht höhere Überdeckung (b).",
            principle: "100% Anweisungsüberdeckung = JEDE Anweisung mindestens einmal ausgeführt.",
            explanation: "Bei 100% Anweisungsüberdeckung wurde jede Anweisung im Code mindestens einmal ausgeführt. Das garantiert aber keine vollständige Zweig- oder Pfadüberdeckung.",
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
            trap: "Ohne Testfall keine Überdeckung (a). Ein Testfall findet nicht alle Fehler (b). 100% Anweisung ≠ 100% Zweig (c).",
            principle: "100% Zweigüberdeckung = Alle Entscheidungsergebnisse (true/false) ausgeführt.",
            explanation: "Bei 100% Zweigüberdeckung werden alle Entscheidungsergebnisse (alle Zweige) ausgeführt. Das schließt 100% Anweisungsüberdeckung ein, aber nicht umgekehrt.",
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
            trap: "Durchgeführte Schritte = Testsitzungsblätter (b). Bewertung = Nachbesprechung (d).",
            principle: "Test-Charta = Anweisung von Testzielen und möglichen Testideen.",
            explanation: "Die Test-Charta legt die Testziele für die Testsitzung fest. Sie ist eine Anweisung von Testzielen und möglichen Testideen, wie getestet werden soll.",
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
            trap: "Hohe Wiederholbarkeit (a) ist NICHT gegeben, da Tester unterschiedliche Wege wählen. Nicht alle Anforderungen werden abgedeckt (c).",
            principle: "Checklistenbasiertes Testen = Flexibel für verschiedene Testarten.",
            explanation: "Checklisten können verschiedene Testarten unterstützen, einschließlich funktionaler und nicht-funktionaler Tests. Das ist ein wichtiger Vorteil.",
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
            trap: "Akzeptanzkriterien werden GEMEINSAM erstellt, nicht nur von Testern!",
            principle: "Kollaborativ = ALLE Stakeholder erstellen User-Storys und Akzeptanzkriterien gemeinsam.",
            explanation: "Akzeptanzkriterien werden GEMEINSAM von allen Stakeholdern erstellt (nicht nur von Testern), um eine gemeinsame Vision zu erhalten.",
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
            trap: "AC3 prüft Rechte von SPEZIELLEN Benutzern, nicht regulären (a, b). Etage 5 ist nicht spezifiziert (c).",
            principle: "ATDD: Testfall muss das spezifische Akzeptanzkriterium direkt prüfen.",
            explanation: "AC3 besagt, dass spezielle Benutzer alle Rechte regulärer Benutzer haben. Der Test muss prüfen, ob ein spezieller Benutzer Zugang zu Etagen 1, 2 und 3 hat.",
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
            trap: "Testumgebung = Hardware/Software. Risikoverzeichnis = Risiken. Kontext = Hintergrund/Zweck.",
            principle: "Testansatz = Teststufen, Metriken und Endekriterien.",
            explanation: "Der Testansatz ist Teil des Testkonzepts und enthält Informationen über Teststufen, zu erhebende Metriken und Endekriterien (wie 100% Zweigüberdeckung).",
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
            trap: "Nicht nur Kunden+Entwickler zählen (a). Kundenschätzung ist nicht allein entscheidend (c). Exakte Gleichheit ist nicht nötig (d).",
            principle: "Planungspoker = Diskussion bei Abweichungen, bis Konsens erreicht ist.",
            explanation: "Bei unterschiedlichen Schätzungen diskutiert das Team die Gründe und führt weitere Runden durch, bis ein Konsens erreicht ist (nicht unbedingt exakt gleiche Werte).",
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
            trap: "Unten sind VIELE Tests (a). Schichtenanzahl kann variieren (c). High-Level-Tests sind LANGSAMER (d).",
            principle: "Testpyramide: Oben weniger granular, unten mehr granular.",
            explanation: "Je höher die Ebene in der Testpyramide, desto geringer ist die Testgranularität und desto weniger Tests werden benötigt.",
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
            trap: "TF1 und TF3 (beide hoch) hängen von TF4 ab. TF6 hängt von TF5 ab, TF5 hängt von TF2 ab.",
            principle: "Erst Abhängigkeiten erfüllen, dann nach Priorität sortieren.",
            explanation: "TF4 muss zuerst (für TF1, TF3). Dann TF3 und TF1 (beide hoch). Dann TF2, TF5, TF6 (Abhängigkeitskette). Plan b) ist optimal.",
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
            trap: "Q1 = Technologie + Team-unterstützend (a). Q3 = Geschäftlich + Produkt-kritisierend (d). Q4 = Technologie + Produkt-kritisierend (c).",
            principle: "Q2 = Geschäftsorientiert + Team-unterstützend = User-Story-Tests, funktionale Tests.",
            explanation: "User-Story-basierte Tests gehören zu Q2 (geschäftsorientiert, Team-unterstützend). Sie helfen dem Team, die Anforderungen zu verstehen und umzusetzen.",
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
            trap: "Sicherheitsstandards (b), Reaktionszeit (c) und Barrierefreiheit (d) sind PRODUKTRISIKEN.",
            principle: "Projektrisiko = Betrifft das PROJEKT (Ressourcen, Zeit, etc.) | Produktrisiko = Betrifft das PRODUKT.",
            explanation: "Das Versetzen von Testern ist ein Projektrisiko (betrifft Ressourcen). Die anderen Optionen sind Produktrisiken (betreffen die Qualität des Produkts).",
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
    // Diese Fragen ergänzen die GTB Sample Exams um bisher nicht abgedeckte Lernziele

    // --- FL-1.2.1: Beitrag des Testens zum Erfolg (K2) ---
    {
        id: "custom-1.2.1-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.2.1",
        kLevel: 2,
        chapter: 1,
        text: "Wie trägt das Testen zum Erfolg eines Softwareprojekts bei?",
        hint: "Testen liefert Informationen, die anderen helfen, Entscheidungen zu treffen. Wer profitiert davon?",
        answers: [
            "Testen ersetzt die Notwendigkeit von Code-Reviews vollständig.",
            "Testen liefert Messgrößen zur Bewertung der Softwarequalität in allen SDLC-Phasen.",
            "Testen garantiert, dass die Software fehlerfrei ausgeliefert wird.",
            "Testen ist nur in der finalen Phase vor dem Release relevant."
        ],
        correct: 1,
        feedback: {
            trap: "Testen ersetzt KEINE anderen QS-Maßnahmen (a). Garantien sind unmöglich (c). Testen ist in ALLEN Phasen relevant (d).",
            principle: "Testen = Informationslieferant für Qualitätsentscheidungen in allen SDLC-Phasen.",
            explanation: "Testen liefert objektive Messgrößen (Metriken, Überdeckung, Fehlerdichte), die Stakeholdern helfen, fundierte Entscheidungen zu treffen.",
            reference: "Lehrplan 1.2.1, Seite 18"
        }
    },
    {
        id: "custom-1.2.1-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.2.1",
        kLevel: 2,
        chapter: 1,
        text: "Welche Aussage beschreibt AM BESTEN, wie Tester indirekt die Interessen der Benutzer vertreten?",
        hint: "Tester haben eine besondere Perspektive: Sie denken wie Benutzer, nicht wie Entwickler.",
        answers: [
            "Tester schreiben die Benutzeranforderungen selbst.",
            "Tester stellen sicher, dass Benutzerbedürfnisse während des gesamten SDLC berücksichtigt werden.",
            "Tester ersetzen die Benutzerabnahme durch ihre eigenen Tests.",
            "Tester kommunizieren ausschließlich mit den Entwicklern."
        ],
        correct: 1,
        feedback: {
            trap: "Tester schreiben keine Anforderungen (a). Abnahme durch echte Benutzer ist wichtig (c). Tester kommunizieren mit allen Stakeholdern (d).",
            principle: "Tester = indirekte Vertreter der Benutzer im Entwicklungsteam.",
            explanation: "Tester denken aus Benutzerperspektive und stellen sicher, dass Benutzerbedürfnisse bei Entwurf und Test berücksichtigt werden.",
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
        text: "Welche Aussage beschreibt den Unterschied zwischen Testen und Qualitätssicherung (QS) korrekt?",
        hint: "QS = Prozess verbessern. Testen = Produkt prüfen. Was ist präventiv, was korrigierend?",
        answers: [
            "Testen ist prozessorientiert und präventiv, QS ist produktorientiert und korrigierend.",
            "Testen ist produktorientiert und korrigierend, QS ist prozessorientiert und präventiv.",
            "Testen und QS sind identisch und können synonym verwendet werden.",
            "Testen fokussiert auf Prozessverbesserung, QS auf Fehlerfindung."
        ],
        correct: 1,
        feedback: {
            trap: "Die Aussagen in (a) und (d) sind vertauscht. Testen und QS sind NICHT identisch (c).",
            principle: "Testen = Produkt prüfen (korrigierend) | QS = Prozess verbessern (präventiv).",
            explanation: "Testen ist eine Form der Qualitätssteuerung (QC), die sich auf das Produkt konzentriert. QS verbessert Prozesse, um Fehler zu verhindern.",
            reference: "Lehrplan 1.2.2, Seite 18-19"
        }
    },
    {
        id: "custom-1.2.2-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.2.2",
        kLevel: 1,
        chapter: 1,
        text: "Was ist der Hauptfokus der Qualitätssicherung (QS)?",
        hint: "QS fragt: 'Wie können wir verhindern, dass Fehler entstehen?' - nicht 'Wo sind die Fehler?'",
        answers: [
            "Das Finden von Fehlerzuständen im Code.",
            "Die Durchführung von Regressionstests.",
            "Die Einhaltung und Verbesserung von Prozessen.",
            "Die Ausführung von dynamischen Tests."
        ],
        correct: 2,
        feedback: {
            trap: "Fehlerfindung (a), Regressionstests (b) und dynamische Tests (d) gehören zum TESTEN, nicht zur QS.",
            principle: "QS = Prozessorientiert und präventiv. Fokus auf Prozesseinhaltung und -verbesserung.",
            explanation: "QS konzentriert sich darauf, dass korrekte Prozesse eingehalten werden, um Fehler von vornherein zu vermeiden.",
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
        text: "Welcher Faktor beeinflusst den Testprozess NICHT typischerweise?",
        hint: "Der Testprozess wird von vielen Faktoren beeinflusst: Stakeholder, Risiken, Domäne... aber nicht alles ist relevant.",
        answers: [
            "Die verwendete Softwareentwicklungspraxis (z.B. agil, Wasserfall).",
            "Die persönlichen Musikvorlieben der Tester.",
            "Die Produktrisiken und Projektrisiken.",
            "Die Art des Testobjekts (z.B. sicherheitskritisch, E-Commerce)."
        ],
        correct: 1,
        feedback: {
            trap: "Die anderen Optionen (SDLC, Risiken, Testobjekt) beeinflussen den Testprozess STARK.",
            principle: "Testprozess wird beeinflusst von: SDLC, Risiken, Domäne, Testobjekt, Stakeholder, Budget, Zeit.",
            explanation: "Der Testprozess muss an den Kontext angepasst werden. Persönliche Vorlieben spielen dabei keine Rolle.",
            reference: "Lehrplan 1.4.2, Seite 23"
        }
    },
    {
        id: "custom-1.4.2-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-1.4.2",
        kLevel: 2,
        chapter: 1,
        text: "Warum muss der Testprozess an den Softwareentwicklungslebenszyklus (SDLC) angepasst werden?",
        hint: "Ein agiles Projekt hat andere Anforderungen als ein Wasserfall-Projekt. Was ändert sich für das Testen?",
        answers: [
            "Weil der Testprozess unabhängig vom SDLC immer gleich ist.",
            "Weil unterschiedliche SDLCs unterschiedliche Teststrategien, Testzeitpunkte und Dokumentationsanforderungen haben.",
            "Weil nur in agilen Projekten getestet wird.",
            "Weil der SDLC keinen Einfluss auf die Testaktivitäten hat."
        ],
        correct: 1,
        feedback: {
            trap: "Der Testprozess ist NICHT immer gleich (a, d). Es wird in ALLEN SDLCs getestet, nicht nur agil (c).",
            principle: "Testprozess muss an SDLC angepasst werden: Timing, Strategie, Dokumentation variieren.",
            explanation: "In agilen Projekten gibt es z.B. mehr iterative Tests und weniger formale Dokumentation als im V-Modell.",
            reference: "Lehrplan 1.4.2, Seite 23"
        }
    },

    // --- FL-5.1.2: Inhalt eines Testkonzepts (K1) ---
    {
        id: "custom-5.1.2-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.2",
        kLevel: 1,
        chapter: 5,
        text: "Was gehört typischerweise NICHT in ein Testkonzept (Testplan)?",
        hint: "Ein Testkonzept beschreibt WAS, WIE und WANN getestet wird. Es enthält keine technischen Details einzelner Tests.",
        answers: [
            "Die Testziele und der Testumfang.",
            "Der detaillierte Quellcode der Anwendung.",
            "Die Ressourcen und der Zeitplan für die Tests.",
            "Die Eingangs- und Endekriterien."
        ],
        correct: 1,
        feedback: {
            trap: "Testziele (a), Ressourcen/Zeitplan (c) und Kriterien (d) sind typische Inhalte eines Testkonzepts.",
            principle: "Testkonzept = Strategisches Dokument mit Zielen, Umfang, Ressourcen, Zeitplan, Kriterien.",
            explanation: "Quellcode gehört nicht ins Testkonzept. Das Testkonzept ist ein Planungsdokument, kein technisches Dokument.",
            reference: "Lehrplan 5.1.2, Seite 56"
        }
    },
    {
        id: "custom-5.1.2-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.2",
        kLevel: 1,
        chapter: 5,
        text: "Welches Element ist ein typischer Bestandteil eines Testkonzepts?",
        hint: "Ein Testkonzept beantwortet: Was testen wir? Wie testen wir? Wann sind wir fertig?",
        answers: [
            "Der vollständige Testfall-Katalog mit allen Testschritten.",
            "Die Eingangskriterien und Endekriterien für die Tests.",
            "Die Fehlerbehebungsstrategie der Entwickler.",
            "Die persönlichen Bewertungen der Tester zu den Entwicklern."
        ],
        correct: 1,
        feedback: {
            trap: "Testfälle (a) sind zu detailliert fürs Konzept. Fehlerbehebung (c) ist Entwicklersache. Persönliche Bewertungen (d) gehören nirgendwo hin.",
            principle: "Testkonzept enthält: Ziele, Umfang, Ressourcen, Zeitplan, Eingangskriterien, Endekriterien, Risiken.",
            explanation: "Eingangs- und Endekriterien definieren, wann Tests beginnen können und wann sie als abgeschlossen gelten.",
            reference: "Lehrplan 5.1.2, Seite 56"
        }
    },

    // --- FL-5.1.3: Testerrolle in iterativer/inkrementeller Planung (K2) ---
    {
        id: "custom-5.1.3-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.3",
        kLevel: 2,
        chapter: 5,
        text: "Wie beteiligen sich Tester typischerweise an der Iterationsplanung in agilen Projekten?",
        hint: "Agile Teams planen gemeinsam. Tester bringen eine besondere Perspektive ein - welche?",
        answers: [
            "Tester sind bei der Iterationsplanung nicht anwesend.",
            "Tester schreiben User-Storys und definieren die Akzeptanzkriterien allein.",
            "Tester beteiligen sich an der Aufwandsschätzung und helfen bei der Definition von Akzeptanzkriterien.",
            "Tester führen während der Planung bereits die Tests durch."
        ],
        correct: 2,
        feedback: {
            trap: "Tester SIND bei der Planung dabei (a). Sie schreiben nicht ALLEIN (b). Tests kommen NACH der Planung (d).",
            principle: "Tester in agiler Planung: Schätzung, Akzeptanzkriterien, Testbarkeit bewerten.",
            explanation: "Tester bringen ihre Expertise ein, um Aufwände realistisch zu schätzen und testbare Akzeptanzkriterien zu definieren.",
            reference: "Lehrplan 5.1.3, Seite 57"
        }
    },
    {
        id: "custom-5.1.3-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.1.3",
        kLevel: 2,
        chapter: 5,
        text: "Was ist ein wichtiger Beitrag des Testers bei der Release-Planung?",
        hint: "Release-Planung = Was kommt in welches Release? Tester bewerten etwas Wichtiges...",
        answers: [
            "Die Festlegung der Verkaufspreise für das Release.",
            "Die Identifikation und Bewertung von Produktrisiken.",
            "Die Programmierung der neuen Features.",
            "Die Entscheidung, welche Entwickler am Release arbeiten."
        ],
        correct: 1,
        feedback: {
            trap: "Preise (a) und Personalentscheidungen (d) sind keine Tester-Aufgaben. Programmierung (c) ist Entwicklersache.",
            principle: "Tester bei Release-Planung: Risikobewertung, Testaufwand schätzen, Testbarkeit prüfen.",
            explanation: "Tester identifizieren Risiken und helfen zu entscheiden, welche Features priorisiert und wie intensiv getestet werden müssen.",
            reference: "Lehrplan 5.1.3, Seite 57"
        }
    },

    // --- FL-5.2.1: Risikodefinition und Risikoattribute (K2) ---
    {
        id: "custom-5.2.1-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.2.1",
        kLevel: 2,
        chapter: 5,
        text: "Wie wird die Risikostufe (Risikolevel) eines Risikos typischerweise bestimmt?",
        hint: "Risiko = Eintrittswahrscheinlichkeit × Auswirkung. Was ergibt das?",
        answers: [
            "Durch die Anzahl der gefundenen Fehler.",
            "Durch das Produkt aus Eintrittswahrscheinlichkeit und Schadensausmaß.",
            "Durch die Dauer des Projekts.",
            "Durch die Anzahl der Tester im Team."
        ],
        correct: 1,
        feedback: {
            trap: "Fehleranzahl (a), Projektdauer (c) und Teamgröße (d) bestimmen NICHT direkt die Risikostufe.",
            principle: "Risikostufe = Eintrittswahrscheinlichkeit × Schadensausmaß (Auswirkung).",
            explanation: "Ein Risiko mit hoher Wahrscheinlichkeit UND hohem Schaden hat die höchste Risikostufe und muss priorisiert werden.",
            reference: "Lehrplan 5.2.1, Seite 58"
        }
    },
    {
        id: "custom-5.2.1-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.2.1",
        kLevel: 2,
        chapter: 5,
        text: "Was ist ein Risiko im Kontext des Softwaretestens?",
        hint: "Risiko = etwas KÖNNTE passieren. Es ist noch nicht eingetreten.",
        answers: [
            "Ein bereits eingetretener Fehler im System.",
            "Ein potenzielles zukünftiges Ereignis mit negativer Auswirkung.",
            "Ein abgeschlossener Testfall.",
            "Eine dokumentierte Anforderung."
        ],
        correct: 1,
        feedback: {
            trap: "Ein bereits eingetretener Fehler (a) ist kein Risiko mehr, sondern ein Problem. Testfall (c) und Anforderung (d) sind keine Risiken.",
            principle: "Risiko = Möglichkeit eines zukünftigen negativen Ereignisses mit Eintrittswahrscheinlichkeit und Schadensausmaß.",
            explanation: "Risiken sind potenzielle Probleme, die noch nicht eingetreten sind. Das Ziel ist, sie zu identifizieren und zu minimieren.",
            reference: "Lehrplan 5.2.1, Seite 58"
        }
    },

    // --- FL-5.3.1: Testüberwachung, Teststeuerung und Testabschluss (K2) ---
    {
        id: "custom-5.3.1-1",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.3.1",
        kLevel: 2,
        chapter: 5,
        text: "Was ist der Hauptzweck der Testüberwachung?",
        hint: "Überwachung = Beobachten und Messen. Wozu brauchen wir das?",
        answers: [
            "Die automatische Behebung von Fehlern.",
            "Das Sammeln von Informationen zur Bewertung des Testfortschritts.",
            "Die Programmierung neuer Testfälle.",
            "Die Schulung neuer Tester."
        ],
        correct: 1,
        feedback: {
            trap: "Fehlerbehebung (a) ist Debugging. Testfallprogrammierung (c) ist Testentwurf. Schulung (d) ist Personalentwicklung.",
            principle: "Testüberwachung = Informationen sammeln über Fortschritt, Abdeckung, Qualität.",
            explanation: "Durch Testüberwachung können wir den Testfortschritt bewerten und Abweichungen vom Plan erkennen.",
            reference: "Lehrplan 5.3.1, Seite 60"
        }
    },
    {
        id: "custom-5.3.1-2",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.3.1",
        kLevel: 2,
        chapter: 5,
        text: "Was ist der Unterschied zwischen Testüberwachung und Teststeuerung?",
        hint: "Überwachung = BEOBACHTEN. Steuerung = HANDELN. Was kommt zuerst?",
        answers: [
            "Testüberwachung und Teststeuerung sind identisch.",
            "Testüberwachung sammelt Informationen, Teststeuerung leitet daraus Maßnahmen ab.",
            "Teststeuerung erfolgt vor der Testüberwachung.",
            "Testüberwachung betrifft nur automatisierte Tests."
        ],
        correct: 1,
        feedback: {
            trap: "Sie sind NICHT identisch (a). Überwachung kommt ZUERST (c). Überwachung gilt für ALLE Tests (d).",
            principle: "Überwachung = Informationen sammeln | Steuerung = Auf Basis der Infos handeln.",
            explanation: "Erst sammeln wir Daten (Überwachung), dann reagieren wir auf Abweichungen mit Maßnahmen (Steuerung).",
            reference: "Lehrplan 5.3.1, Seite 60"
        }
    },
    {
        id: "custom-5.3.1-3",
        source: "Eigene Frage basierend auf CTFL v4.0.2 Lehrplan",
        lo: "FL-5.3.1",
        kLevel: 2,
        chapter: 5,
        text: "Was ist ein typisches Ergebnis der Testabschluss-Aktivitäten?",
        hint: "Am Ende des Testens: Was nehmen wir mit für das nächste Projekt?",
        answers: [
            "Neue Fehler werden eingeführt.",
            "Der Testabschlussbericht mit Lessons Learned.",
            "Alle Testfälle werden gelöscht.",
            "Die Entwickler werden entlassen."
        ],
        correct: 1,
        feedback: {
            trap: "Neue Fehler (a), Löschen von Testfällen (c) und Entlassungen (d) sind keine Ergebnisse des Testabschlusses.",
            principle: "Testabschluss = Abschlussbericht, Lessons Learned, Archivierung, Übergabe von Testmitteln.",
            explanation: "Der Testabschlussbericht dokumentiert, was gut lief, was nicht, und was für zukünftige Projekte gelernt wurde.",
            reference: "Lehrplan 5.3.1, Seite 60-61"
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
