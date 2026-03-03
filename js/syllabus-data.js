/**
 * ISTQB CTFL v4.0.2 Lehrplan - Vollständige Kapitelstruktur
 * 
 * Quelle: Deutschsprachiger Lehrplan des German Testing Board
 * Version: 4.0.2 (01.03.2025)
 * Download: https://www.german-testing-board.info/lehrplaene/istqbr-certified-tester-schema/
 * 
 * HINWEIS: Die Inhalte sind Zusammenfassungen zur Prüfungsvorbereitung.
 * Für den vollständigen Originaltext siehe den offiziellen Lehrplan (Link oben).
 * Seitenzahlen beziehen sich auf die offizielle PDF-Version.
 * 
 * © German Testing Board e.V., Austrian Testing Board, Swiss Testing Board
 */

const SYLLABUS_PDF_URL = "https://www.german-testing-board.info/lehrplaene/istqbr-certified-tester-schema/";

const syllabusData = Object.freeze({
    pdfUrl: SYLLABUS_PDF_URL,
    chapters: [
        // =========================================================================
        // KAPITEL 1: GRUNDLAGEN DES TESTENS (180 Minuten)
        // =========================================================================
        {
            id: 1,
            icon: "🎯",
            title: "Grundlagen des Testens",
            questionCount: "8",
            keywords: [
                "Debugging", "Fehlerwirkung", "Fehlerzustand", "Fehlhandlung", "Grundursache",
                "Qualität", "Qualitätssicherung", "Testablauf", "Testabschluss", "Testanalyse",
                "Testbasis", "Testbedingung", "Testdaten", "Testdurchführung", "Testen",
                "Testentwurf", "Testergebnis", "Testfall", "Testmittel", "Testobjekt",
                "Testplanung", "Testprozess", "Testrealisierung", "Teststeuerung",
                "Testüberwachung", "Testziel", "Überdeckung", "Validierung", "Verfolgbarkeit", "Verifizierung"
            ],
            subchapters: [
                {
                    id: "1.1",
                    title: "Was ist Testen?",
                    page: 16,
                    quote: "Das Testen von Software besteht aus einer Reihe von Aktivitäten zur Entdeckung von Fehlerzuständen und zur Bewertung der Qualität von Arbeitsergebnissen der Softwareentwicklung.",
                    keyPoints: [
                        {
                            title: "Testen = mehr als nur Code ausführen",
                            content: "Das Testen von Software umfasst weit mehr als nur die Durchführung von Tests. Es muss auf den Softwareentwicklungslebenszyklus (SDLC) abgestimmt sein.",
                            coachNote: "Merke: Testen ist ein Prozess, keine einzelne Phase. Es beginnt schon VOR der ersten Zeile Code (mit Planung & Analyse)!"
                        },
                        {
                            title: "Statisch vs. Dynamisch",
                            quote: "Beim dynamischen Test wird die Software ausgeführt, beim statischen Test hingegen nicht.",
                            content: "Zum statischen Test gehören Reviews und statische Analysen. Beim dynamischen Test werden verschiedene Testverfahren verwendet.",
                            coachNote: "Eselsbrücke: Dynamisch = 'Motor läuft' 🚗. Statisch = 'Motor aus' (Code/Dokumente lesen) 📄."
                        },
                        {
                            title: "Verifizierung vs. Validierung",
                            quote: "Verifizieren = Prüfen, ob das System die spezifizierten Anforderungen erfüllt. Validieren = Prüfen, ob das System die Bedürfnisse der Benutzer in seiner Betriebsumgebung erfüllt.",
                            coachNote: "Verifizierung: 'Bauen wir das Produkt richtig?' ✅ Validierung: 'Bauen wir das richtige Produkt?' ❤️"
                        }
                    ],
                    subsections: [
                        {
                            id: "1.1.1",
                            title: "Testziele",
                            page: 16,
                            quote: "Typische Testziele sind: Bewertung von Arbeitsergebnissen, Auslösen von Fehlerwirkungen, Sicherstellen der Überdeckung, Verringern des Risikos und Aufbauen von Vertrauen in die Qualität.",
                            keyPoints: [
                                {
                                    title: "Evaluieren & Bewerten",
                                    content: "Bewertung von Arbeitsergebnissen wie Anforderungen, User-Storys, Entwürfen und Code.",
                                    coachNote: "Wir prüfen nicht nur Code, sondern auch die Dokumente davor!"
                                },
                                {
                                    title: "Fehler finden",
                                    content: "Auslösen von Fehlerwirkungen und Finden von Fehlerzuständen, um unzureichende Softwarequalität zu verhindern.",
                                    coachNote: "Job #1: Bugs finden, bevor der Kunde es tut."
                                },
                                {
                                    title: "Vertrauen aufbauen",
                                    content: "Aufbauen von Vertrauen in die Qualität des Testobjekts durch objektive Informationen für Stakeholder.",
                                    coachNote: "🎯 Prüfungsfokus – Erreichbare Testziele:\n\n✅ RICHTIG: 'Risiko verringern und Vertrauen aufbauen'\n\n❌ IMMER FALSCH (Grundsatz 1 & 2):\n• 'nachweisen, dass keine Fehler mehr da sind'\n• 'alle Kombinationen getestet'"
                                }
                            ]
                        },
                        {
                            id: "1.1.2",
                            title: "Testen und Debugging",
                            page: 17,
                            quote: "Testen und Debugging sind getrennte Aktivitäten. Testen kann Fehlerwirkungen auslösen oder direkt Fehlerzustände finden. Debugging umfasst Reproduzieren, Diagnose und Behebung.",
                            keyPoints: [
                                {
                                    title: "Unterscheidung",
                                    content: "Testen findet Fehler(wirkungen). Debugging ist die Entwickleraufgabe, die Ursache zu finden und zu beheben.",
                                    coachNote: "⚠️ Prüfungsfalle:\n\n• 'Testen = Fehlervermeidung' → FALSCH!\n• Testen FINDET Fehler, vermeidet sie nicht.\n\nMerke:\n• Tester → FINDEN Fehlerwirkungen\n• Entwickler → BEHEBEN (Debugging)\n\n💡 Ablenkung in der Prüfung: 'verschiedene Dokumentenarten' ignorieren."
                                },
                                {
                                    title: "Bestätigung",
                                    content: "Nach dem Debugging muss ein Fehlernachtest (Bestätigungstest) erfolgen, um die Behebung zu prüfen.",
                                    coachNote: "Für die Prüfung: Fehlernachtest gehört zum Wartungstest / zur Behebung dazu."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "1.2",
                    title: "Warum ist Testen notwendig?",
                    page: 18,
                    quote: "Testen ist ein kosteneffizientes Mittel zur Erkennung von Fehlerzuständen. Diese Fehlerzustände können dann beseitigt werden, so dass das Testen indirekt zu einer höheren Qualität der Testobjekte beiträgt.",
                    keyPoints: [
                        {
                            title: "Kosteneffizienz",
                            content: "Testen ist ein kosteneffizientes Mittel zur Erkennung von Fehlerzuständen.",
                            coachNote: "Ein Bug in der Anforderung kostet 1€. Im Betrieb kostet er 100€."
                        }
                    ],
                    subsections: [
                        {
                            id: "1.2.1",
                            title: "Der Beitrag des Testens zum Erfolg",
                            page: 18,
                            quote: "Testen ist ein kosteneffizientes Mittel zur Erkennung von Fehlerzuständen. Diese können dann beseitigt werden, so dass das Testen indirekt zu einer höheren Qualität beiträgt.",
                            keyPoints: [
                                {
                                    title: "Qualitätssteuerung",
                                    content: "Testen liefert Messgrößen zur Bewertung der Qualität in verschiedenen SDLC-Phasen.",
                                    coachNote: "Ohne Testen ist Qualität nur eine Vermutung."
                                },
                                {
                                    title: "Anwalt der Benutzer",
                                    content: "Tester stellen sicher, dass Benutzerbedürfnisse berücksichtigt werden (indirekte Vertretung).",
                                    coachNote: "Der Tester ist oft die einzige Stimme des Users im Projektteam."
                                }
                            ]
                        },
                        {
                            id: "1.2.2",
                            title: "Testen und Qualitätssicherung (QS)",
                            page: 18,
                            quote: "Testen und Qualitätssicherung sind nicht dasselbe. Testen ist eine Form der Qualitätssteuerung (QC). QS ist prozessorientiert und präventiv.",
                            keyPoints: [
                                {
                                    title: "Nicht dasselbe!",
                                    content: "Testen und QS werden oft verwechselt, sind aber unterschiedlich.",
                                    coachNote: "Testen = Prüfung des Produkts. QS = Verbesserung des Prozesses."
                                },
                                {
                                    title: "Testen",
                                    content: "Produktorientiert, korrigierend. Fokus: Fehler finden.",
                                    coachNote: "Testen fragt: 'Ist das Ding kaputt?'"
                                },
                                {
                                    title: "Qualitätssicherung",
                                    content: "Prozessorientiert, präventiv. Fokus: Prozesse verbessern, damit Fehler gar nicht erst entstehen.",
                                    coachNote: "QS fragt: 'Warum bauen wir kaputte Dinge?'"
                                }
                            ]
                        },
                        {
                            id: "1.2.3",
                            title: "Fehlerkette",
                            page: 19,
                            image: "images/fehlerkette_cc.png",
                            imageAttribution: "Eigene Darstellung nach ISTQB-Terminologie",
                            quote: "Menschen begehen Fehlhandlungen, die zu Fehlerzuständen führen, was wiederum zu Fehlerwirkungen führen kann.",
                            keyPoints: [
                                {
                                    title: "Fehlhandlung (Mistake)",
                                    content: "Die menschliche Handlung, die zu einem falschen Ergebnis führt (Irrtum).",
                                    coachNote: "🎯 Merke: Die FEHLHANDLUNG ist der START der Kette!\n\n📌 Beispiel:\nEntwickler ist müde und tippt '>' statt '>='\n\n⚠️ In der Prüfung:\n'Fehlhandlung' = menschlicher Irrtum (error)\n'Fehler machen' = immer Fehlhandlung"
                                },
                                {
                                    title: "Fehlerzustand (Defect/Bug)",
                                    content: "Das Ergebnis der Fehlhandlung im Arbeitsergebnis (falscher Code, falsche Doku).",
                                    coachNote: "🎯 Merke: Der FEHLERZUSTAND ist der Bug im Code!\n\n📌 Beispiel:\nDie falsche Zeile 'if (x > 10)' steht jetzt im Code.\nDer Bug existiert, wurde aber noch nicht ausgeführt.\n\n⚠️ In der Prüfung:\n'Defect' oder 'Bug' = Fehlerzustand\n'Was steht falsch im Code?' = Fehlerzustand"
                                },
                                {
                                    title: "Fehlerwirkung (Failure)",
                                    content: "Das Abweichen der Komponente oder des Systems vom erwarteten Verhalten bei der Ausführung.",
                                    coachNote: "🎯 Merke: Die FEHLERWIRKUNG ist das sichtbare Problem!\n\n📌 Beispiel:\nUser gibt 10 ein, System zeigt 'Zugang verweigert'\nobwohl ab 10 Zugang gewährt werden sollte.\n\n⚠️ In der Prüfung:\n'Failure' = Fehlerwirkung\n'Was sieht der Nutzer?' = Fehlerwirkung\n'Abweichung vom Soll' = Fehlerwirkung\n\n💡 Kette: Fehlhandlung → Fehlerzustand → Fehlerwirkung"
                                },
                                {
                                    title: "Grundursache (Root Cause)",
                                    content: "Der ursprüngliche Grund für die Fehlhandlung (z.B. mangelnde Schulung).",
                                    coachNote: "Wenn wir die Grundursache beheben, verhindern wir zukünftige Bugs."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "1.3",
                    title: "Die sieben Grundsätze des Testens",
                    page: 20,
                    quote: "Es wurden verschiedene Testgrundsätze vorgeschlagen, die in den letzten Jahrzehnten allgemeine Richtlinien für das Testen bieten.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "7 bewährte Grundsätze leiten das Testen. Sie helfen, realistische Erwartungen zu setzen und Teststrategien zu optimieren.",
                            coachNote: "Diese Grundsätze sind PRÜFUNGSRELEVANT! Lerne sie auswendig."
                        }
                    ],
                    subsections: [
                        {
                            id: "1.3.1",
                            title: "Die sieben Grundsätze",
                            page: 20,
                            quote: "Diese Grundsätze haben sich über die Jahrzehnte als nützliche Leitlinien für das Testen etabliert.",
                            keyPoints: [
                                {
                                    title: "1. Testen zeigt Anwesenheit von Fehlern",
                                    quote: "Testen kann zeigen, dass Fehlerzustände vorhanden sind, aber nicht beweisen, dass keine Fehlerzustände vorhanden sind.",
                                    coachNote: "🎯 Prüfungsfalle – Grundsatz 1:\n\n❌ IMMER FALSCH:\n• 'nachweisen, dass keine Fehler'\n• 'keine Fehlerwirkungen im Betrieb'\n\n✅ Bei Frage nach 'erreichbares Testziel':\n→ 'Risiko verringern und Vertrauen aufbauen'"
                                },
                                {
                                    title: "2. Vollständiges Testen ist unmöglich",
                                    content: "Alles zu testen (alle Kombinationen) ist zu aufwendig. Wir nutzen Risikobasiertes Testen.",
                                    coachNote: "Mut zur Lücke! Teste das Wichtigste zuerst."
                                },
                                {
                                    title: "3. Frühes Testen spart Geld",
                                    content: "Fehler sollten so früh wie möglich gefunden werden (Shift Left).",
                                    coachNote: "Billiger Bug (Anforderung) vs. Teurer Bug (Produktion)."
                                },
                                {
                                    title: "4. Fehler treten gehäuft auf",
                                    content: "Die meisten Fehler stecken in wenigen Modulen (Pareto-Prinzip: 20% Code = 80% Fehler).",
                                    coachNote: "Wenn du einen Bug findest, such in der Nähe weiter! Da sind oft noch mehr."
                                },
                                {
                                    title: "5. Das Pestizid-Paradoxon",
                                    content: "Wiederholt man die gleichen Tests immer wieder, finden sie irgendwann keine neuen Fehler mehr.",
                                    coachNote: "🎯 Prüfungsfalle – Pestizid-Paradoxon:\n\nSzenario: 'Keine Änderungen an Regressionstests, keine neuen Fehler gefunden'\n\n✅ Richtige Antwort: 'Alte Tests verlieren an Wirksamkeit' (Grundsatz 5)\n\n❌ Nicht verwechseln mit: 'Keine Fehler = brauchbar' (Grundsatz 7 – anderer Trugschluss!)"
                                },
                                {
                                    title: "6. Testen ist kontextabhängig",
                                    content: "Sicherheitskritische Software wird anders getestet als eine E-Commerce-App.",
                                    coachNote: "Es gibt kein 'One Size Fits All' beim Testen."
                                },
                                {
                                    title: "7. Trugschluss 'Keine Fehler' = Brauchbar",
                                    content: "Nur weil keine Fehler gefunden wurden, heißt das nicht, dass die Software den Benutzerwünschen entspricht (Validierung!).",
                                    coachNote: "Ein perfekt funktionierendes System, das keiner braucht, ist trotzdem nutzlos."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "1.4",
                    title: "Testprozess",
                    page: 21,
                    quote: "Ein Testprozess besteht in der Regel aus den Hauptgruppen: Testplanung, Testüberwachung und -steuerung, Testanalyse, Testentwurf, Testrealisierung, Testdurchführung und Testabschluss.",
                    keyPoints: [
                        {
                            title: "Kontextabhängig",
                            content: "Es gibt keinen universellen Testprozess, er muss angepasst werden.",
                            coachNote: "Agil vs. Wasserfall – der Prozess passt sich an."
                        }
                    ],
                    subsections: [
                        {
                            id: "1.4.1",
                            title: "Testaktivitäten (Der ISTQB-Prozess)",
                            page: 21,
                            quote: "Ein Testprozess besteht aus: Testplanung, Testüberwachung und -steuerung, Testanalyse, Testentwurf, Testrealisierung, Testdurchführung und Testabschluss.",
                            keyPoints: [
                                {
                                    title: "1. Planung",
                                    content: "Ziele definieren, Vorgehensweise wählen (Testkonzept).",
                                    coachNote: "🎯 Testplanung in der Prüfung:\n\n📌 Wird abgefragt bei:\n• 'Aufwand schätzen' → Planung\n• 'Testkonzept erstellen' → Planung\n• 'Ressourcen zuweisen' → Planung\n\n💡 Formel für Schätzung (Drei-Punkt):\nE = (O + 4×W + P) ÷ 6"
                                },
                                {
                                    title: "2. Überwachung & Steuerung",
                                    content: "Vergleich Ist vs. Soll. Maßnahmen ergreifen (z.B. mehr Tester, weniger Umfang).",
                                    coachNote: "🎯 Überwachung vs. Steuerung:\n\n📊 ÜBERWACHUNG = Messen & Berichten\n• Testfortschritt verfolgen\n• Metriken erheben\n\n🎛️ STEUERUNG = Eingreifen & Korrigieren\n• Mehr Ressourcen zuweisen\n• Umfang reduzieren\n• Termine anpassen"
                                },
                                {
                                    title: "3. Analyse",
                                    content: "WAS testen wir? Testbasis analysieren und Testbedingungen definieren (z.B. 'Temperatur in verschiedenen Bereichen prüfen').",
                                    coachNote: "🎯 Testanalyse = WAS soll getestet werden?\n\nErgebnis: Priorisierte TESTBEDINGUNGEN\n\nBeispiel Smart-Home-App:\n→ 'Die Temperaturbereiche müssen korrekt bewertet werden'\n→ 'Grenzfälle zwischen den Bereichen prüfen'\n\n⚠️ Häufige Prüfungsfalle:\n• 'Testbedingung identifizieren' → Testanalyse\n• 'Grenzwerte ermitteln/Testfälle entwerfen' → Testentwurf (NICHT Analyse!)\n• 'Testdaten erstellen' → Testrealisierung (NICHT Analyse!)"
                                },
                                {
                                    title: "4. Entwurf",
                                    content: "WIE testen wir? Testverfahren (GWA, ÄK, Entscheidungstabellen) anwenden und Testfälle entwerfen.",
                                    coachNote: "🎯 Testentwurf = WIE soll getestet werden?\n\nErgebnis: TESTFÄLLE und Überdeckungskriterien\n\nBeispiel Smart-Home-App:\n→ GWA anwenden: Testfall mit 10°C (Grenze), 11°C (Grenze)\n→ ÄK anwenden: je ein Wert pro Bereich\n\n📌 Testentwurf ≠ Testrealisierung!\n• Testentwurf = Testfälle ENTWERFEN (Logik)\n• Testrealisierung = Testdaten ERSTELLEN (Vorbereitung)"
                                },
                                {
                                    title: "5. Realisierung",
                                    content: "Alles vorbereiten: Testdaten erstellen, Testskripte schreiben, Testumgebung einrichten, Testsuiten zusammenstellen.",
                                    coachNote: "🎯 Testrealisierung = VORBEREITEN für die Durchführung\n\nErgebnis: Testdaten, Testskripte, Testausführungsplan\n\nBeispiel Smart-Home-App:\n→ Konkrete Testdaten erstellen: {10, 11, 15, 16, ...}\n→ Testskript schreiben: Eingabe → Erwartung\n→ Testumgebung aufsetzen\n\n⚠️ Prüfungsfalle:\n'Testdaten entwerfen' = Testrealisierung (NICHT Testentwurf!)\n'Testfälle entwerfen' = Testentwurf (NICHT Testrealisierung!)"
                                },
                                {
                                    title: "6. Durchführung",
                                    content: "Tests ausführen, Ergebnisse protokollieren, Ist vs. Soll vergleichen, Abweichungen als Fehler melden.",
                                    coachNote: "🎯 Testdurchführung = Tests LAUFEN LASSEN\n\nErgebnis: Testergebnisse, Fehlerberichte\n\n📌 Hier wird nur AUSGEFÜHRT, nicht mehr entworfen!"
                                },
                                {
                                    title: "7. Abschluss",
                                    content: "Testabschlussbericht erstellen, Lessons Learned sammeln, Testware archivieren, Testumgebung aufräumen.",
                                    coachNote: "🎯 Testabschluss = AUFRÄUMEN und LERNEN\n\nErgebnis: Testabschlussbericht, Lessons Learned\n\n📌 Testfortschrittsberichte fließen hier in den Testabschlussbericht ein.\n\n⚠️ Prüfungsfrage: 'Wann werden Testfortschrittsberichte AM MEISTEN genutzt?'\n→ Beim TESTABSCHLUSS (nicht bei der Planung!)"
                                }
                            ]
                        },
                        {
                            id: "1.4.2",
                            title: "Testprozess im Kontext",
                            page: 23,
                            quote: "Der Testprozess ist kein feststehendes Schema, sondern muss an den Kontext angepasst werden: SDLC, Risiken, Domäne, Budget, Zeit, Komplexität.",
                            keyPoints: [
                                {
                                    title: "Kontextfaktoren",
                                    content: "Der Testprozess wird beeinflusst durch: Softwareentwicklungslebenszyklus (SDLC), Produkt- und Projektrisiken, Geschäftsdomäne, operative Einschränkungen (Budget, Zeit, Komplexität).",
                                    coachNote: "🎯 Prüfungsfalle:\n\n'Welcher Faktor beeinflusst den Testprozess?'\n\n✅ RICHTIG: SDLC, Risiken, Domäne, Budget, Zeit\n❌ FALSCH: Persönliche Vorlieben, Wetter"
                                },
                                {
                                    title: "SDLC-Anpassung",
                                    content: "Der Testprozess muss zum SDLC passen: Agile Projekte haben kurze Iterationen, Wasserfall hat längere Phasen. Die Teststrategie, der Zeitpunkt des Testens und die Dokumentation variieren entsprechend.",
                                    coachNote: "Agil = mehr iterativ, weniger Doku. Wasserfall = mehr sequenziell, mehr formale Dokumente."
                                },
                                {
                                    title: "Keine Einheitslösung",
                                    content: "Es gibt keinen universellen Testprozess, der für alle Projekte passt. Der Testprozess muss immer an die spezifischen Bedürfnisse und Einschränkungen des Projekts angepasst werden.",
                                    coachNote: "Der Testprozess ist ein RAHMEN, keine starre Vorschrift."
                                }
                            ]
                        },
                        {
                            id: "1.4.3",
                            title: "Testmittel (Testware)",
                            page: 22,
                            quote: "Testmittel werden als Arbeitsergebnisse aus den Testaktivitäten erstellt: Testpläne, Testfälle, Testdaten, Testskripte, Testberichte.",
                            keyPoints: [
                                {
                                    title: "Was sind Testmittel?",
                                    content: "Testmittel sind die Arbeitsergebnisse der Testaktivitäten: Testpläne, Testfälle, Testdaten, Testskripte, Testberichte.",
                                    coachNote: "Ordnung ist das halbe Leben – auch beim Testen (Konfigurationsmanagement!)."
                                },
                                {
                                    title: "Testanalyse → Testbedingungen",
                                    content: "Die Testanalyse produziert priorisierte Testbedingungen (was soll getestet werden?).",
                                    coachNote: "🎯 Testanalyse = WAS testen?\n→ Testbedingungen definieren"
                                },
                                {
                                    title: "Testentwurf → Testüberdeckungen",
                                    content: "Der Testentwurf erstellt Testüberdeckungskriterien und Testfälle (wie wird getestet?).",
                                    coachNote: "🎯 Testentwurf = WIE testen?\n→ Überdeckungskriterien, Testfälle"
                                },
                                {
                                    title: "Testrealisierung → Testausführungsplan",
                                    content: "Die Testrealisierung erstellt den Testausführungsplan (Reihenfolge der Testfälle).",
                                    coachNote: "🎯 Testrealisierung = In welcher REIHENFOLGE?\n→ Testausführungsplan"
                                },
                                {
                                    title: "Testabschluss → Änderungsanforderungen",
                                    content: "Der Testabschluss kann Änderungsanforderungen für nicht behobene Fehler oder technische Schulden erzeugen.",
                                    coachNote: "🎯 Prüfungsfalle – Zuordnung merken:\n\n• Testbedingungen → Testanalyse\n• Testüberdeckungen → Testentwurf\n• Testausführungsplan → Testrealisierung\n• Änderungsanforderungen → Testabschluss"
                                }
                            ]
                        },
                        {
                            id: "1.4.4",
                            title: "Verfolgbarkeit zwischen Testbasis und Testmitteln",
                            page: 23,
                            quote: "Für eine effektive Testüberwachung ist eine Verfolgbarkeit zwischen Testbasis, Testmitteln, Testergebnissen und Fehlerzuständen wichtig.",
                            keyPoints: [
                                {
                                    title: "Warum Verfolgbarkeit?",
                                    content: "Verfolgbarkeit zwischen Testbasis, Testmitteln, Testergebnissen und Fehlerzuständen ermöglicht effektive Testüberwachung und -steuerung. Welcher Testfall prüft welche Anforderung? Welcher Bug gehört wozu?",
                                    coachNote: "Stell dir eine Tabelle vor: Zeilen = Anforderungen, Spalten = Testfälle, Kreuz = 'wird getestet'. Verfolgbarkeit ist genau diese Verknüpfung."
                                },
                                {
                                    title: "Überdeckungsbewertung",
                                    content: "Genaue Verfolgbarkeit unterstützt die Bewertung der Überdeckung. Messbare Überdeckungskriterien dienen als Key-Performance-Indikatoren (KPIs).",
                                    coachNote: "🎯 DAS ist der wichtigste Nutzen für die Prüfung:\n\nVerfolgbarkeit = 'Wurde die angestrebte Überdeckung erreicht?'\n\nBeispiel: Anforderung R1 → Testfall TC1, TC2\n→ Wenn TC1 und TC2 bestanden → R1 ist abgedeckt\n→ Wenn TC3 keiner Anforderung zugeordnet → überflüssig?\n→ Wenn R4 keinen Testfall hat → Lücke!\n\n⚠️ Prüfungsfalle:\n'Welchen Mehrwert bietet Verfolgbarkeit?'\n✅ 'Effizienter bestimmen, ob die angestrebte Überdeckung erreicht wurde'\n❌ 'Feststellen, welcher Tester die meisten Fehler gefunden hat'"
                                },
                                {
                                    title: "Die 4 konkreten Nutzen der Verfolgbarkeit",
                                    content: "Laut Lehrplan unterstützt Verfolgbarkeit beim Testen in vier Bereichen:\n\n1. Auswirkungsanalyse von Änderungen → Welche Tests sind bei einer Änderung betroffen? Welche Regressionstests müssen ausgewählt werden?\n\n2. Testaktivitäten prüfbar (auditierbar) machen → Wurde alles getestet? Ist die Testdurchführung vollständig?\n\n3. Verständlichkeit von Teststatusberichten verbessern → Den Status der Testbasis-Elemente (z.B. User-Storys inkl. offener Fehler) im Bericht sichtbar machen.\n\n4. Informationen zur Beurteilung der Prozessqualität liefern → Passt die Anzahl und Qualität der Tests zum jeweiligen Produktrisiko?",
                                    coachNote: "🎯 Prüfungs-Eselsbrücke – Zuordnung merken:\n\n• Regressionstests auswählen → Änderungsauswirkung (Was hat sich geändert?)\n• Vollständigkeit bewerten → Prüfbarkeit/Auditierbarkeit (Können wir es nachweisen?)\n• User-Storys mit offenen Bugs → Teststatusbericht (Was steht im Bericht?)\n• Tests vs. Risiko → Prozessqualität (Ist unser Testprozess angemessen?)\n\nEliminierungs-Trick: 'Regression → Änderung' ist die klarste Zuordnung – damit fallen schon die meisten falschen Optionen weg!"
                                },
                                {
                                    title: "Weitere Nutzen",
                                    content: "Verfolgbarkeit hilft zusätzlich bei der IT-Governance und Compliance (z.B. in regulierten Branchen) sowie bei der Bewertung des Restrisikos nach dem Testen.",
                                    coachNote: "In der Prüfung: Restrisiko-Bewertung ist ein weiterer Nutzen, aber die 4 Hauptnutzen oben sind die häufigsten Prüfungsfragen!"
                                }
                            ]
                        },
                        {
                            id: "1.4.5",
                            title: "Rollen des Testens",
                            page: 24,
                            quote: "Zwei Hauptrollen: Testmanagement (Planung, Überwachung, Steuerung, Abschluss) und Testen (Analyse, Entwurf, Realisierung, Durchführung).",
                            keyPoints: [
                                {
                                    title: "Zwei Hauptrollen",
                                    content: "ISTQB unterscheidet zwei Hauptrollen: Testmanagement und Testen. Die Aufgabenverteilung hängt vom Kontext ab.",
                                    coachNote: "In agilen Teams können Rollen auf mehrere Personen verteilt sein."
                                },
                                {
                                    title: "Rolle: Testmanagement",
                                    content: "Gesamtverantwortung für Testprozess, Testteam und Leitung der Testaktivitäten. Fokus auf Testplanung, Testüberwachung, Teststeuerung und Testabschluss.",
                                    coachNote: "Kann vom Teamleiter, Testmanager oder Entwicklungsleiter übernommen werden."
                                },
                                {
                                    title: "Rolle: Testen",
                                    content: "Gesamtverantwortung für den operativen Aspekt des Testens. Fokus auf Testanalyse, Testentwurf, Testrealisierung und Testdurchführung.",
                                    coachNote: "🎯 Prüfungsfalle – Rollen zuordnen:\n\n📋 Testmanagement:\n• Planung, Überwachung, Steuerung, Abschluss\n\n🔧 Testen:\n• Analyse, Entwurf, Realisierung, Durchführung\n\n💡 Eine Person kann beide Rollen haben!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "1.5",
                    title: "Skills & Rollen",
                    page: 24,
                    quote: "Erfolgreiche Tester benötigen bestimmte Kompetenzen und ein geeignetes Arbeitsumfeld.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "Dieses Kapitel behandelt: Allgemeine Fertigkeiten (Kommunikation, analytisches Denken), Whole-Team-Ansatz (gemeinsame Qualitätsverantwortung) und Unabhängigkeit des Testens.",
                            coachNote: "Soft Skills sind genauso wichtig wie technisches Wissen!"
                        }
                    ],
                    subsections: [
                        {
                            id: "1.5.1",
                            title: "Allgemeine Fertigkeiten",
                            page: 24,
                            quote: "Tester benötigen: analytische Fähigkeiten, kritisches Denken, Kommunikationsfähigkeit, Teamfähigkeit und Detailgenauigkeit.",
                            keyPoints: [
                                {
                                    title: "Kommunikation",
                                    content: "Tester überbringen oft schlechte Nachrichten. Diplomatie ist wichtig!",
                                    coachNote: "🎯 Prüfungsfalle – Wichtigste Kompetenz:\n\nBei Frage 'Welche Kompetenz für WEITERGABE von Fehlerwirkungen?'\n→ KOMMUNIKATIONSFÄHIGKEIT\n\n❌ Nicht verwechseln mit:\n• Testwissen (für FINDEN)\n• Sorgfalt (für DOKUMENTIEREN)\n• Kritisches Denken (für ANALYSIEREN)"
                                },
                                {
                                    title: "Mindset",
                                    content: "Neugier, kritischer Blick, Detailgenauigkeit, Pessimismus (im professionellen Sinne).",
                                    coachNote: "Der Tester sucht das Haar in der Suppe. Der Entwickler kocht die Suppe."
                                }
                            ]
                        },
                        {
                            id: "1.5.2",
                            title: "Whole-Team-Ansatz",
                            page: 25,
                            quote: "Beim Whole-Team-Ansatz kann jedes Teammitglied eine testbezogene Aufgabe übernehmen. Das ganze Team ist für Qualität verantwortlich.",
                            keyPoints: [
                                {
                                    title: "Alle zusammen",
                                    content: "Jeder im Team ist für Qualität verantwortlich, nicht nur die Tester.",
                                    coachNote: "🎯 Prüfungsfalle – Whole-Team:\n\n✅ Tester + Fachbereich → Abnahmetests erstellen\n❌ Tester + Fachbereich → Teststrategie\n\n(Teststrategie wird mit ENTWICKLERN festgelegt)"
                                }
                            ]
                        },
                        {
                            id: "1.5.3",
                            title: "Unabhängigkeit",
                            page: 26,
                            quote: "Ein gewisser Grad an Unabhängigkeit macht den Tester effektiver bei der Fehlerfindung, da sich die Voreingenommenheit zwischen Autor und Tester unterscheidet.",
                            keyPoints: [
                                {
                                    title: "Vorteil",
                                    content: "Unabhängige Tester haben weniger 'Betriebsblindheit' und finden andere Fehler.",
                                    coachNote: "🎯 Prüfungsfalle – Unabhängigkeit:\n\nVorteil: Andere Perspektive, hinterfragt Annahmen\n\n❌ FALSCH:\n• 'Testteam trägt Verantwortung für Qualität'\n→ Qualität = Verantwortung ALLER!\n• 'Isolation ist gut'\n→ Kommunikation ist wichtig!"
                                },
                                {
                                    title: "Nachteil",
                                    content: "Gefahr der Isolation oder des 'Wir gegen Die'-Denkens.",
                                    coachNote: "Nicht im Elfenbeinturm sitzen! Redet miteinander."
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // =========================================================================
        // KAPITEL 2: TESTEN WÄHREND DES SOFTWAREENTWICKLUNGSLEBENSZYKLUS (130 Min.)
        // =========================================================================
        {
            id: 2,
            icon: "🔄",
            title: "Testen während des Softwareentwicklungslebenszyklus",
            questionCount: "6",
            keywords: [
                "Abnahmetest", "Black-Box-Test", "Fehlernachtest", "funktionaler Test",
                "Integrationstest", "Komponentenintegrationstest", "Komponententest",
                "nicht-funktionaler Test", "Regressionstest", "Shift-Left",
                "Systemintegrationstest", "Systemtest", "Testart", "Testobjekt",
                "Teststufe", "Wartungstest", "White-Box-Test"
            ],
            subchapters: [
                {
                    id: "2.1",
                    title: "Testen im Kontext eines SDLC",
                    page: 28,
                    quote: "Ein Softwareentwicklungslebenszyklusmodell beschreibt die Aktivitäten, die in jeder Phase eines Entwicklungsprojekts durchgeführt werden, sowie deren logische und chronologische Beziehung zueinander.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "Der SDLC bestimmt, WANN und WIE getestet wird. Sequenziell (Wasserfall, V-Modell) vs. Iterativ (Agile, Scrum) haben unterschiedliche Testansätze.",
                            coachNote: "🎯 Prüfungsfokus: Sequenziell = dynamische Tests erst SPÄT möglich (Code fehlt). Iterativ = häufige, kleine Testrunden."
                        }
                    ],
                    subsections: [
                        {
                            id: "2.1.1",
                            title: "Auswirkungen des SDLC auf das Testen",
                            page: 28,
                            quote: "Testaktivitäten werden an den Softwareentwicklungslebenszyklus angepasst.",
                            keyPoints: [
                                {
                                    title: "Anpassung an den SDLC",
                                    content: "Testaktivitäten werden an den Softwareentwicklungslebenszyklus angepasst (sequenziell, iterativ, agil).",
                                    coachNote: "Sequenziell = Wasserfall (Phasen nacheinander). Iterativ/Agil = kurze Zyklen."
                                }
                            ]
                        },
                        {
                            id: "2.1.2",
                            title: "SDLC und gute Praktiken für das Testen",
                            page: 29,
                            quote: "Gute Praktiken: Zu jeder Entwicklungsaktivität gibt es eine entsprechende Testaktivität. Testen beginnt früh. Jede Teststufe verfolgt eigene Ziele.",
                            keyPoints: [
                                {
                                    title: "Bewährte Testpraktiken (für ALLE SDLCs)",
                                    content: "Der Lehrplan nennt mehrere bewährte Praktiken, die in ALLEN Lebenszyklusmodellen gelten:\n\n• Zu jeder Entwicklungsaktivität gibt es eine entsprechende Testaktivität\n• Jede Teststufe verfolgt spezifische, eigene Testziele\n• Testanalyse und -entwurf einer Teststufe beginnen bereits in der zugehörigen Entwicklungsphase\n• Tester sind frühzeitig in die Reviewaktivitäten eingebunden",
                                    coachNote: "🎯 Prüfungsfalle – Bewährte Testpraxis:\n\nGefragt: 'Welche Praxis gilt für ALLE SDLCs?'\n\n✅ 'Jede Teststufe verfolgt eigene Testziele' → IMMER wahr\n\n❌ Eliminierungshilfe:\n• 'Mit dem Testentwurf beginnen, sobald erste Entwürfe verfügbar sind' → zu spezifisch für sequenziell\n• 'Für jede dynamische Testaktivität gibt es eine statische' → falsche Zuordnung\n• 'Realisierung und Ausführung in der jeweiligen Entwicklungsphase beginnen' → gilt nicht IMMER\n\n💡 Schlüsselwort 'ALLE': Nur die allgemeinste Aussage ist richtig!"
                                },
                                {
                                    title: "Frühe Testaktivitäten",
                                    content: "Testplanung und Testanalyse können beginnen, sobald Dokumente der Testbasis verfügbar sind.",
                                    coachNote: "🎯 Prüfungsfalle – Sequenzieller SDLC:\n\nWas geht FRÜH im sequenziellen SDLC?\n✅ Statische Tests (Reviews)\n✅ Testplanung\n✅ Testanalyse\n\n❌ Was geht NICHT früh?\n• Dynamische Tests (Unit-Tests, etc.)\n  → brauchen ausführbaren Code!"
                                }
                            ]
                        },
                        {
                            id: "2.1.3",
                            title: "Testen als Treiber für die Softwareentwicklung",
                            page: 29,
                            quote: "Test-First-Ansätze: TDD, ATDD, BDD – Tests werden VOR der Implementierung geschrieben.",
                            keyPoints: [
                                {
                                    title: "TDD (Testgetriebene Entwicklung)",
                                    content: "Tests werden ZUERST geschrieben, dann wird Code implementiert, um die Tests zu bestehen. Die Tests STEUERN aktiv die Entwicklung.",
                                    coachNote: "🎯 TDD-Kernidee:\n\n1. Test schreiben (der noch fehlschlägt)\n2. Code schreiben (nur so viel, dass der Test besteht)\n3. Refactoring\n\nDas ist Test-First: Tests STEUERN die Codierung."
                                },
                                {
                                    title: "ATDD (Abnahmetestgetriebene Entwicklung)",
                                    content: "Abnahmetests werden VOR der Implementierung erstellt. Das Team (Kunden, Entwickler, Tester) schreibt gemeinsam Tests im GEGEBEN/WENN/DANN-Format, die dann die Entwicklung treiben.",
                                    coachNote: "🎯 ATDD = Akzeptanztests TREIBEN die Entwicklung\n\nFormat: GEGEBEN (Ausgangslage) → WENN (Aktion) → DANN (Erwartung)\n\nBeispiel:\nGEGEBEN: Ich bin als Admin angemeldet\nWENN: Ich 'Serverleistung überprüfen' wähle\nDANN: Wird mir eine Performanz-Übersicht angezeigt\n\n⚠️ Prüfungsfalle: Bei ATDD-Fragen auf VOLLSTÄNDIGE Szenarien achten – alle drei Teile (GEGEBEN/WENN/DANN) müssen zur User-Story passen!"
                                },
                                {
                                    title: "BDD (Verhaltensgetriebene Entwicklung)",
                                    content: "Tests beschreiben das gewünschte Verhalten im GIVEN/WHEN/THEN-Format. Fokus auf gemeinsames Verständnis durch natürlichsprachliche Spezifikationen.",
                                    coachNote: "🎯 Prüfungsfalle – Was ist Test-First und was NICHT?\n\nTest-First (Tests STEUERN die Entwicklung):\n• TDD → Tests VOR dem Code, steuern die Codierung\n• BDD → Verhalten VOR dem Code definiert\n• ATDD → Abnahmetests VOR der Implementierung\n\n❌ KEIN Test-First:\n'Tests aus Akzeptanzkriterien ABLEITEN und teilweise automatisieren'\n→ Das beschreibt einen normalen Testprozess!\n→ Tests werden NACH den Kriterien erstellt, nicht VOR dem Code\n→ Sie STEUERN die Entwicklung nicht aktiv\n\n💡 Schlüsselfrage: Werden Tests VOR dem Code geschrieben UND steuern sie die Codierung? Nur dann = Test-First!"
                                }
                            ]
                        },
                        {
                            id: "2.1.4",
                            title: "DevOps und Testen",
                            page: 30,
                            quote: "DevOps ist ein organisatorischer Ansatz, der Entwicklung und Betrieb zusammenbringt.",
                            keyPoints: [
                                {
                                    title: "CI/CD",
                                    content: "Fördert CI/CD (Continuous Integration/Delivery), schnelle Rückmeldungen, Testautomatisierung.",
                                    coachNote: "🎯 Prüfungsfalle – DevOps:\n\nVorteile:\n• Schnelles Feedback zur Codequalität\n• Automatisierte CI/CD-Prozesse\n• Stabile Testumgebungen\n• Shift-Left-Förderung\n\n❌ DevOps ersetzt NICHT Unabhängigkeit des Testens!"
                                }
                            ]
                        },
                        {
                            id: "2.1.5",
                            title: "Shift-Left-Ansatz",
                            page: 30,
                            quote: "Shift-Left bedeutet, dass Testaktivitäten früher im SDLC durchgeführt werden.",
                            keyPoints: [
                                {
                                    title: "Frühe Tests",
                                    content: "Frühe Reviews, frühe Testplanung, TDD. Ziel: Fehler früher finden = billiger beheben.",
                                    coachNote: "🎯 Prüfungsfalle – Shift-Left:\n\n✅ Shift-Left-Beispiele:\n• Anforderungen reviewen VOR Akzeptanz\n• Tests schreiben VOR Code (TDD)\n• Performance früh testen\n\n❌ KEIN Shift-Left:\n'Nicht-funktionale Tests erst auf Systemtest-Ebene'"
                                }
                            ]
                        },
                        {
                            id: "2.1.6",
                            title: "Retrospektiven und Prozessverbesserung",
                            page: 31,
                            quote: "Retrospektiven sind in agilen Projekten üblich. Das Team reflektiert über die Iteration und identifiziert Verbesserungen.",
                            keyPoints: [
                                {
                                    title: "Zweck",
                                    content: "Regelmäßige Reflexion des Teams zur kontinuierlichen Prozessverbesserung.",
                                    coachNote: "🎯 Prüfungsfalle – Retrospektiven:\n\nZweck: Kontinuierliche PROZESSVERBESSERUNG\n\n❌ FALSCH als Hauptzweck:\n• 'Team loben und motivieren'\n• 'Kunden gefallen'\n• 'Endnutzer-Feedback einholen'"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "2.2",
                    title: "Teststufen",
                    page: 32,
                    image: "images/vmodell_cc.png",
                    imageAttribution: "Herman Bruyninckx, CC BY-SA 3.0, via Wikimedia Commons",
                    quote: "Teststufen sind Gruppen von Testaktivitäten, die gemeinsam organisiert und verwaltet werden. Jede Teststufe ist eine Instanz des Testprozesses.",
                    keyPoints: [
                        {
                            title: "Komponententest",
                            content: "Prüft einzelne Komponenten (Module, Klassen) in Isolation. Oft vom Entwickler durchgeführt.",
                            coachNote: "Testobjekt: eine Komponente. Typische Fehler: Logik, Schnittstellen innerhalb der Komponente."
                        },
                        {
                            title: "Integrationstest",
                            content: "Prüft die Zusammenarbeit zwischen Komponenten (Komponentenintegrationstest) oder Systemen (Systemintegrationstest).",
                            coachNote: "Testobjekt: Schnittstellen und Datenfluss. Fehler: falsche Aufrufe, falsche Datenformate."
                        },
                        {
                            title: "Systemtest",
                            content: "Prüft das integrierte System als Ganzes gegen die Anforderungen (funktional und nicht-funktional).",
                            coachNote: "Testobjekt: vollständiges System. Unabhängige Tester typisch."
                        },
                        {
                            title: "Abnahmetest",
                            content: "Prüft, ob das System die Benutzerbedürfnisse und Abnahmekriterien erfüllt (Validierung).",
                            coachNote: "Abnahme = Kunde/Fachbereich sagt: 'Wir nehmen es ab.' Oft mit Fachbereichsvertretern."
                        }
                    ],
                    subsections: [
                        {
                            id: "2.2.1",
                            title: "Teststufen",
                            page: 32,
                            quote: "Komponententest = isolierte Komponenten. Integrationstest = Schnittstellen. Systemtest = Gesamtsystem. Abnahmetest = Benutzerbedürfnisse.",
                            keyPoints: [
                                {
                                    title: "Testobjekt pro Stufe",
                                    content: "Komponententest: Komponente. Integrationstest: Schnittstellen. Systemtest: System. Abnahmetest: System im Einsatzkontext.",
                                    coachNote: "🎯 Prüfungsfalle – Teststufen zuordnen:\n\n• Isolierte Komponente → Komponententest\n• Kommunikation zwischen Komp. → Integrationstest\n• Geschäftsanforderungen → ABNAHMETEST (nicht System!)\n• User-Story → Systemtest\n\n💡 Eselsbrücke – Wer testet was?\n• Komponente: ENTWICKLER (White-Box)\n• Integration: ENTWICKLER + TESTER\n• System: TESTER (unabhängig)\n• Abnahme: KUNDE/FACHBEREICH"
                                }
                            ]
                        },
                        {
                            id: "2.2.2",
                            title: "Testarten",
                            page: 33,
                            quote: "Testarten sind Gruppen von Testaktivitäten, die auf spezifische Qualitätsmerkmale ausgerichtet sind.",
                            keyPoints: [
                                {
                                    title: "Funktionaler Test",
                                    content: "Prüft, ob die Funktionen den Anforderungen entsprechen (Was macht das System?).",
                                    coachNote: "Black-Box: Kein Code nötig. Anforderungen reichen."
                                },
                                {
                                    title: "Nicht-funktionaler Test",
                                    content: "Prüft Eigenschaften wie Performance, Usability, Sicherheit, Zuverlässigkeit.",
                                    coachNote: "Nicht-funktional = WIE es funktioniert (schnell, benutzerfreundlich, sicher)."
                                },
                                {
                                    title: "Black-Box vs. White-Box",
                                    content: "Black-Box: Spezifikation/Verhalten, ohne Code. White-Box: interne Struktur (Code) wird einbezogen.",
                                    coachNote: "🎯 Prüfungsfalle – Black-Box vs. White-Box:\n\n📦 BLACK-BOX:\n• Testest das VERHALTEN von außen\n• Beispiele: Äquivalenzklassen, Grenzwerte\n\n🔍 WHITE-BOX:\n• Testest die STRUKTUR von innen\n• Beispiele: Anweisungs-, Zweigüberdeckung\n\n⚠️ 'Überdeckung'/'Coverage' → WHITE-BOX!"
                                }
                            ]
                        },
                        {
                            id: "2.2.3",
                            title: "Fehlernachtest und Regressionstest",
                            page: 34,
                            quote: "Fehlernachtest bestätigt, dass ein Fehler behoben wurde. Regressionstest prüft, ob die Änderung keine Seiteneffekte hat.",
                            keyPoints: [
                                {
                                    title: "Fehlernachtest (Bestätigungstest)",
                                    content: "Prüft, ob ein gemeldeter Fehler tatsächlich behoben wurde.",
                                    coachNote: "Fehlernachtest = 'Ist DER Bug jetzt weg?'"
                                },
                                {
                                    title: "Regressionstest",
                                    content: "Prüft, ob Änderungen unbeabsichtigte Seiteneffekte auf andere Teile des Systems haben.",
                                    coachNote: "🎯 Prüfungsfalle – Fehlernachtest vs. Regression:\n\n• Fehlernachtest = Bug ist weg?\n• Regressionstest = Neues kaputt durch Änderung?\n\nBeide sind nach JEDER Änderung nötig!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "2.3",
                    title: "Wartungstest",
                    page: 35,
                    quote: "Wartungstest konzentriert sich auf die Prüfung der Änderungen am System sowie auf das Testen der nicht geänderten Teile, die von den Änderungen betroffen sein könnten.",
                    keyPoints: [
                        {
                            title: "Was ist Wartungstest?",
                            content: "Wartungstest prüft Änderungen an einem bereits ausgelieferten System. Er umfasst sowohl das Testen der Änderung selbst als auch das Testen der nicht geänderten Teile, die betroffen sein könnten (Regressionstest).",
                            coachNote: "Regressionstest bei Wartung: Altes Verhalten darf nicht kaputtgehen."
                        }
                    ],
                    subsections: [
                        {
                            id: "2.3.1",
                            title: "Auslöser für Wartungstest",
                            page: 35,
                            quote: "Die Auslöser für die Wartung und den Wartungstest lassen sich in drei Kategorien einteilen: Änderungen, Migration und Außerbetriebnahme.",
                            keyPoints: [
                                {
                                    title: "Die 3 Auslöser für Wartungstest",
                                    content: "1. Änderungen (Modifications): Geplante Erweiterungen, korrektive Änderungen (Bugfixes), Hotfixes auf die Produktivversion.\n\n2. Migration/Upgrades: Wechsel der Betriebsplattform, z.B. neues Betriebssystem, neue Datenbank, neue Hardware. Hier muss das System in der neuen Umgebung getestet werden.\n\n3. Außerbetriebnahme (Retirement): Stillegung eines Systems. Hier wird z.B. die Wiederherstellbarkeit archivierter Daten getestet oder die Migration zu einem Nachfolgesystem.",
                                    coachNote: "🎯 Prüfungsfalle – Wartungstest vs. 'normale' Tests:\n\n✅ IST ein Wartungstest-Auslöser:\n• Hotfix auf Produktion → Änderung\n• Migration auf neue Plattform → Upgrade\n• System wird abgeschaltet → Retirement\n• Fehlerhafte Funktion entfernt → Korrektur\n\n❌ ist KEIN Wartungstest-Auslöser:\n• 'Wartbarkeit der Software testen' → Das ist ein nicht-funktionaler Test (Qualitätsmerkmal), kein Wartungstest!\n• 'Neue Funktion implementieren' → Das ist Entwicklung, nicht Wartung!\n\n💡 Eselsbrücke: Wartungstest ≠ Wartbarkeit testen!\nWartungstest = nach einer ÄNDERUNG am bestehenden System\nWartbarkeit = ein Qualitätsmerkmal (wie leicht KANN man ändern?)"
                                },
                                {
                                    title: "Umfang des Wartungstests",
                                    content: "Der Umfang hängt von Risiko, Größe und Art der Änderung ab. Auswirkungsanalyse (Impact Analysis) bestimmt, welche Bereiche betroffen sind und welche Regressionstests nötig sind.",
                                    coachNote: "Merke: Je größer die Änderung, desto mehr Regression nötig."
                                },
                                {
                                    title: "Fehlernachtest vs. Regressionstest",
                                    content: "Fehlernachtest: Prüft, ob der Fehler behoben ist. Regressionstest: Prüft, ob keine Seiteneffekte entstanden.",
                                    coachNote: "🎯 Prüfungsfalle – REIHENFOLGE:\n\n1️⃣ ERST Fehlernachtest\n   → Ist der Fehler wirklich behoben?\n\n2️⃣ DANN Regressionstest\n   → Wurden andere Bereiche beschädigt?\n\n❌ FALSCH:\n• 'Nur Fehlernachtest' → Seiteneffekte ungeprüft!\n• 'Erst Regression, dann Nachtest' → Reihenfolge falsch!\n\n💡 Merke: Regression befasst sich mit NEGATIVEN Auswirkungen auf UNVERÄNDERTE Bereiche"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // =========================================================================
        // KAPITEL 3: STATISCHER TEST (80 Min.)
        // =========================================================================
        {
            id: 3,
            icon: "📋",
            title: "Statischer Test",
            questionCount: "2",
            keywords: [
                "Anomalie", "dynamischer Test", "formales Review", "informelles Review",
                "Inspektion", "Review", "statische Analyse", "statischer Test",
                "Technisches Review", "Walkthrough"
            ],
            subchapters: [
                {
                    id: "3.1",
                    title: "Grundlagen des statischen Testens",
                    page: 38,
                    quote: "Im Gegensatz zum dynamischen Test, bei dem die Software ausgeführt werden muss, stützt sich der statische Test auf die manuelle Untersuchung von Arbeitsergebnissen (Reviews) oder die werkzeuggestützte Bewertung von Code oder anderen Arbeitsergebnissen (statische Analyse).",
                    keyPoints: [
                        {
                            title: "Statisch vs. Dynamisch",
                            content: "Statischer Test = OHNE Ausführung (Reviews, statische Analyse). Dynamischer Test = MIT Ausführung (Code läuft).",
                            coachNote: "🎯 Eselsbrücke: Statisch = 'Motor aus' (Dokumente lesen). Dynamisch = 'Motor läuft' (Software ausführen)."
                        }
                    ],
                    subsections: [
                        {
                            id: "3.1.1",
                            title: "Arbeitsergebnisse für statische Tests",
                            page: 38,
                            quote: "Fast jedes Arbeitsergebnis kann mit statischen Tests geprüft werden.",
                            keyPoints: [
                                {
                                    title: "Prüfbare Arbeitsergebnisse",
                                    content: "Anforderungen, Entwurfsdokumente, Code, Testmittel, Benutzerhandbücher, Webseiten, Verträge, Projektpläne.",
                                    coachNote: "Statischer Test prüft Arbeitsergebnisse (Code, Dokumente), ohne sie auszuführen."
                                }
                            ]
                        },
                        {
                            id: "3.1.2",
                            title: "Wert des statischen Tests",
                            page: 38,
                            quote: "Statischer Test ist ein kosteneffektives Mittel zur Erkennung von Fehlerzuständen.",
                            keyPoints: [
                                {
                                    title: "Vorteile",
                                    content: "Frühe Fehlererkennung, kostengünstig. Findet Fehlhandlungen bevor sie zu Fehlerzuständen im Code werden.",
                                    coachNote: "🎯 Prüfungsfalle – Wert des statischen Tests:\n\n✅ VORTEILE:\n• Frühe Fehlererkennung (billiger!)\n• Findet Fehler, die dynamisch schwer zu finden sind\n• Verbesserung der Kommunikation\n\n❌ NACHTEIL (wenn gefragt!):\n'Bewertung und Behebung kann aufwendig sein'\n→ Das ist der EINZIGE Nachteil im Lehrplan!"
                                }
                            ]
                        },
                        {
                            id: "3.1.3",
                            title: "Unterschiede zwischen statischem und dynamischem Test",
                            page: 39,
                            quote: "Statischer und dynamischer Test ergänzen sich, da sie unterschiedliche Arten von Fehlerzuständen finden.",
                            keyPoints: [
                                {
                                    title: "Unterschied",
                                    content: "Dynamisch = Ausführung nötig. Statisch = keine Ausführung, nur Analyse.",
                                    coachNote: "🎯 Prüfungsfalle – Statisch vs. Dynamisch:\n\n📋 STATISCH (keine Ausführung):\n• Findet Fehlerzustände DIREKT im Arbeitsergebnis\n• z.B. Inkonsistenzen in Anforderungen\n\n🏃 DYNAMISCH (mit Ausführung):\n• Findet Fehlerwirkungen (Symptome)\n• Braucht lauffähigen Code\n\n💡 Statisch findet Ursachen, Dynamisch findet Symptome"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "3.2",
                    title: "Feedback- und Reviewprozess",
                    page: 40,
                    quote: "Der Reviewprozess umfasst: Planung, Reviewbeginn, individuelles Review, Kommunikation und Analyse, Behebung und Berichterstattung.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "Reviews sind strukturierte Prüfungen von Arbeitsergebnissen. 4 Reviewarten: Informelles Review, Walkthrough, Technisches Review, Inspektion.",
                            coachNote: "🎯 Prüfungsfokus: Wer LEITET das Review? Walkthrough=AUTOR, Rest=MODERATOR. Inspektion=am FORMELLSTEN (mit Metriken)."
                        }
                    ],
                    subsections: [
                        {
                            id: "3.2.1",
                            title: "Vorteile frühzeitigen und häufigen Stakeholder-Feedbacks",
                            page: 40,
                            quote: "Frühzeitiges Feedback hilft, potenzielle Qualitätsprobleme zu vermeiden.",
                            keyPoints: [
                                {
                                    title: "Vorteile",
                                    content: "Vermeidet Missverständnisse bei Anforderungen, ermöglicht frühzeitige Kurskorrekturen.",
                                    coachNote: "🎯 Prüfungsfalle – Frühes Feedback:\n\n✅ VORTEIL: 'Missverständnisse bei Anforderungen vermeiden'\n\n❌ FALSCH:\n• 'Verbessert nur zukünftige Projekte'\n• 'Priorisiert Anforderungen'"
                                }
                            ]
                        },
                        {
                            id: "3.2.2",
                            title: "Aktivitäten des Reviewprozesses",
                            page: 41,
                            image: "images/reviewprozess_cc.png",
                            imageAttribution: "Eigene Darstellung nach ISTQB-Terminologie",
                            quote: "Reviewprozess: Planung, Reviewbeginn, individuelles Review, Kommunikation und Analyse, Behebung und Berichterstattung.",
                            keyPoints: [
                                {
                                    title: "1. Planung (Planning)",
                                    content: "Umfang, Ziel, Qualitätsmerkmale und Endekriterien des Reviews werden festgelegt. Ressourcen (Zeit, Personen) werden eingeplant.",
                                    coachNote: "Schlüsselwort: 'Kriterien festlegen' oder 'Ziel definieren' = IMMER Planung"
                                },
                                {
                                    title: "2. Reviewbeginn (Review Initiation)",
                                    content: "Das Arbeitsergebnis wird allen Beteiligten zugänglich gemacht. Alle haben Zugang zum zu prüfenden Dokument.",
                                    coachNote: "Schlüsselwort: 'zugänglich machen' oder 'verteilen' = IMMER Reviewbeginn"
                                },
                                {
                                    title: "3. Individuelles Review",
                                    content: "Jeder Gutachter prüft das Arbeitsergebnis ALLEINE und identifiziert Anomalien (potenzielle Fehler, Fragen, Verbesserungsvorschläge).",
                                    coachNote: "🎯 Schlüsselwörter:\n• 'Anomalien identifizieren' = individuelles Review\n• 'alleine prüfen' = individuelles Review\n• 'Vorschläge entwickeln' = individuelles Review\n\n⚠️ Prüfungsfalle:\n'Gutachter entwickeln Vorschläge' → INDIVIDUELL (nicht Kommunikation!)\n'Anomalien werden diskutiert' → KOMMUNIKATION (nicht individuell!)"
                                },
                                {
                                    title: "4. Kommunikation und Analyse",
                                    content: "Die gefundenen Anomalien werden im Team GEMEINSAM analysiert und diskutiert. Status, Verantwortlichkeit und nächste Schritte werden festgelegt.",
                                    coachNote: "Schlüsselwort: 'analysieren und diskutieren' = IMMER Kommunikation und Analyse"
                                },
                                {
                                    title: "5. Behebung und Berichterstattung",
                                    content: "Gefundene Fehler werden behoben, nötige Aktualisierungen durchgeführt. Der Reviewbericht dokumentiert die Ergebnisse.",
                                    coachNote: "🎯 Prüfungs-Eselsbrücke – Reihenfolge merken:\n\n📋 P-B-I-K-B = 'Planen, Beginnen, Individuell lesen, Kommunizieren, Beheben'\n\nOder als Geschichte:\n1. PLANEN → Was prüfen wir? (Kriterien)\n2. BEGINNEN → Dokument verteilen\n3. INDIVIDUELL → Jeder liest alleine\n4. KOMMUNIZIEREN → Gemeinsam besprechen\n5. BEHEBEN → Fehler fixen\n\n💡 Eliminierungstrick bei Zuordnungsfragen:\n• 'Diskutieren' → Kommunikation (klarste Zuordnung)\n• 'Alleine Anomalien finden' → Individuell\n• Dann bleiben nur Planung und Beginn übrig"
                                }
                            ]
                        },
                        {
                            id: "3.2.3",
                            title: "Rollen und Verantwortlichkeiten bei Reviews",
                            page: 42,
                            quote: "Typische Rollen: Manager, Autor, Moderator, Leser, Gutachter, Protokollant.",
                            keyPoints: [
                                {
                                    title: "Rollen",
                                    content: "Manager (Budget), Autor (Arbeitsergebnis), Moderator (Leitung), Gutachter (Prüfung), Protokollant (Dokumentation).",
                                    coachNote: "Manager stellt Ressourcen bereit, nimmt aber NICHT an Befund-Kommunikation teil!"
                                }
                            ]
                        },
                        {
                            id: "3.2.4",
                            title: "Reviewarten",
                            page: 42,
                            quote: "Informelles Review, Walkthrough, Technisches Review, Inspektion.",
                            keyPoints: [
                                {
                                    title: "Informelles Review",
                                    content: "Kein formaler Prozess. Autor bittet um Feedback (z.B. Peer-Review). Keine Dokumentation erforderlich.",
                                    coachNote: "Informell = schnell, wenig Aufwand."
                                },
                                {
                                    title: "Walkthrough",
                                    content: "AUTOR leitet die Sitzung. Hauptzweck: Kommunikation, Schulung, Vertrauen aufbauen.",
                                    coachNote: "🎯 Prüfungsfalle – Walkthrough:\n\n✅ AUTOR leitet\n✅ Zweck: Kommunikation/Schulung\n\n❌ Moderator leitet → NICHT Walkthrough!"
                                },
                                {
                                    title: "Technisches Review",
                                    content: "MODERATOR leitet. Ziel: Konsens erreichen, technische Probleme lösen.",
                                    coachNote: "🎯 Technisches Review = KONSENS + MODERATOR"
                                },
                                {
                                    title: "Inspektion",
                                    content: "Formalstes Review. Definierte Rollen, Metriken, Checklisten, Ein-/Endekriterien.",
                                    coachNote: "🎯 Prüfungsfalle – Inspektion:\n\n✅ Erkennungsmerkmale:\n• MODERATOR leitet\n• METRIKEN werden gesammelt!\n• Formale Rollen\n\n💡 'Metriken' in Antwort = Inspektion"
                                }
                            ]
                        },
                        {
                            id: "3.2.5",
                            title: "Erfolgsfaktoren für Reviews",
                            page: 43,
                            quote: "Erfolgsfaktoren: klare Ziele, richtige Teilnehmer, Checklisten, Management-Unterstützung, Review-Kultur.",
                            keyPoints: [
                                {
                                    title: "Erfolgsfaktoren",
                                    content: "Ausreichend Zeit, kleine Arbeitseinheiten, klare Ziele, Checklisten. Management sollte nicht bei der Befund-Kommunikation persönlich beteiligt sein.",
                                    coachNote: "🎯 Prüfungsfalle – Review-Erfolgsfaktoren:\n\n✅ Erfolgsfaktoren:\n• Kleine Arbeitsprodukte\n• Klare Ziele\n• Ausreichend Zeit\n\n❌ KEIN Erfolgsfaktor:\n'Management bei Befund-Kommunikation beteiligt'"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "3.3",
                    title: "Statische Analyse durch Werkzeuge",
                    page: 39,
                    quote: "Die statische Analyse ist für die Erkennung von Fehlerzuständen wichtig, die durch dynamische Tests schwer zu finden sind.",
                    keyPoints: [
                        {
                            title: "Automatische Prüfung",
                            content: "Werkzeuge analysieren Code oder Dokumente (Syntax, Standards, Metriken, Datenfluss) ohne Ausführung.",
                            coachNote: "Statische Analyse = Tool liest Code/Doku, führt ihn nicht aus."
                        },
                        {
                            title: "Typische Anomalien",
                            content: "Nicht erreichbarer Code, undefinierte Variablen, Verletzung von Codierstandards.",
                            coachNote: "Tool findet z.B. toten Code oder fehlende Initialisierung."
                        }
                    ]
                }
            ]
        },
        // =========================================================================
        // KAPITEL 4: TESTANALYSE UND -ENTWURF (390 Min.)
        // =========================================================================
        {
            id: 4,
            icon: "🔬",
            title: "Testanalyse und -entwurf",
            questionCount: "12",
            keywords: [
                "Abnahmekriterien", "Abnahmetestgetriebene Entwicklung", "Äquivalenzklassenbildung",
                "Anweisungstest", "Anweisungsüberdeckung", "Black-Box-Testverfahren",
                "Entscheidungstabellentest", "Erfahrungsbasiertes Testverfahren",
                "Exploratives Testen", "Grenzwertanalyse", "Intuitive Testfallermittlung",
                "Checklistenbasierter Test", "Überdeckung", "Überdeckungselement",
                "White-Box-Testverfahren", "Zweigtest", "Zweigüberdeckung",
                "Zustandsübergangstest"
            ],
            subchapters: [
                {
                    id: "4.1",
                    title: "Testverfahren im Überblick",
                    page: 43,
                    quote: "Testverfahren werden in drei Kategorien unterteilt: Black-Box-, White-Box- und erfahrungsbasierte Testverfahren.",
                    keyPoints: [
                        {
                            title: "Drei Kategorien",
                            content: "Black-Box (Spezifikation), White-Box (Code), Erfahrungsbasiert (Intuition). Der Hauptunterschied liegt in der TESTBASIS.",
                            coachNote: "🎯 Prüfungsfokus: Was unterscheidet die Kategorien? → Die TESTBASIS! Nicht: Teststufe, Testobjekt oder SDLC."
                        }
                    ],
                    subsections: [
                        {
                            id: "4.1.1",
                            title: "Kategorien von Testverfahren",
                            page: 43,
                            quote: "Testverfahren werden nach ihrer Testbasis unterschieden: Spezifikation (Black-Box), Code (White-Box), Erfahrung.",
                            keyPoints: [
                                {
                                    title: "Black-Box-Testverfahren",
                                    content: "Basieren auf Spezifikationen, Anforderungen oder dem erwarteten Verhalten. Keine Kenntnis des Codes nötig.",
                                    coachNote: "🎯 Black-Box = Verhalten prüfen\nTestbasis: Spezifikation\nBeispiele: Äquivalenzklassen, Grenzwerte"
                                },
                                {
                                    title: "White-Box-Testverfahren",
                                    content: "Basieren auf der internen Struktur und dem Code. Fokus: WIE das System implementiert ist.",
                                    coachNote: "🎯 White-Box = Struktur prüfen\nTestbasis: Code/Architektur\nBeispiele: Anweisungstest, Zweigtest"
                                },
                                {
                                    title: "Erfahrungsbasierte Testverfahren",
                                    content: "Basieren auf Wissen, Erfahrung und Intuition des Testers.",
                                    coachNote: "🎯 Erfahrungsbasiert = Intuition nutzen\nTestbasis: Tester-Erfahrung\nBeispiele: Explorativ, Checklisten"
                                },
                                {
                                    title: "Hauptunterschied",
                                    content: "Der wesentliche Unterschied liegt in der TESTBASIS: Spezifikation vs. Code vs. Erfahrung.",
                                    coachNote: "🎯 Prüfungsfalle – Was unterscheidet?\n\n❌ NICHT: Teststufe, Testobjekt, SDLC\n✅ SONDERN: Die TESTBASIS!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "4.2",
                    title: "Black-Box-Testverfahren",
                    page: 45,
                    quote: "Beim Black-Box-Test werden Testfälle auf der Grundlage von Spezifikationen, Dokumentation oder der Erfahrung des Testers abgeleitet, ohne auf die interne Struktur des Systems Bezug zu nehmen.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "4 Verfahren: Äquivalenzklassenbildung, Grenzwertanalyse, Entscheidungstabellentest, Zustandsübergangstest.",
                            coachNote: "Black-Box = Verhalten testen, ohne Code zu sehen."
                        }
                    ],
                    subsections: [
                        {
                            id: "4.2.1",
                            title: "Äquivalenzklassenbildung",
                            page: 45,
                            image: "images/aequivalenzklassen_cc.png",
                            imageAttribution: "Eigene Darstellung nach ISTQB-Terminologie",
                            quote: "Bei der Äquivalenzklassenbildung werden Daten in Klassen unterteilt, wobei davon ausgegangen wird, dass alle Elemente einer Klasse vom Testobjekt auf die gleiche Weise verarbeitet werden.",
                            keyPoints: [
                                {
                                    title: "Prinzip",
                                    content: "Eingaben in Klassen einteilen, die gleiches Verhalten erwarten lassen. Ein repräsentativer Wert pro Klasse reduziert Testfälle.",
                                    coachNote: "🎯 Prüfungsfokus – Minimale Testfälle:\n\nRegel: EIN Wert pro Äquivalenzklasse\n(auch ungültige Klassen!)\n\n💡 Frage: 'Wie viele Testfälle minimal?'\n→ Klassen zählen, je 1 Wert\n\n⚠️ ÄK und GWA zusammen in der Prüfung:\n• ÄK-Testfälle: repräsentative Werte AUS den Klassen\n• GWA-Testfälle: Werte AN den Grenzen ZWISCHEN den Klassen\n→ GWA ergänzt ÄK, ersetzt sie nicht!"
                                },
                                {
                                    title: "📝 Rechenbeispiel: Fitness-App",
                                    content: "Schritte pro Tag mit Feedback:\n• ≤1000: 'Couch Potato'\n• 1001-2000: 'Komm in die Puschen'\n• 2001-4000: 'Die Richtung stimmt'\n• 4001-6000: 'Gut gemacht'\n• >6000: 'Super'",
                                    coachNote: "📊 LÖSUNG:\n\n5 Äquivalenzklassen → 5 Testfälle minimal\n\nÄK1: ≤1000 → Testwert: 500\nÄK2: 1001-2000 → Testwert: 1500\nÄK3: 2001-4000 → Testwert: 3000\nÄK4: 4001-6000 → Testwert: 5000\nÄK5: >6000 → Testwert: 7000\n\n⚠️ Typische Prüfungsfrage:\n'Welche Werte decken die MEISTEN ÄKs ab?'\n→ Zähle, wie viele VERSCHIEDENE Klassen!"
                                }
                            ]
                        },
                        {
                            id: "4.2.2",
                            title: "Grenzwertanalyse",
                            page: 46,
                            image: "images/grenzwertanalyse_cc.png",
                            imageAttribution: "Eigene Darstellung nach ISTQB-Terminologie",
                            quote: "Die Grenzwertanalyse basiert auf der Überprüfung der Grenzen von Äquivalenzklassen. Bei der 2-Wert-Analyse gibt es für jeden Grenzwert zwei Überdeckungselemente: den Grenzwert und seinen engsten Nachbarn.",
                            keyPoints: [
                                {
                                    title: "2-Wert vs. 3-Wert",
                                    content: "2-Wert-GWA: Pro Grenze gibt es ZWEI Überdeckungselemente – den letzten Wert der einen Klasse und den ersten Wert der nächsten Klasse. 3-Wert-GWA: Grenzwert + beide direkten Nachbarn.",
                                    coachNote: "🎯 So identifizierst du Grenzwerte richtig:\n\n1. Äquivalenzklassen aus der Spezifikation ableiten\n2. An JEDER Grenze zwischen zwei Klassen: die zwei direkt benachbarten Werte sind die Grenzwerte\n\nBeispiel: Bis 10°C / 11-15°C / 16-19°C / 20-22°C / Über 22°C\n→ Grenzen: 10|11, 15|16, 19|20, 22|23\n→ 8 Grenzwerte bei 2-Wert-GWA\n\n⚠️ Typische Prüfungsfehler:\n• 0°C als Grenzwert zählen → FALSCH (kein Klassenwechsel bei 0!)\n• Werte ZWISCHEN den Grenzen als Grenzwerte zählen\n• Ungültige Randbereiche vergessen (z.B. -1, 101)\n\n💡 Tipp: Erst ALLE Grenzen aufschreiben, dann für jede Option zählen, wie viele davon abgedeckt werden."
                                },
                                {
                                    title: "📝 Rechenbeispiel: Notenberechnung",
                                    content: "Punkte 0-100 mit Grenzen:\n• 0-50: nicht bestanden\n• 51-70: ausreichend\n• 71-90: gut\n• 91-100: sehr gut",
                                    coachNote: "📊 LÖSUNG (2-Wert-GWA):\n\nSchritt 1 – Äquivalenzklassen + ungültige Bereiche:\nUngültig: <0 | 0-50 | 51-70 | 71-90 | 91-100 | Ungültig: >100\n\nSchritt 2 – Grenzen zwischen den Klassen:\n• <0 | 0 → Grenzwerte: -1, 0\n• 50 | 51 → Grenzwerte: 50, 51\n• 70 | 71 → Grenzwerte: 70, 71\n• 90 | 91 → Grenzwerte: 90, 91\n• 100 | >100 → Grenzwerte: 100, 101\n\n10 Überdeckungselemente:\n-1, 0, 50, 51, 70, 71, 90, 91, 100, 101\n\n⚠️ Prüfungsrechnung:\n'Wie viele der gegebenen Testfälle sind Grenzwerte?'\n→ Jeden Testwert gegen die 10 Überdeckungselemente prüfen\n→ Überdeckung = Treffer / 10 × 100%"
                                }
                            ]
                        },
                        {
                            id: "4.2.3",
                            title: "Entscheidungstabellentest",
                            page: 47,
                            image: "images/a_q20.png",
                            imageAttribution: "GTB Sample Exam A, Frage 22",
                            quote: "Entscheidungstabellen werden zum Testen der Umsetzung von Anforderungen verwendet, die angeben, wie verschiedene Kombinationen von Bedingungen zu unterschiedlichen Ergebnissen führen.",
                            keyPoints: [
                                {
                                    title: "Notation",
                                    content: "Spalten = Regeln (Testfälle). Zeilen = Bedingungen + Aktionen. J=Ja, N=Nein, -=irrelevant, N/A=undurchführbar.",
                                    coachNote: "🎯 Prüfungsfalle – Entscheidungstabelle:\n\n📊 Anzahl Testfälle zählen:\n• Nur DURCHFÜHRBARE Spalten zählen!\n• '-' = Bedingung egal (nicht 2 Testfälle)\n• Undurchführbar = überspringen\n\n💡 Wenn Tabelle gegeben: Spalten zählen (abzgl. undurchführbar)"
                                }
                            ]
                        },
                        {
                            id: "4.2.4",
                            title: "Zustandsübergangstest",
                            page: 48,
                            image: "images/f_q23.png",
                            imageAttribution: "GTB Sample Exam F, Frage 23",
                            quote: "Ein Zustandsdiagramm modelliert das Verhalten eines Systems, indem es seine möglichen Zustände und gültigen Übergänge aufzeigt.",
                            keyPoints: [
                                {
                                    title: "Überdeckungskriterien",
                                    content: "Alle Zustände: jeden Zustand 1x. 0-Switch: jeden gültigen Übergang 1x. Alle Übergänge: gültige + ungültige.",
                                    coachNote: "🎯 Prüfungsfalle – Überdeckungskriterien:\n\n• Alle Zustände: Jeder Zustand mindestens 1x besucht\n• 0-Switch (gültige Übergänge): Jeder GÜLTIGE Übergang 1x\n• Alle Übergänge: Gültige UND ungültige Übergänge\n\n⚠️ Ungültige Übergänge: nur 1 pro Testfall (Fehlermaskierung vermeiden!)"
                                },
                                {
                                    title: "📝 Rechenbeispiel: Mindestzahl Testfälle",
                                    content: "System mit Zuständen:\nINIT → (test) → TEST → (done) → OFF\nINIT → (run) → RUN → (error) → OFF\nRUN ↔ (pause/resume) ↔ PAUSE → (done) → OFF",
                                    coachNote: "📊 LÖSUNG (100% Übergangsüberdeckung):\n\n7 gültige Übergänge identifizieren:\n1. INIT→TEST (test)\n2. TEST→OFF (done)\n3. INIT→RUN (run)\n4. RUN→OFF (error)\n5. RUN→PAUSE (pause)\n6. PAUSE→RUN (resume)\n7. PAUSE→OFF (done)\n\nMindestzahl Testfälle: 3\n\nTF1: INIT→test→TEST→done→OFF (deckt 1,2)\nTF2: INIT→run→RUN→error→OFF (deckt 3,4)\nTF3: INIT→run→RUN→pause→PAUSE→resume→RUN→pause→PAUSE→done→OFF (deckt 3,5,6,5,7)\n\n⚠️ 'test' und 'run' schließen sich aus → mindestens 2 TFs nötig!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "4.3",
                    title: "White-Box-Testverfahren",
                    page: 49,
                    quote: "Beim White-Box-Test werden die Tests auf der Grundlage der internen Struktur oder Implementierung des Systems abgeleitet. Dazu gehören Code, Architektur und Datenflüsse.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "Testet die interne Struktur. Überdeckungsmaße: Anweisungs- und Zweigüberdeckung.",
                            coachNote: "White-Box = Code sehen und Struktur testen."
                        }
                    ],
                    subsections: [
                        {
                            id: "4.3.1",
                            title: "Anweisungstest und Anweisungsüberdeckung",
                            page: 50,
                            image: "images/kontrollflussgraph_cc.png",
                            imageAttribution: "Eigene Darstellung nach ISTQB-Terminologie",
                            quote: "Beim Anweisungstest sind die Überdeckungselemente ausführbare Anweisungen. Die Überdeckung wird als Anzahl der durch die Testfälle ausgeführten Anweisungen, geteilt durch die Gesamtzahl der ausführbaren Anweisungen, gemessen.",
                            keyPoints: [
                                {
                                    title: "Formel",
                                    content: "Anweisungsüberdeckung = (ausgeführte Anweisungen ÷ ausführbare Anweisungen) × 100%",
                                    coachNote: "🎯 Prüfungsfalle – Anweisungsüberdeckung:\n\n✅ RICHTIG: Prozentsatz ausgeführter Anweisungen\n\n❌ FALSCH (typische Fallen):\n• 'Anzahl Testfälle'\n• 'Fehlerwirkungen'\n• Antworten ohne '%'"
                                },
                                {
                                    title: "📝 Rechenbeispiel: Anweisungsüberdeckung",
                                    content: "Code mit 5 Anweisungen:\n1: read(x)\n2: if (x > 0)\n3:   print('positiv')\n4: else\n5:   print('nicht positiv')",
                                    coachNote: "📊 LÖSUNG:\n\nTestfall x=5 durchläuft: 1→2→3\n→ 3 von 5 Anweisungen = 60%\n\nTestfall x=-1 durchläuft: 1→2→5\n→ 3 von 5 Anweisungen = 60%\n\nBEIDE Testfälle zusammen:\n→ 1,2,3,5 = 4 von 5 = 80%\n\n⚠️ Für 100% brauchen wir Zeile 4?\nNEIN! 'else' ist keine ausführbare Anweisung!\n→ 4 ausführbare = 100% erreicht"
                                }
                            ]
                        },
                        {
                            id: "4.3.2",
                            title: "Zweigtest und Zweigüberdeckung",
                            page: 50,
                            image: "images/c_q24.png",
                            imageAttribution: "GTB Sample Exam C, Frage 24",
                            quote: "Ein Zweig ist ein Kontrollübergang zwischen zwei Knoten im Kontrollflussgraph. Bei 100% Zweigüberdeckung werden alle Zweige (TRUE und FALSE) jeder Entscheidung ausgeführt.",
                            keyPoints: [
                                {
                                    title: "Stärker als Anweisungsüberdeckung",
                                    content: "Jeder Zweig (True/False) jeder Entscheidung muss mindestens einmal ausgeführt werden. 100% Zweig → 100% Anweisung (aber nicht umgekehrt!).",
                                    coachNote: "🎯 Prüfungsfalle – Zweigüberdeckung:\n\n📌 Was ist ein 'Zweig'?\nBei einer if-Bedingung gibt es ZWEI Wege:\n• TRUE-Zweig (Bedingung erfüllt)\n• FALSE-Zweig (Bedingung nicht erfüllt)\n\n✅ 100% Zweigüberdeckung = BEIDE Wege getestet\n\n⚠️ Zweigüberdeckung ist STÄRKER als Anweisungsüberdeckung"
                                },
                                {
                                    title: "📝 Rechenbeispiel: Zweig vs. Anweisung",
                                    content: "Code:\n1: read(x)\n2: if (x > 0)\n3:   print('positiv')\n4: print('fertig')",
                                    coachNote: "📊 LÖSUNG:\n\n4 Anweisungen, 2 Zweige (TRUE/FALSE bei Zeile 2)\n\nTestfall x=5:\n→ Durchläuft: 1→2(TRUE)→3→4\n→ Anweisungen: 4/4 = 100% ✅\n→ Zweige: 1/2 = 50% ❌\n\nFür 100% Zweigüberdeckung AUCH x=-1 nötig:\n→ Durchläuft: 1→2(FALSE)→4\n→ Zweige: 2/2 = 100% ✅\n\n⚠️ WICHTIG:\n100% Anweisung ≠ 100% Zweig!\nEin Testfall kann ALLE Anweisungen abdecken,\naber trotzdem Zweige verpassen!"
                                }
                            ]
                        },
                        {
                            id: "4.3.3",
                            title: "Wert des White-Box-Tests",
                            page: 51,
                            quote: "Eine grundlegende Stärke aller White-Box-Testverfahren ist, dass die gesamte Softwareimplementierung berücksichtigt wird. Eine Schwäche ist, dass fehlende Implementierung nicht gefunden wird.",
                            keyPoints: [
                                {
                                    title: "Stärke & Schwäche",
                                    content: "Stärke: Gesamte Implementierung wird geprüft. Schwäche: Fehlende Anforderungen/Code werden NICHT gefunden.",
                                    coachNote: "⚠️ Prüfungsfalle – White-Box-Schwäche:\n\n❌ IMMER FALSCH:\n'White-Box kann fehlende Implementierung identifizieren'\n\n💡 Merke:\nWhite-Box testet NUR vorhandenen Code.\nWas nicht da ist, findet es nicht!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "4.4",
                    title: "Erfahrungsbasierte Testverfahren",
                    page: 51,
                    quote: "Erfahrungsbasierte Testverfahren nutzen das Wissen und die Erfahrung der Tester, um Testfälle abzuleiten.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "3 Verfahren: Intuitive Testfallermittlung (Error Guessing), Explorativer Test, Checklistenbasierter Test. Nutzen die Erfahrung und das Wissen des Testers.",
                            coachNote: "Erfahrungsbasiert = ergänzt Black-Box und White-Box, ersetzt sie nicht!"
                        }
                    ],
                    subsections: [
                        {
                            id: "4.4.1",
                            title: "Intuitive Testfallermittlung (Error Guessing)",
                            page: 51,
                            quote: "Intuitive Testfallermittlung nutzt das Wissen des Testers über frühere Fehler und typische Fehlerquellen.",
                            keyPoints: [
                                {
                                    title: "Erfahrungsbasiert",
                                    content: "Tester nutzt Erfahrung, um typische Fehlhandlungen und Fehlerzustände zu erraten. Basiert auf Wissen über frühere Fehler.",
                                    coachNote: "🎯 Prüfungsfalle – Error Guessing:\n\n✅ RICHTIG: Wissen über frühere Fehler nutzen\n\n❌ FALSCH:\n• 'Entwicklungserfahrung nötig'\n• 'Benutzerinteraktion erraten'\n• 'Entwicklung selbst durchführen'"
                                }
                            ]
                        },
                        {
                            id: "4.4.2",
                            title: "Explorativer Test",
                            page: 52,
                            quote: "Beim explorativen Testen werden Testentwurf, -durchführung und Lernen gleichzeitig durchgeführt.",
                            keyPoints: [
                                {
                                    title: "Gleichzeitig",
                                    content: "Lernen, Testentwurf und -durchführung laufen gleichzeitig. Sitzungsbasiert mit Test-Charta und Zeitrahmen.",
                                    coachNote: "🎯 Prüfungsfalle – Wann Explorativer Test?\n\n✅ RICHTIG wählen bei:\n• 'Wenig Spezifikation'\n• 'Enger Zeitplan'\n• 'Detailwissen und Erfahrung'\n• 'Schnelle Ergebnisse gefordert'\n\n❌ NICHT bei: 'Viel Zeit', 'Ausführliche Spezifikation'"
                                }
                            ]
                        },
                        {
                            id: "4.4.3",
                            title: "Checklistenbasierter Test",
                            page: 52,
                            quote: "Beim checklistenbasierten Testen werden Testfälle auf Basis von Checklisten erstellt.",
                            keyPoints: [
                                {
                                    title: "Checklisten nutzen",
                                    content: "Checklisten aus Erfahrung, Risiken oder Anforderungen. Muss regelmäßig aktualisiert werden, da Einträge an Effektivität verlieren können.",
                                    coachNote: "Checkliste = was nicht vergessen werden soll. Regelmäßig pflegen, sonst Pestizid-Paradoxon!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "4.5",
                    title: "Auf Zusammenarbeit basierende Testansätze",
                    page: 53,
                    quote: "Auf Zusammenarbeit basierende Testansätze konzentrieren sich darauf, Fehlerzustände durch Zusammenarbeit und Kommunikation zwischen verschiedenen Stakeholdern zu vermeiden.",
                    keyPoints: [
                        {
                            title: "Fokus auf Vermeidung",
                            content: "Im Gegensatz zu anderen Testverfahren (die Fehler finden) konzentrieren sich kollaborative Ansätze auf die Vermeidung von Fehlerzuständen durch Zusammenarbeit.",
                            coachNote: "Andere Verfahren: Fehler FINDEN. Kollaborativ: Fehler VERMEIDEN durch Kommunikation."
                        }
                    ],
                    subsections: [
                        {
                            id: "4.5.1",
                            title: "Gemeinsames Schreiben von User-Storys",
                            page: 53,
                            keyPoints: [
                                {
                                    title: "Die 3 Cs",
                                    content: "User-Storys haben drei kritische Aspekte: Card (Medium), Conversation (Erklärung der Nutzung), Confirmation (Akzeptanzkriterien).",
                                    coachNote: "🎯 Prüfungsfokus – 3 Cs:\n\n• Card = Karte/Medium\n• Conversation = Gespräch\n• Confirmation = Bestätigung (Akzeptanzkriterien)"
                                },
                                {
                                    title: "User-Story-Format",
                                    content: "Gängiges Format: 'Als [Rolle] möchte ich [Ziel], so dass ich [Nutzen]', gefolgt von Akzeptanzkriterien.",
                                    coachNote: "Beispiel: Als Kunde möchte ich Produkte filtern, so dass ich schneller finde, was ich suche."
                                },
                                {
                                    title: "INVEST-Prinzip",
                                    content: "Gute User-Storys sind: Independent (unabhängig), Negotiable (verhandelbar), Valuable (nützlich), Estimable (schätzbar), Small (klein), Testable (testbar).",
                                    coachNote: "🎯 Prüfungsfalle – INVEST:\n\nI = Independent (unabhängig)\nN = Negotiable (verhandelbar)\nV = Valuable (nützlich)\nE = Estimable (schätzbar)\nS = Small (klein)\nT = Testable (testbar)\n\n💡 Nicht testbar = User-Story nicht klar genug!"
                                },
                                {
                                    title: "Drei Perspektiven",
                                    content: "Bei der Zusammenarbeit werden drei Perspektiven berücksichtigt: Fachlichkeit (Business), Entwicklung und Testen.",
                                    coachNote: "Alle drei Perspektiven sorgen für gemeinsame Vision."
                                }
                            ]
                        },
                        {
                            id: "4.5.2",
                            title: "Akzeptanzkriterien",
                            page: 54,
                            keyPoints: [
                                {
                                    title: "Definition",
                                    content: "Akzeptanzkriterien sind Bedingungen, die eine User-Story-Implementierung erfüllen muss, um von Stakeholdern akzeptiert zu werden.",
                                    coachNote: "Akzeptanzkriterien = Testbedingungen für die User-Story."
                                },
                                {
                                    title: "Verwendungszwecke",
                                    content: "Definieren den Umfang, erreichen Konsens, beschreiben positive UND negative Szenarien, dienen als Basis für Abnahmetests, ermöglichen genaue Planung.",
                                    coachNote: "Akzeptanzkriterien sind Grundlage für ATDD-Testfälle."
                                },
                                {
                                    title: "Zwei Formate",
                                    content: "Szenarioorientiert (Gegeben/Wenn/Dann – BDD-Format) oder Regelorientiert (Aufzählungspunkte, Tabellen).",
                                    coachNote: "🎯 Prüfungsfalle – Formate:\n\n• Szenarioorientiert = Gegeben/Wenn/Dann (BDD)\n• Regelorientiert = Listen, Tabellen\n\nBeide Formate sind gleichwertig!"
                                }
                            ]
                        },
                        {
                            id: "4.5.3",
                            title: "Abnahmetestgetriebene Entwicklung (ATDD)",
                            page: 55,
                            keyPoints: [
                                {
                                    title: "Test-First-Ansatz",
                                    content: "ATDD ist ein Test-First-Ansatz: Testfälle werden VOR der Implementierung der User-Story erstellt. Verschiedene Perspektiven (Kunden, Entwickler, Tester) wirken mit.",
                                    coachNote: "🎯 ATDD = Tests ZUERST, dann Implementierung\n\nDie Testfälle werden im GEGEBEN/WENN/DANN-Format geschrieben und treiben aktiv die Entwicklung."
                                },
                                {
                                    title: "Spezifikationsworkshop",
                                    content: "Erster Schritt: User-Story und Akzeptanzkriterien werden gemeinsam analysiert, diskutiert und geschrieben. Unvollständigkeiten und Mehrdeutigkeiten werden behoben.",
                                    coachNote: "Workshop = gemeinsames Verständnis schaffen. Drei Perspektiven: Kunde (WAS), Entwickler (WIE), Tester (WAS WENN NICHT)."
                                },
                                {
                                    title: "Testfälle erstellen",
                                    content: "Testfälle basieren auf Akzeptanzkriterien und dienen als Beispiele für die Funktionsweise. Erst positive Testfälle, dann negative, dann nicht-funktionale.",
                                    coachNote: "🎯 Prüfungsfokus – ATDD-Testfälle:\n\nFormat: GEGEBEN/WENN/DANN\n\n1. Positive Testfälle (Happy Path)\n2. Negative Testfälle (Fehler/Ausnahmen)\n3. Nicht-funktionale Tests (Performance, etc.)\n\n⚠️ Prüfungsfalle bei ATDD-Fragen:\nAlle drei Teile (GEGEBEN/WENN/DANN) müssen zur User-Story passen!\n• Richtige ROLLE? (z.B. Admin, nicht Benutzer)\n• Richtige AKTION? (was die Story verlangt)\n• Richtiges ERGEBNIS? (nicht nur irgendein Output)"
                                },
                                {
                                    title: "Automatisierung",
                                    content: "Wenn Testfälle in einem vom Testautomatisierungsframework unterstützten Format erfasst werden, können Entwickler sie automatisieren. Abnahmetests werden zu ausführbaren Anforderungen.",
                                    coachNote: "ATDD + Automatisierung = lebende Dokumentation."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // =========================================================================
        // KAPITEL 5: MANAGEMENT DER TESTAKTIVITÄTEN (335 Min.)
        // =========================================================================
        {
            id: 5,
            icon: "📊",
            title: "Management der Testaktivitäten",
            questionCount: "10",
            keywords: [
                "Anomalie", "Eingangskriterium", "Endekriterium", "Fehlermanagement",
                "Konfigurationsmanagement", "Produkt-Risikoanalyse", "Projektrisiko",
                "Produktrisiko", "Risiko", "Risikoexposition", "Risikosteuerung",
                "Testabschlussbericht", "Testfortschrittsbericht", "Testkonzept",
                "Testüberwachung", "Teststeuerung"
            ],
            subchapters: [
                {
                    id: "5.1",
                    title: "Testplanung",
                    page: 57,
                    quote: "Ein Testkonzept beschreibt die Testziele, Ressourcen und Prozesse für ein Testprojekt.",
                    keyPoints: [
                        {
                            title: "Testkonzept",
                            content: "Übergeordnetes Dokument: Testziele, Umfang, Teststufen, Ansatz, Ressourcen, Zeitplan. Wird in Testpläne verfeinert.",
                            coachNote: "Testkonzept = der Masterplan fürs Testen."
                        },
                        {
                            title: "Eingangs- und Endekriterien",
                            content: "Eingangskriterien: Wann darf mit dem Test begonnen werden? Endekriterien: Wann ist der Test abgeschlossen?",
                            coachNote: "Eingang = bereit zum Start (z.B. Testumgebung bereit). Ende = Ziel erreicht (z.B. Fehlerdichte, Berichte)."
                        },
                        {
                            title: "Drei-Punkt-Schätzung",
                            content: "Schätzmethode: E = (O + 4×W + P) ÷ 6. O=Optimistisch, W=Wahrscheinlich, P=Pessimistisch.",
                            coachNote: "🎯 Prüfungsfalle – Formel merken:\n\nE = (O + 4×W + P) ÷ 6\n\n• Wahrscheinlich wird 4-fach gewichtet!\n• NICHT einfacher Durchschnitt\n\nBeispiel: O=2, W=11, P=14\n→ (2 + 44 + 14) ÷ 6 = 10"
                        }
                    ],
                    subsections: [
                        {
                            id: "5.1.1",
                            title: "Zweck und Inhalt eines Testkonzepts",
                            page: 57,
                            quote: "Ein Testkonzept dokumentiert die Mittel und den Zeitplan für das Erreichen von Testzielen.",
                            keyPoints: [
                                {
                                    title: "Zweck des Testkonzepts",
                                    content: "Ein Testkonzept dokumentiert Testziele, Ressourcen, Zeitplan und Testansatz. Es wird kontinuierlich während des Projekts angepasst.",
                                    coachNote: "Testkonzept = strategisches Dokument fürs gesamte Testvorhaben."
                                },
                                {
                                    title: "Typische Inhalte",
                                    content: "Kontext des Testens (Umfang, Ziele, Risiken), Kommunikation (Stakeholder, Berichte), Risikoverzeichnis, Testansatz (Teststufen, Testarten, Testverfahren, Überdeckungsmaße), Testdurchführung und -steuerung.",
                                    coachNote: "🎯 Prüfungsfrage-Muster:\n\n'Gehört X zum Testkonzept?'\n\n✅ JA: Teststufen, Endekriterien, Testansatz, Risiken, Überdeckungsziele\n❌ NEIN: Konkrete Testdaten, detaillierte Testfälle"
                                },
                                {
                                    title: "Testansatz im Testkonzept",
                                    content: "Der Testansatz beschreibt WIE getestet wird: Teststufen, Testarten, Testverfahren und Überdeckungskriterien (z.B. '100% Zweigüberdeckung für kritische Komponenten').",
                                    coachNote: "🎯 Prüfungsfalle:\n\n'100% Zweigüberdeckung muss erreicht werden' → Gehört zum TESTANSATZ im Testkonzept\n\nNICHT zu: Testumgebung, Risikoverzeichnis, Kontext"
                                }
                            ]
                        },
                        {
                            id: "5.1.2",
                            title: "Die Beiträge des Testers zur Iterations- und Release-Planung",
                            page: 58,
                            quote: "In iterativer Entwicklung beteiligt sich der Tester an der Release-Planung (grobe Schätzungen) und Iterationsplanung (detaillierte User-Story-Analyse).",
                            keyPoints: [
                                {
                                    title: "Release-Planung",
                                    content: "Tester tragen zur Release-Planung bei durch: Identifikation testbarer User-Storys, Risikobewertung, Testaufwandsschätzung, Definition des Testansatzes.",
                                    coachNote: "🎯 Release-Planung: Grobe Planung über mehrere Iterationen. Tester bewerten RISIKEN und schätzen AUFWAND."
                                },
                                {
                                    title: "Iterationsplanung",
                                    content: "Tester tragen zur Iterationsplanung bei durch: Detaillierte Risikoanalyse für User-Storys, Bestimmung der Testbarkeit, Aufbrechen in Testaufgaben, Schätzung des Testaufwands, Definition von Akzeptanzkriterien.",
                                    coachNote: "🎯 Iterationsplanung: Detaillierte Planung für EINE Iteration. Tester helfen bei AKZEPTANZKRITERIEN."
                                },
                                {
                                    title: "Testbarkeit prüfen",
                                    content: "Tester prüfen, ob User-Storys testbar sind. Eine User-Story muss klar definierte Akzeptanzkriterien haben, damit sie testbar ist.",
                                    coachNote: "Keine klaren Akzeptanzkriterien = nicht testbar = Nacharbeit nötig!"
                                }
                            ]
                        },
                        {
                            id: "5.1.3",
                            title: "Eingangskriterien und Endekriterien",
                            page: 58,
                            quote: "Eingangskriterien definieren die Voraussetzungen für das Starten einer Aktivität. Endekriterien definieren, wann eine Aktivität als abgeschlossen gilt.",
                            keyPoints: [
                                {
                                    title: "Eingangskriterien (Entry Criteria)",
                                    content: "Voraussetzungen zum Starten einer Testaktivität: z.B. Verfügbarkeit der Testumgebung, Verfügbarkeit der Testwerkzeuge, Verfügbarkeit des Testobjekts, Verfügbarkeit der Testdaten.",
                                    coachNote: "🎯 Eingangskriterien = 'Dürfen wir starten?'\n\nBeispiele:\n• Testumgebung bereit\n• Build verfügbar\n• Testdaten vorhanden"
                                },
                                {
                                    title: "Endekriterien (Exit Criteria)",
                                    content: "Bedingungen zum Beenden einer Testaktivität: z.B. definierte Überdeckung erreicht, Anzahl offener Fehler unter Schwellwert, geschätzte Fehlerdichte niedrig genug.",
                                    coachNote: "🎯 Endekriterien = 'Sind wir fertig?'\n\nBeispiele:\n• 100% Anweisungsüberdeckung erreicht\n• Keine kritischen offenen Fehler\n• Alle geplanten Testfälle durchgeführt"
                                },
                                {
                                    title: "Typische Anwendung",
                                    content: "Eingangskriterien für Testdurchführung: Code eingecheckt, Smoke-Test bestanden. Endekriterien für Release: Keine Blocker, definierte Testabdeckung erreicht.",
                                    coachNote: "In agilen Projekten oft als 'Definition of Ready' und 'Definition of Done' bezeichnet."
                                }
                            ]
                        },
                        {
                            id: "5.1.4",
                            title: "Schätztechniken",
                            page: 59,
                            quote: "Der Testaufwand kann mit verschiedenen Verfahren geschätzt werden, u.a. Verhältnisschätzung, Extrapolation und Wideband Delphi (Planungspoker).",
                            keyPoints: [
                                {
                                    title: "Schätzverfahren im Überblick",
                                    content: "ISTQB nennt mehrere Schätztechniken: Verhältnisschätzung (ratio-based), Extrapolation, Wideband Delphi/Planungspoker und Drei-Punkt-Schätzung.",
                                    coachNote: "Verschiedene Verfahren für verschiedene Situationen."
                                },
                                {
                                    title: "Planungspoker (Wideband Delphi)",
                                    content: "Agiles Schätzverfahren: Jeder gibt unabhängig eine Schätzung ab. Bei unterschiedlichen Schätzungen wird DISKUTIERT warum, dann erneut geschätzt bis Konsens erreicht ist.",
                                    coachNote: "🎯 Planungspoker-Regeln:\n\n1. Jeder schätzt UNABHÄNGIG\n2. Schätzungen aufdecken\n3. Bei Abweichungen: DISKUSSION\n4. Erneut schätzen bis KONSENS\n\n❌ NICHT: Mehrheitsentscheidung\n❌ NICHT: Kunde entscheidet allein\n❌ NICHT: Exakt gleiche Werte nötig"
                                },
                                {
                                    title: "Extrapolation",
                                    content: "Schätzung basierend auf historischen Daten. Man nutzt vergangene tatsächliche Werte, um zukünftige Aufwände vorherzusagen. Die Formel gewichtet mehrere historische Iterationen.",
                                    coachNote: "🎯 Extrapolation in der Prüfung:\n\nDie Formel variiert je nach Aufgabe – sie wird IN der Frage angegeben!\nTypisches Muster: E(n) = (3×A(n-1) + A(n-2)) / 4\n\nDabei ist:\n• E(n) = geschätzter Aufwand für nächste Iteration\n• A(n-1) = TATSÄCHLICHER Aufwand der letzten Iteration\n• A(n-2) = TATSÄCHLICHER Aufwand der vorletzten Iteration\n\n⚠️ Typische Prüfungsfehler:\n• Falsche Werte aus der Grafik ablesen\n• Die Formel vereinfachen statt korrekt einsetzen\n• E-Werte (geschätzt) statt A-Werte (tatsächlich) verwenden\n\n💡 Tipp: Grafik GENAU ablesen und Werte sauber in die Formel einsetzen!"
                                },
                                {
                                    title: "Verhältnisschätzung (Ratio-based)",
                                    content: "Testaufwand wird anhand historischer Projekte geschätzt: Man berechnet das Verhältnis von durchschnittlichem Testaufwand zu durchschnittlichem Entwicklungsaufwand und wendet es auf das neue Projekt an.\n\nFormel: Verhältnis = Ø Testaufwand ÷ Ø Entwicklungsaufwand\nNeuer Testaufwand = Neuer Entwicklungsaufwand × Verhältnis",
                                    coachNote: "🎯 WICHTIG: Die Frage sagt 'Durchschnittsdaten verwenden' → Erst BEIDE Durchschnitte berechnen, DANN das Verhältnis bilden!\n\n❌ NICHT: Verhältnis pro Projekt berechnen und dann mitteln (das gibt ein anderes Ergebnis!)"
                                },
                                {
                                    title: "📝 Rechenbeispiel: Verhältnisschätzung",
                                    content: "4 historische Projekte:\n• P1: Entwicklung 800.000€, Test 40.000€\n• P2: Entwicklung 1.200.000€, Test 130.000€\n• P3: Entwicklung 600.000€, Test 70.000€\n• P4: Entwicklung 1.000.000€, Test 120.000€\n\nNeues Projekt: Entwicklungsaufwand 800.000€. Testaufwand = ?",
                                    coachNote: "📊 LÖSUNG:\n\nSchritt 1: Ø Entwicklung = (800k + 1.200k + 600k + 1.000k) ÷ 4 = 900.000€\nSchritt 2: Ø Test = (40k + 130k + 70k + 120k) ÷ 4 = 90.000€\nSchritt 3: Verhältnis = 90.000 ÷ 900.000 = 10%\nSchritt 4: Neuer Testaufwand = 800.000 × 10% = 80.000€\n\n✅ Ergebnis: 80.000€\n\n⚠️ Typischer Prüfungsfehler:\nVerhältnis PRO Projekt berechnen und mitteln → gibt ~79.000€\n→ FALSCH! Die Frage sagt explizit 'Durchschnittsdaten verwenden'."
                                },
                                {
                                    title: "Drei-Punkt-Schätzung",
                                    content: "E = (O + 4×W + P) ÷ 6. Optimistisch, Wahrscheinlichste (4-fach gewichtet) und Pessimistisch.",
                                    coachNote: "Formel auswendig lernen! Die wahrscheinlichste Schätzung wird 4-fach gewichtet."
                                },
                                {
                                    title: "📝 Rechenbeispiel: Drei-Punkt-Schätzung",
                                    content: "Aufwandsschätzung für Testaktivität:\n• Optimistisch (O): 2 Tage\n• Wahrscheinlich (W): 11 Tage\n• Pessimistisch (P): 14 Tage",
                                    coachNote: "📊 LÖSUNG:\n\nFormel: E = (O + 4×W + P) ÷ 6\n\nSchritt 1: 4×W = 4×11 = 44\nSchritt 2: O + 4×W + P = 2 + 44 + 14 = 60\nSchritt 3: 60 ÷ 6 = 10\n\n✅ Ergebnis: 10 Tage\n\n⚠️ Typischer Prüfungsfehler:\nEinfacher Durchschnitt (2+11+14)÷3 = 9\n→ FALSCH! W wird 4-fach gewichtet!"
                                }
                            ]
                        },
                        {
                            id: "5.1.5",
                            title: "Testfallpriorisierung",
                            page: 60,
                            quote: "Testfälle und Testskripte werden in einem Testausführungsplan so geordnet, dass Prioritäten und Abhängigkeiten berücksichtigt werden.",
                            keyPoints: [
                                {
                                    title: "Testausführungsplan",
                                    content: "Der Testausführungsplan legt die Reihenfolge der Testfallausführung fest. Er berücksichtigt Prioritäten (wichtige Tests zuerst) und Abhängigkeiten (ein Test braucht einen anderen als Voraussetzung).",
                                    coachNote: "Erst Abhängigkeiten erfüllen, dann nach Priorität sortieren."
                                },
                                {
                                    title: "Priorisierungskriterien",
                                    content: "Testfälle können nach Risiko, Überdeckung, Abhängigkeiten oder Wichtigkeit für Stakeholder priorisiert werden.",
                                    coachNote: "Hohe Priorität = wichtig = zuerst testen."
                                },
                                {
                                    title: "Abhängigkeiten beachten",
                                    content: "Technische Abhängigkeit: Test B braucht Ergebnis von Test A. Logische Abhängigkeit: Test B macht nur Sinn nach Test A.",
                                    coachNote: "🎯 Prüfungsfalle – Reihenfolge bestimmen:\n\n1. ABHÄNGIGKEITEN zuerst erfüllen!\n2. Dann nach PRIORITÄT sortieren\n\nBeispiel: TF1 (Hoch, abhängig von TF4)\n→ TF4 muss VOR TF1 kommen, auch wenn TF4 niedrigere Priorität hat!"
                                }
                            ]
                        },
                        {
                            id: "5.1.6",
                            title: "Testpyramide",
                            page: 60,
                            image: "images/testpyramide_cc.png",
                            imageAttribution: "Croncal, CC BY-SA 4.0, via Wikimedia Commons",
                            quote: "Die Testpyramide ist ein Modell, das die verschiedenen Tests zeigt, die einen unterschiedlichen Grad an Granularität haben können.",
                            keyPoints: [
                                {
                                    title: "Modell für Testgranularität",
                                    content: "Die Testpyramide zeigt, dass verschiedene Tests unterschiedliche Granularität haben. Unterstützt Entscheidungen zur Testautomatisierung und Verteilung des Testaufwands.",
                                    coachNote: "Pyramide = visuelle Hilfe für Testverteilung."
                                },
                                {
                                    title: "Schichten der Pyramide",
                                    content: "Unterste Schicht: viele kleine, schnelle, isolierte Tests (Unit-Tests). Oberste Schicht: wenige komplexe, langsame End-to-End-Tests. Je höher, desto geringer die Granularität und Isolation.",
                                    coachNote: "🎯 Prüfungsfokus – Testpyramide:\n\nUnten (breit): Viele Unit-Tests\n• Klein, isoliert, schnell\n\nOben (schmal): Wenige E2E-Tests\n• Komplex, langsam, integriert\n\n💡 Mehr Tests unten = schnelleres Feedback"
                                },
                                {
                                    title: "Typische Schichten",
                                    content: "Ursprüngliches Modell (Cohn): Unit-Tests, Service-Tests, UI-Tests. Alternativ: Komponententests, Integrationstests, End-to-End-Tests.",
                                    coachNote: "Namen variieren, Prinzip bleibt: unten viele, oben wenige."
                                }
                            ]
                        },
                        {
                            id: "5.1.7",
                            title: "Testquadranten",
                            page: 61,
                            image: "images/testquadranten_cc.jpg",
                            imageAttribution: "Janet Gregory & Lisa Crispin, Agile Testing Condensed (mit Erlaubnis)",
                            quote: "Die von Brian Marick definierten Testquadranten gruppieren die Teststufen mit den entsprechenden Testarten, Aktivitäten, Testverfahren und Arbeitsergebnissen in der agilen Softwareentwicklung.",
                            keyPoints: [
                                {
                                    title: "Marick's Testquadranten",
                                    content: "Gruppieren Teststufen mit Testarten, Aktivitäten und Verfahren in der agilen Entwicklung. Zwei Dimensionen: geschäftlich/technologieorientiert und Team-unterstützend/produktkritisch.",
                                    coachNote: "Testquadranten helfen zu visualisieren, welche Testarten wo eingesetzt werden."
                                },
                                {
                                    title: "Q1: Technologie + Team",
                                    content: "Komponententests und Komponentenintegrationstests. Sollten automatisiert und in den CI-Prozess einbezogen werden.",
                                    coachNote: "Q1 = automatisierte Unit-/Integrationstests im CI."
                                },
                                {
                                    title: "Q2: Geschäftlich + Team",
                                    content: "Funktionale Tests, Beispiele, User-Story-Tests, Prototypen, API-Tests, Simulationen. Prüfen Akzeptanzkriterien, manuell oder automatisiert.",
                                    coachNote: "Q2 = funktionale Tests aus Business-Sicht."
                                },
                                {
                                    title: "Q3: Geschäftlich + Produktkritisch",
                                    content: "Explorative Tests, Gebrauchstauglichkeitstests, Benutzerabnahmetests. Benutzerorientiert und häufig manuell.",
                                    coachNote: "Q3 = manuelle Tests aus Nutzerperspektive."
                                },
                                {
                                    title: "Q4: Technologie + Produktkritisch",
                                    content: "Smoke-Tests und nicht-funktionale Tests (Performance, Sicherheit, außer Usability). Häufig automatisiert.",
                                    coachNote: "🎯 Prüfungsfalle – Testquadranten:\n\nQ1 = Tech + Team → Unit-/Integrationstests\nQ2 = Business + Team → Funktionale Tests\nQ3 = Business + Kritisch → Explorative/UAT\nQ4 = Tech + Kritisch → Performance/Security\n\n💡 Usability ist Q3, NICHT Q4!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "5.3",
                    title: "Testüberwachung und Teststeuerung",
                    page: 64,
                    quote: "Die Testüberwachung umfasst die laufende Überprüfung aller Testaktivitäten und den Vergleich des tatsächlichen Fortschritts mit dem Plan. Bei der Teststeuerung werden die erforderlichen Korrekturmaßnahmen ergriffen.",
                    keyPoints: [
                        {
                            title: "Testüberwachung",
                            content: "Ist-Zustand erfassen (Fortschritt, Abweichungen). Testfortschrittsbericht liefert Informationen.",
                            coachNote: "Überwachung = messen, berichten."
                        },
                        {
                            title: "Teststeuerung",
                            content: "Vergleich Ist vs. Soll. Maßnahmen ergreifen (Ressourcen, Umfang, Termine anpassen).",
                            coachNote: "Steuerung = eingreifen, wenn es abweicht."
                        }
                    ],
                    subsections: [
                        {
                            id: "5.3.1",
                            title: "Beim Testen verwendete Metriken",
                            page: 65,
                            quote: "Testmetriken werden erfasst, um den Fortschritt gegenüber Zeitplan und Budget, die Qualität des Testobjekts und die Effektivität der Testaktivitäten zu bewerten.",
                            keyPoints: [
                                {
                                    title: "Zweck von Testmetriken",
                                    content: "Metriken zeigen Fortschritt gegen Testzeitplan/Budget, aktuelle Qualität des Testobjekts und Effektivität der Testaktivitäten.",
                                    coachNote: "Metriken = objektive Messgrößen für Entscheidungen."
                                },
                                {
                                    title: "Gängige Testmetriken",
                                    content: "Projektfortschritt (Aufgaben, Ressourcen, Aufwand), Testfortschritt (Testfälle ausgeführt/bestanden), Produktqualität (MTTF, Verfügbarkeit), Fehlerzustände (Anzahl, Prioritäten, DDP), Risiken, Überdeckung, Kosten.",
                                    coachNote: "🎯 Prüfungsfokus – Metrik-Kategorien:\n\n• Projektfortschritt (Aufgaben, Aufwand)\n• Testfortschritt (Testfälle bestanden/fehlgeschlagen)\n• Produktqualität (MTTF, Reaktionszeit)\n• Fehlerzustände (DDP, Fehlerdichte)\n• Überdeckung (Anforderungen, Code)"
                                }
                            ]
                        },
                        {
                            id: "5.3.2",
                            title: "Testberichte",
                            page: 65,
                            quote: "Der Zweck eines Testberichts ist es, Informationen über die Testaktivitäten zusammenzufassen und zu kommunizieren. Zwei Arten: Testfortschrittsbericht und Testabschlussbericht.",
                            keyPoints: [
                                {
                                    title: "Zweck",
                                    content: "Testberichte fassen Informationen über Testaktivitäten zusammen und kommunizieren sie – sowohl während als auch am Ende einer Testaktivität.",
                                    coachNote: "Testberichte = Kommunikationsmittel für Stakeholder."
                                },
                                {
                                    title: "Testfortschrittsbericht",
                                    content: "Wird regelmäßig erstellt (täglich, wöchentlich) während der Testüberwachung und -steuerung. Enthält: Testzeitraum, Fortschritt inkl. Abweichungen, Hindernisse, Testmetriken, neue Risiken, geplante Tests.",
                                    coachNote: "🎯 Testfortschrittsbericht:\n\nERSTELLT bei: Testüberwachung/-steuerung (laufend)\nAM MEISTEN GENUTZT bei: TESTABSCHLUSS\n→ Dort fließen die Fortschrittsberichte in den Testabschlussbericht ein!\n\n⚠️ Prüfungsfalle:\n'Bei welcher Aktivität werden Testfortschrittsberichte AM MEISTEN genutzt?'\n→ TESTABSCHLUSS (nicht Planung, nicht Entwurf, nicht Analyse!)\n\nBegründung:\n• Bei der Planung existieren sie noch gar nicht\n• Beim Entwurf/Analyse werden sie nicht primär genutzt\n• Beim Abschluss werden sie zusammengefasst und ausgewertet"
                                },
                                {
                                    title: "Testabschlussbericht",
                                    content: "Wird beim Abschluss einer Teststufe oder eines Testprojekts erstellt. Fasst Informationen aus Testfortschrittsberichten zusammen. Enthält: Bewertung gegen Testziele und Endekriterien, Abweichungen, Restrisiken, Lessons Learned.",
                                    coachNote: "🎯 Prüfungsfalle – Berichtsarten:\n\nTestFORTSCHRITTSbericht:\n• Regelmäßig (täglich/wöchentlich)\n• Erstellt bei Testüberwachung\n• Mehrere pro Projekt\n\nTestABSCHLUSSbericht:\n• Einmalig am Ende\n• FASST Fortschrittsberichte ZUSAMMEN\n• Lessons Learned, Restrisiken\n• Grundlage für Freigabe-Entscheidung"
                                },
                                {
                                    title: "Zielgruppenanpassung",
                                    content: "Verschiedene Zielgruppen benötigen unterschiedliche Informationen. Grad der Formalität und Häufigkeit der Berichterstattung anpassen.",
                                    coachNote: "Management vs. Entwickler = andere Detailtiefe."
                                }
                            ]
                        },
                        {
                            id: "5.3.3",
                            title: "Kommunikation des Teststatus",
                            page: 67,
                            quote: "Die beste Art der Kommunikation hängt von Stakeholder-Bedürfnissen, Teststrategie und regulatorischen Vorgaben ab: mündlich, Dashboards, E-Mail, oder formale Berichte.",
                            keyPoints: [
                                {
                                    title: "Kommunikationsarten",
                                    content: "Mündlich, Dashboards (CI/CD, Taskboards, Burn-down-Charts), elektronische Kanäle (E-Mail, Chat), Online-Dokumentation, formale Testberichte.",
                                    coachNote: "Mehrere Optionen können kombiniert werden."
                                },
                                {
                                    title: "Kontextabhängige Wahl",
                                    content: "Formellere Kommunikation bei verteilten Teams. Verschiedene Stakeholder interessieren sich für unterschiedliche Informationen.",
                                    coachNote: "Verteilte Teams = mehr Dokumentation, weniger Ad-hoc."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "5.4",
                    title: "Konfigurationsmanagement",
                    page: 67,
                    quote: "Der Zweck des Konfigurationsmanagements ist es, die Integrität der Konfigurationselemente (z.B. Testmittel, Testobjekte) während des gesamten Projektlebenszyklus sicherzustellen.",
                    keyPoints: [
                        {
                            title: "Zweck",
                            content: "Konfigurationsmanagement (KM) stellt sicher, dass die richtigen Versionen von Testobjekten und Testware zusammen verwendet werden.",
                            coachNote: "🎯 Prüfungsszenario: 'Test besteht in Dev, scheitert in Test' → Verdacht: KM-Problem (falsche Versionen)!"
                        }
                    ],
                    subsections: [
                        {
                            id: "5.4.1",
                            title: "Unterstützung des Testens durch Konfigurationsmanagement",
                            page: 67,
                            quote: "Konfigurationsmanagement unterstützt das Testen durch Versionskontrolle aller Testelemente.",
                            keyPoints: [
                                {
                                    title: "Versionierung",
                                    content: "Testware (Testfälle, Skripte, Daten) und Testobjekte versioniert verwalten. Welche Version wurde womit getestet?",
                                    coachNote: "🎯 Prüfungsfalle – Konfigurationsmanagement:\n\nKM bewahrt die INTEGRITÄT von:\n• Testobjekten (Code-Versionen)\n• Testware (Testfälle, Skripte)\n• Testumgebungen\n\n📌 Typisches Prüfungsszenario:\n'Test besteht in Dev, scheitert in Test'\n→ Verdacht: KM-Problem!\n\n❌ NICHT verwechseln mit Fehlermanagement"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "5.2",
                    title: "Risikomanagement",
                    page: 62,
                    image: "images/risikomatrix_5x5_cc.jpg",
                    imageAttribution: "U3115299, CC BY-SA 4.0, via Wikimedia Commons",
                    quote: "Risiko beinhaltet die Möglichkeit des Eintritts eines Ereignisses mit negativen Folgen. Das Risikoniveau wird anhand der Eintrittswahrscheinlichkeit und der Schadenshöhe bestimmt.",
                    keyPoints: [
                        {
                            title: "Überblick",
                            content: "Risikomanagement umfasst: Risikoidentifizierung, Risikobewertung und Risikosteuerung.",
                            coachNote: "🎯 Die 3 Schritte des Risikomanagements:\n\n1. IDENTIFIZIERUNG → Was KÖNNTE schiefgehen?\n   (Brainstorming, Checklisten, Erfahrung)\n\n2. BEWERTUNG → WIE SCHLIMM wäre es?\n   Risikoniveau = Wahrscheinlichkeit × Auswirkung\n\n3. STEUERUNG → Was TUN wir dagegen?\n   → Hohes Risiko: gründlicher testen, früher testen\n   → Niedriges Risiko: weniger gründlich\n\n💡 Merke: Risikoanalyse = Identifizierung + Bewertung. Risikosteuerung = Maßnahmen ergreifen."
                        }
                    ],
                    subsections: [
                        {
                            id: "5.2.1",
                            title: "Risikodefinition und Risikoattribute",
                            page: 62,
                            quote: "Ein Risiko ist ein potenzielles Ereignis, dessen Eintreten eine nachteilige Auswirkung verursacht. Risikoniveau = Eintrittswahrscheinlichkeit × Schadensausmaß.",
                            keyPoints: [
                                {
                                    title: "Formel",
                                    content: "Risikoniveau = Eintrittswahrscheinlichkeit × Schadensausmaß (Auswirkung).",
                                    coachNote: "🎯 Prüfungsfokus: Risikoniveau = Wahrscheinlichkeit × Auswirkung!"
                                }
                            ]
                        },
                        {
                            id: "5.2.2",
                            title: "Projektrisiken und Produktrisiken",
                            page: 62,
                            quote: "Projektrisiken beziehen sich auf Management und Steuerung des Projekts. Produktrisiken stehen im Zusammenhang mit den Qualitätsmerkmalen des Produkts.",
                            keyPoints: [
                                {
                                    title: "Unterscheidung",
                                    content: "Projektrisiko: Termin, Budget, Ressourcen, Scope Creep. Produktrisiko: Funktionsfehler, Performance, Sicherheit.",
                                    coachNote: "🎯 Prüfungsfalle – Risiko-Unterscheidung:\n\n📁 PROJEKTRISIKO (Rahmen):\n• Scope Creep\n• Budgetkürzung\n• Drittanbieter-Probleme\n\n🔧 PRODUKTRISIKO (Software selbst):\n• Langsame Antwortzeit\n• Sicherheitslücken\n• Funktionsfehler"
                                }
                            ]
                        },
                        {
                            id: "5.2.3",
                            title: "Produktrisikoanalyse",
                            page: 63,
                            quote: "Ziel der Produktrisikoanalyse ist es, ein Bewusstsein für das Produktrisiko zu schaffen, um den Testaufwand so zu fokussieren, dass die verbleibende Risikostufe minimiert wird.",
                            keyPoints: [
                                {
                                    title: "Prozess",
                                    content: "Risikoidentifizierung (Liste erstellen) + Risikobewertung (Kategorisierung, Wahrscheinlichkeit, Auswirkung, Priorisierung).",
                                    coachNote: "🎯 Prüfungsfalle – Risikoanalyse:\n\nRisikoanalyse beeinflusst Gründlichkeit und Umfang:\n• Hohes Risiko → gründlichere Tests\n• Niedriges Risiko → weniger gründlich\n\n❌ FALSCH: 'Risikoidentifizierung' allein beeinflusst Testumfang"
                                }
                            ]
                        },
                        {
                            id: "5.2.4",
                            title: "Produktrisikosteuerung",
                            page: 64,
                            quote: "Die Steuerung umfasst Risikominderung (präventive Maßnahmen, Tests für hohe Risiken zuerst) und Risikoüberwachung (kontinuierliche Bewertung).",
                            keyPoints: [
                                {
                                    title: "Maßnahmen",
                                    content: "Risikominderung: hohe Risiken zuerst testen. Risikoüberwachung: neue Risiken erkennen, Risikostufen anpassen.",
                                    coachNote: "Risikobasiertes Testen = hohe Risiken früh und gründlich testen."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "5.5",
                    title: "Fehlermanagement",
                    page: 68,
                    image: "images/bug_lifecycle_bugzilla_cc.png",
                    imageAttribution: "Bugzilla Project, LGPL, via Wikimedia Commons",
                    quote: "Ein Fehlerbericht dokumentiert alle Informationen, die erforderlich sind, um das aufgetretene Problem zu identifizieren, zu analysieren und zu beheben.",
                    keyPoints: [
                        {
                            title: "Fehlerbericht-Essentials",
                            content: "Mindestinhalte: Eindeutige ID, Titel, Datum, Autor, Testobjekt-ID, Schweregrad, Priorität, Schritte zur Reproduktion, erwartetes vs. tatsächliches Ergebnis.",
                            coachNote: "🎯 Prüfungsfokus: Was gehört in einen Fehlerbericht? → Schritte zur REPRODUKTION sind PFLICHT!"
                        }
                    ],
                    subsections: [
                        {
                            id: "5.5.1",
                            title: "Fehlerbericht",
                            page: 68,
                            quote: "Ein guter Fehlerbericht enthält: Kennung, Titel, Datum, Autor, Testobjekt-ID, SDLC-Phase, erwartetes/tatsächliches Ergebnis, Schweregrad, Priorität, Schritte zur Reproduktion, Testumgebung.",
                            keyPoints: [
                                {
                                    title: "Inhalte eines Fehlerberichts",
                                    content: "Kennung, Titel, Datum, Autor, Testobjekt, erwartetes/tatsächliches Ergebnis, Schweregrad, Priorität, Schritte zur Reproduktion, Testumgebung.",
                                    coachNote: "🎯 Prüfungsfalle – Fehlerbericht:\n\nWas FEHLT oft?\n• Testumgebung (Version, OS, Browser)\n• Testobjekt-ID/Version\n\n❌ FALSCH: 'Name des Testers fehlt'\n(Weniger kritisch als technische Infos)"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // =========================================================================
        // KAPITEL 6: TESTWERKZEUGE (20 Min.)
        // =========================================================================
        {
            id: 6,
            icon: "🛠️",
            title: "Testwerkzeuge",
            questionCount: "2",
            keywords: ["Testautomatisierung", "Testwerkzeug"],
            subchapters: [
                {
                    id: "6.1",
                    title: "Werkzeugunterstützung für das Testen",
                    page: 71,
                    quote: "Testwerkzeuge können eine oder mehrere Testaktivitäten unterstützen.",
                    keyPoints: [
                        {
                            title: "Werkzeugkategorien",
                            content: "Werkzeuge nach Zweck: Testmanagement (Planung, Verfolgung), Statische Analyse (Code-Prüfung), Testentwurf (Testfallgenerierung), Testdurchführung (Automatisierung), Performance-Test.",
                            coachNote: "Werkzeuge unterstützen ALLE Testaktivitäten – von Planung bis Abschluss."
                        }
                    ],
                    subsections: [
                        {
                            id: "6.1.1",
                            title: "Arten von Testwerkzeugen",
                            page: 71,
                            quote: "Werkzeuge können nach ihrem Zweck kategorisiert werden: Testmanagement, statische Analyse, Testentwurf, Testdurchführung.",
                            keyPoints: [
                                {
                                    title: "Kategorien",
                                    content: "Werkzeuge für Testmanagement, statische Analyse, Testentwurf und -realisierung, Testdurchführung (Ausführung, Vergleich), Performance, Spezialanwendungen.",
                                    coachNote: "🎯 Prüfungsfalle – Werkzeug-Aktivität:\n\n• Testdaten-Werkzeug → Testentwurf + Testrealisierung\n• Testmanagement → Überwachung + Steuerung\n• Statische Analyse → vor der Ausführung"
                                },
                                {
                                    title: "Werkzeugkategorien (Tabelle)",
                                    content: "Testmanagement: Jira, TestRail, Zephyr | Statische Analyse: SonarQube, ESLint, Checkstyle | Testdurchführung: Selenium, Cypress, Playwright | Performance: JMeter, Gatling, LoadRunner | CI/CD: Jenkins, GitLab CI, GitHub Actions",
                                    coachNote: "📊 Merkhilfe – Beispiele pro Kategorie:\n\n📋 TESTMANAGEMENT: Jira, TestRail\n🔍 STATISCHE ANALYSE: SonarQube, Linter\n🤖 TESTAUSFÜHRUNG: Selenium, Cypress\n⚡ PERFORMANCE: JMeter, LoadRunner\n🔄 CI/CD: Jenkins, GitLab CI"
                                },
                                {
                                    title: "Werkzeuge für verschiedene Testaktivitäten",
                                    content: "Testplanung: Testmanagement-Tools. Testanalyse/Entwurf: Modellierungswerkzeuge, Testdaten-Generatoren. Testrealisierung: Testautomatisierung. Testdurchführung: Testausführungs-Tools. Testabschluss: Reporting-Tools.",
                                    coachNote: "Für JEDE Testaktivität gibt es passende Werkzeuge!"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "6.2",
                    title: "Nutzen und Risiken der Testautomatisierung",
                    page: 71,
                    quote: "Potenzielle Vorteile: Zeitersparnis, höhere Konsistenz und Wiederholbarkeit. Potenzielle Risiken: unrealistische Erwartungen, Wartungsaufwand.",
                    keyPoints: [
                        {
                            title: "Abwägung",
                            content: "Automatisierung ist KEIN Allheilmittel! Vorteile (Geschwindigkeit, Wiederholbarkeit) müssen gegen Risiken (Wartung, Initialaufwand) abgewogen werden.",
                            coachNote: "🎯 Prüfungsfokus: 'Risiko der Testautomatisierung?' → Unrealistische Erwartungen, Wartungsaufwand, Abhängigkeit von Testern mit Programmierkenntnissen."
                        }
                    ],
                    subsections: [
                        {
                            id: "6.2.1",
                            title: "Nutzen und Risiken",
                            page: 71,
                            quote: "Testautomatisierung bietet Vorteile wie Zeitersparnis und Wiederholbarkeit, birgt aber auch Risiken wie unrealistische Erwartungen.",
                            keyPoints: [
                                {
                                    title: "Vorteile",
                                    content: "Zeitersparnis, Konsistenz, Wiederholbarkeit, objektive Bewertung, bessere Regression.",
                                    coachNote: "Automatisierung = schneller, wiederholbarer, konsistenter."
                                },
                                {
                                    title: "Risiken",
                                    content: "Unrealistische Erwartungen, unterschätzte Einführungskosten, Wartungsaufwand, Abhängigkeit vom Werkzeug.",
                                    coachNote: "🎯 Prüfungsfalle – Risiken Automatisierung:\n\n✅ TYPISCHE Risiken:\n• Unrealistische Erwartungen\n• Unterschätzte Kosten\n• Wartungsaufwand\n\n❌ KEIN typisches Risiko:\n'Erhöhte Geschwindigkeit führt zu Qualitätsproblemen'"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

// Export für ES-Module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { syllabusData };
}
