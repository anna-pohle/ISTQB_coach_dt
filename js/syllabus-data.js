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
                                    content: "Was testen wir? (Testbasis analysieren, Testbedingungen definieren).",
                                    coachNote: "🎯 Prüfungsfalle – Aktivitäten zuordnen:\n\n• 'Testbedingung aufnehmen?' → Testanalyse\n• 'Grenzwerte ermitteln' → Testentwurf\n• 'Aufwand schätzen' → Testplanung\n• 'Warum weicht Ergebnis ab?' → Testdurchführung"
                                },
                                {
                                    title: "4. Entwurf",
                                    content: "Wie testen wir? (Testfälle und Testdaten erstellen).",
                                    coachNote: "Merke: WAS testen? = Testanalyse. WIE testen? = Testentwurf."
                                },
                                {
                                    title: "5. Realisierung",
                                    content: "Alles bereitmachen. Testumgebung aufbauen, Testsuiten zusammenstellen.",
                                    coachNote: "Ready to rumble?"
                                },
                                {
                                    title: "6. Durchführung",
                                    content: "Tests laufen lassen, Ergebnisse protokollieren, Fehler melden.",
                                    coachNote: "Action! 🎬"
                                },
                                {
                                    title: "7. Abschluss",
                                    content: "Bericht schreiben, Lessons Learned, alles archivieren.",
                                    coachNote: "Deckel drauf."
                                }
                            ]
                        },
                        {
                            id: "1.4.2",
                            title: "Testmittel (Testware)",
                            keyPoints: [
                                {
                                    title: "Ergebnisse",
                                    content: "Testmittel sind die Arbeitsergebnisse (Testpläne, Testfälle, Berichte).",
                                    coachNote: "Ordnung ist das halbe Leben – auch beim Testen (Konfigurationsmanagement!)."
                                }
                            ]
                        },
                        {
                            id: "1.4.4",
                            title: "Verfolgbarkeit zwischen Testbasis und Testmitteln",
                            keyPoints: [
                                {
                                    title: "Warum Verfolgbarkeit?",
                                    content: "Verfolgbarkeit zwischen Testbasis, Testmitteln, Testergebnissen und Fehlerzuständen ermöglicht effektive Testüberwachung und -steuerung.",
                                    coachNote: "Welcher Testfall prüft welche Anforderung? Welcher Bug gehört wozu?"
                                },
                                {
                                    title: "Überdeckungsbewertung",
                                    content: "Genaue Verfolgbarkeit unterstützt die Bewertung der Überdeckung. Messbare Überdeckungskriterien dienen als Key-Performance-Indikatoren (KPIs).",
                                    coachNote: "Beispiel: Verfolgbarkeit von Testfällen zu Anforderungen zeigt, ob alle Anforderungen durch Testfälle abgedeckt sind."
                                },
                                {
                                    title: "Nutzen der Verfolgbarkeit",
                                    content: "Ermöglicht Auswirkungsanalyse bei Änderungen, erleichtert Audits, hilft bei IT-Governance. Macht Testberichte für Stakeholder verständlicher.",
                                    coachNote: "🎯 Prüfungsfokus:\n\nVerfolgbarkeit ermöglicht:\n• Überdeckungsbewertung\n• Auswirkungsanalyse bei Änderungen\n• Restrisiko-Bewertung\n• Verständliche Testberichte"
                                }
                            ]
                        },
                        {
                            id: "1.4.5",
                            title: "Rollen des Testens",
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
                    subsections: [
                        {
                            id: "1.5.1",
                            title: "Allgemeine Fertigkeiten",
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
                    title: "Softwareentwicklungslebenszyklus-Modelle",
                    introText: "Testaktivitäten sind in den SDLC integriert. Das gewählte Lebenszyklusmodell beeinflusst Art und Zeitpunkt des Testens.",
                    keyPoints: [
                        {
                            title: "Anpassung an den SDLC",
                            content: "Testaktivitäten werden an den Softwareentwicklungslebenszyklus angepasst (sequenziell, iterativ, agil).",
                            coachNote: "🎯 Prüfungsfalle – Shift-Left:\n\n✅ Shift-Left-Beispiele:\n• Anforderungen reviewen VOR Akzeptanz\n• Tests schreiben VOR Code (TDD)\n• Performance früh testen\n\n❌ KEIN Shift-Left:\n'Nicht-funktionale Tests erst auf Systemtest-Ebene'\n→ Das ist das Gegenteil!"
                        },
                        {
                            title: "Frühe Testaktivitäten",
                            content: "Testplanung und Testanalyse können beginnen, sobald Dokumente der Testbasis verfügbar sind.",
                            coachNote: "🎯 Prüfungsfalle – Sequenzieller SDLC:\n\nWas geht FRÜH im sequenziellen SDLC?\n✅ Statische Tests (Reviews)\n✅ Testplanung\n✅ Testanalyse\n\n❌ Was geht NICHT früh?\n• Dynamische Tests (Unit-Tests, etc.)\n  → brauchen ausführbaren Code!\n• Abnahmetests\n  → brauchen fertiges Produkt!"
                        },
                        {
                            title: "ATDD / BDD / TDD",
                            content: "Testgetriebene Entwicklungsansätze mit unterschiedlichem Fokus.",
                            coachNote: "🎯 Prüfungsfalle – Verwechslungsgefahr:\n\n• ATDD → Tests aus AKZEPTANZKRITERIEN\n• BDD → GIVEN/WHEN/THEN Format\n• TDD → Tests ZUERST, dann Code\n\nATDD ≠ BDD ≠ TDD!"
                        },
                        {
                            title: "Retrospektiven",
                            content: "Regelmäßige Reflexion des Teams zur Prozessverbesserung.",
                            coachNote: "🎯 Prüfungsfalle – Retrospektiven:\n\nZweck: Kontinuierliche PROZESSVERBESSERUNG\n\n❌ FALSCH als Hauptzweck:\n• 'Team loben und motivieren'\n• 'Kunden gefallen'\n• 'Endnutzer-Feedback einholen'"
                        }
                    ]
                },
                {
                    id: "2.2",
                    title: "Teststufen",
                    introText: "Teststufen beziehen sich auf das Testobjekt und den Zeitpunkt im Lebenszyklus.",
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
                            title: "Teststufen und Testobjekte",
                            keyPoints: [
                                {
                                    title: "Testobjekt pro Stufe",
                                    content: "Komponententest: Komponente. Integrationstest: Schnittstellen. Systemtest: System. Abnahmetest: System im Einsatzkontext.",
                                    coachNote: "🎯 Prüfungsfalle – Teststufen zuordnen:\n\n• Isolierte Komponente → Komponententest\n• Kommunikation zwischen Komp. → Integrationstest\n• Geschäftsanforderungen → ABNAHMETEST (nicht System!)\n• User-Story → Systemtest"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "2.3",
                    title: "Testarten",
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
                            coachNote: "🎯 Prüfungsfalle – Black-Box vs. White-Box:\n\n📦 BLACK-BOX (ohne Code-Einblick):\n• Testest das VERHALTEN von außen\n• Basis: Spezifikation, Anforderungen\n• Beispiele: Äquivalenzklassen, Grenzwerte\n\n🔍 WHITE-BOX (mit Code-Einblick):\n• Testest die STRUKTUR von innen\n• Basis: Quellcode, Architektur\n• Beispiele: Anweisungs-, Zweigüberdeckung\n\n⚠️ In der Prüfung: Wenn 'Überdeckung' oder 'Coverage' vorkommt → WHITE-BOX!"
                        }
                    ]
                },
                {
                    id: "2.4",
                    title: "Wartungstest",
                    keyPoints: [
                        {
                            title: "Anlässe",
                            content: "Änderungen, Migration, Retirement. Wartungstest prüft die geänderte Umgebung und Regression.",
                            coachNote: "Regressionstest bei Wartung: Altes Verhalten darf nicht kaputtgehen."
                        },
                        {
                            title: "Fehlernachtest vs. Regressionstest",
                            content: "Fehlernachtest: Prüft, ob der Fehler behoben ist. Regressionstest: Prüft, ob keine Seiteneffekte entstanden.",
                            coachNote: "🎯 Prüfungsfalle – REIHENFOLGE:\n\n1️⃣ ERST Fehlernachtest\n   → Ist der Fehler wirklich behoben?\n\n2️⃣ DANN Regressionstest\n   → Wurden andere Bereiche beschädigt?\n\n❌ FALSCH:\n• 'Nur Fehlernachtest' → Seiteneffekte ungeprüft!\n• 'Erst Regression, dann Nachtest' → Reihenfolge falsch!\n\n💡 Merke: Regression befasst sich mit NEGATIVEN Auswirkungen auf UNVERÄNDERTE Bereiche"
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
                    keyPoints: [
                        {
                            title: "Statisch = keine Ausführung",
                            content: "Statischer Test prüft Arbeitsergebnisse (Code, Dokumente), ohne sie auszuführen.",
                            coachNote: "Dynamisch = Programm läuft. Statisch = lesen, analysieren, Reviews."
                        },
                        {
                            title: "Vorteile",
                            content: "Frühe Fehlererkennung, kostengünstig. Findet Fehlhandlungen bevor sie zu Fehlerzuständen im Code werden.",
                            coachNote: "Fehler in der Anforderung finden ist billiger als im Code."
                        },
                        {
                            title: "Anomalie",
                            content: "Abweichung von Erwartung oder Referenz. Kann auf einen Fehlerzustand hindeuten.",
                            coachNote: "Anomalie = Verdacht. Muss geprüft werden (kein Beweis)."
                        }
                    ]
                },
                {
                    id: "3.2",
                    title: "Review-Prozess",
                    keyPoints: [
                        {
                            title: "Informelles Review",
                            content: "Kein formaler Prozess. Autor bittet um Feedback (z.B. Peer-Review). Keine Dokumentation der Befunde erforderlich.",
                            coachNote: "Informell = schnell, wenig Aufwand, keine Rollen-Definition."
                        },
                        {
                            title: "Walkthrough",
                            content: "Autor leitet die Sitzung. Hauptzweck: Kommunikation und Schulung der Teilnehmer. Dokumentation optional.",
                            coachNote: "⚠️ Prüfungsfalle – Wer leitet das Review?\n\n• Walkthrough → AUTOR leitet\n• Inspektion → Moderator leitet\n• Technisches Review → Moderator leitet\n\n💡 Erkennungstrick: 'Autor leitet' in der Antwort = Walkthrough"
                        },
                        {
                            title: "Technisches Review",
                            content: "Fachorientierte Prüfung durch Peers. Leitung oft durch erfahrenen Moderator (nicht Autor). Befunde werden dokumentiert.",
                            coachNote: "Technisches Review = Experten prüfen technische Inhalte."
                        },
                        {
                            title: "Inspektion",
                            content: "Formales Review mit definierten Rollen (Moderator, Autor, Leser, Prüfer). Eingangs-/Endekriterien, Befundbericht.",
                            coachNote: "Inspektion = strengste Form. Rollen, Checklisten, Metriken."
                        }
                    ],
                    subsections: [
                        {
                            id: "3.2.1",
                            title: "Erfolgsfaktoren für Reviews",
                            keyPoints: [
                                {
                                    title: "Erfolgsfaktoren",
                                    content: "Ausreichend Zeit, kleine Arbeitseinheiten, klare Ziele, Checklisten. Management sollte nicht bei der Befund-Kommunikation persönlich beteiligt sein.",
                                    coachNote: "🎯 Prüfungsfalle – Review-Erfolgsfaktoren:\n\n❌ KEIN Erfolgsfaktor:\n'Management bei der Befund-Kommunikation beteiligt'\n→ IMMER als falsch ankreuzen!\n\n💡 Warum? Gefährdet die offene Atmosphäre.\nMitarbeiter trauen sich nicht, Probleme zu nennen."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "3.3",
                    title: "Statische Analyse durch Werkzeuge",
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
                    title: "Testanalyse und -entwurf für Black-Box-Testverfahren",
                    introText: "Black-Box-Verfahren leiten Testfälle aus der Spezifikation ab, ohne Code zu betrachten.",
                    keyPoints: [
                        {
                            title: "Äquivalenzklassenbildung",
                            content: "Eingaben in Klassen einteilen, die gleiches Verhalten erwarten lassen. Ein repräsentativer Wert pro Klasse reduziert Testfälle.",
                            coachNote: "🎯 Prüfungsfokus – Minimale Testfälle:\n\nRegel: EIN Wert pro Äquivalenzklasse\n(auch ungültige Klassen!)\n\n❌ FALSCH:\n• 'mehr als die minimale Anzahl'\n• Klassen vergessen\n\n💡 Frage: 'Wie viele Testfälle minimal?'\n→ Klassen zählen, je 1 Wert"
                        },
                        {
                            title: "Grenzwertanalyse",
                            content: "Testfälle an Grenzen von Äquivalenzklassen (z.B. Min, Max, gerade darunter/darüber). 2-Wert: Grenzwert + ein Wert aus angrenzender Klasse.",
                            coachNote: "🎯 Prüfung – Grenzwertanalyse:\n\n2-Wert-Analyse:\n• Grenzwert + EIN Nachbar aus angrenzender Klasse\n• NICHT beide Nachbarn (das wäre 3-Wert!)\n\n❌ FALSCH:\n• 'keine Grenzwerte'\n• 'nur gültige Werte'\n\n💡 Frage: 'Welche Testwerte für 2-Wert?'\n→ Grenzwert + 1 Wert aus anderer Klasse"
                        },
                        {
                            title: "Entscheidungstabellentest",
                            content: "Bedingungen und Aktionen in Tabelle. Jede gültige Kombination wird getestet. Undurchführbare Kombinationen ausschließen.",
                            coachNote: "Undurchführbare Kombinationen (z.B. Ziel nicht vereinbart aber erreicht) nicht als Testfall zählen."
                        },
                        {
                            title: "Zustandsübergangstest",
                            content: "System hat Zustände und Übergänge. Testfälle decken gültige (oder ungültige) Zustandsübergänge ab. 0-Switch = jeder Übergang einmal.",
                            coachNote: "0-Switch-Überdeckung = alle gültigen ÜBERGÄNGE einmal durchlaufen, nicht nur Zustände."
                        }
                    ]
                },
                {
                    id: "4.2",
                    title: "Testanalyse und -entwurf für White-Box-Testverfahren",
                    keyPoints: [
                        {
                            title: "Anweisungsüberdeckung",
                            content: "Prozentsatz der ausgeführten Anweisungen. Formel: (ausgeführte Anweisungen ÷ ausführbare Anweisungen) × 100%.",
                            coachNote: "🎯 Prüfungsfalle – Anweisungsüberdeckung:\n\n✅ RICHTIG: Prozentsatz ausgeführter Anweisungen\n\n❌ FALSCH (typische Fallen):\n• 'Anzahl Testfälle'\n• 'Fehlerwirkungen'\n• Antworten ohne '%'\n\n💡 Formel: (ausgeführt ÷ ausführbar) × 100%"
                        },
                        {
                            title: "Zweigüberdeckung",
                            content: "Jeder Zweig (True/False) jeder Entscheidung muss mindestens einmal ausgeführt werden. Stärker als Anweisungsüberdeckung.",
                            coachNote: "🎯 Prüfungsfalle – Zweigüberdeckung:\n\n📌 Was ist ein 'Zweig'?\nBei einer if-Bedingung gibt es ZWEI Wege:\n• TRUE-Zweig (Bedingung erfüllt)\n• FALSE-Zweig (Bedingung nicht erfüllt)\n\n✅ 100% Zweigüberdeckung = BEIDE Wege getestet\n\n⚠️ Typische Prüfungsfragen:\n• 'Wie viele Testfälle für 100% Zweigüberdeckung?' → Zähle alle Entscheidungen, mind. 2 pro if\n• Zweigüberdeckung ist STÄRKER als Anweisungsüberdeckung\n• 100% Zweig → 100% Anweisung (aber nicht umgekehrt!)"
                        },
                        {
                            title: "White-Box-Schwäche",
                            content: "White-Box-Tests können nur vorhandenen Code prüfen. Fehlende Implementierung (fehlende Anforderung) wird nicht gefunden.",
                            coachNote: "⚠️ Prüfungsfalle – White-Box-Schwäche:\n\n❌ IMMER FALSCH:\n'White-Box kann fehlende Implementierung identifizieren'\n\n💡 Merke:\nWhite-Box testet NUR vorhandenen Code.\nWas nicht da ist, findet es nicht!"
                        }
                    ]
                },
                {
                    id: "4.4",
                    title: "Erfahrungsbasierte Testverfahren",
                    keyPoints: [
                        {
                            title: "Intuitive Testfallermittlung (Error Guessing)",
                            content: "Tester nutzt Erfahrung, um typische Fehlhandlungen und Fehlerzustände zu erraten. Basiert auf Wissen über frühere Fehler und typische Entwicklerfehler.",
                            coachNote: "Kein formales Verfahren – Erfahrung und Intuition zählen."
                        },
                        {
                            title: "Explorativer Test",
                            content: "Lernen, Testentwurf und -durchführung laufen gleichzeitig. Sitzungsbasiert mit Test-Charta und Zeitrahmen. Nützlich bei wenig Spezifikation.",
                            coachNote: "'Wenig Spezifikation' + 'Zeitdruck' + 'schnelle Ergebnisse' → Explorativ."
                        },
                        {
                            title: "Checklistenbasierter Test",
                            content: "Checklisten aus Erfahrung, Risiken oder Anforderungen. Muss regelmäßig aktualisiert werden, da Einträge an Effektivität verlieren können.",
                            coachNote: "Checkliste = was nicht vergessen werden soll. Regelmäßig pflegen!"
                        }
                    ]
                },
                {
                    id: "4.5",
                    title: "Auf Zusammenarbeit basierende Testansätze",
                    introText: "Testansätze, die sich auf Zusammenarbeit und Kommunikation konzentrieren, um Fehlerzustände zu vermeiden.",
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
                            keyPoints: [
                                {
                                    title: "Test-First-Ansatz",
                                    content: "ATDD ist ein Test-First-Ansatz: Testfälle werden VOR der Implementierung der User-Story erstellt. Verschiedene Perspektiven (Kunden, Entwickler, Tester) wirken mit.",
                                    coachNote: "ATDD = Tests ZUERST, dann Implementierung."
                                },
                                {
                                    title: "Spezifikationsworkshop",
                                    content: "Erster Schritt: User-Story und Akzeptanzkriterien werden gemeinsam analysiert, diskutiert und geschrieben. Unvollständigkeiten und Mehrdeutigkeiten werden behoben.",
                                    coachNote: "Workshop = gemeinsames Verständnis schaffen."
                                },
                                {
                                    title: "Testfälle erstellen",
                                    content: "Testfälle basieren auf Akzeptanzkriterien und dienen als Beispiele für die Funktionsweise. Erst positive Testfälle, dann negative, dann nicht-funktionale.",
                                    coachNote: "🎯 Prüfungsfokus – ATDD-Reihenfolge:\n\n1. Positive Testfälle (Happy Path)\n2. Negative Testfälle (Fehler/Ausnahmen)\n3. Nicht-funktionale Tests (Performance, etc.)"
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
                            id: "5.1.6",
                            title: "Testpyramide",
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
                    id: "5.2",
                    title: "Testüberwachung und Teststeuerung",
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
                            keyPoints: [
                                {
                                    title: "Zweck",
                                    content: "Testberichte fassen Informationen über Testaktivitäten zusammen und kommunizieren sie – sowohl während als auch am Ende einer Testaktivität.",
                                    coachNote: "Testberichte = Kommunikationsmittel für Stakeholder."
                                },
                                {
                                    title: "Testfortschrittsbericht",
                                    content: "Wird regelmäßig erstellt (täglich, wöchentlich). Enthält: Testzeitraum, Fortschritt inkl. Abweichungen, Hindernisse, Testmetriken, neue Risiken, geplante Tests.",
                                    coachNote: "Fortschrittsbericht = laufende Information während des Testens."
                                },
                                {
                                    title: "Testabschlussbericht",
                                    content: "Wird beim Abschluss erstellt. Enthält: Zusammenfassung, Bewertung gegen Testziele und Endekriterien, Abweichungen vom Plan, Hindernisse, Metriken, Restrisiken, Lessons Learned.",
                                    coachNote: "🎯 Prüfungsfalle – Berichtsarten:\n\nTestFORTSCHRITTSbericht:\n• Regelmäßig (täglich/wöchentlich)\n• Für laufende Steuerung\n\nTestABSCHLUSSbericht:\n• Einmalig am Ende\n• Lessons Learned, Restrisiken"
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
                    id: "5.3",
                    title: "Konfigurationsmanagement",
                    keyPoints: [
                        {
                            title: "Versionierung",
                            content: "Testware (Testfälle, Skripte, Daten) und Testobjekte versioniert verwalten. Welche Version wurde womit getestet?",
                            coachNote: "🎯 Prüfungsfalle – Konfigurationsmanagement:\n\nKM bewahrt die INTEGRITÄT von:\n• Testobjekten (Code-Versionen)\n• Testware (Testfälle, Skripte)\n• Testumgebungen\n\n📌 Typisches Prüfungsszenario:\n'Test besteht in Entwicklungsumgebung, scheitert in Testumgebung'\n→ Verdacht: Konfigurationsmanagement-Problem!\n(Andere Version deployed, andere Umgebung)\n\n❌ NICHT verwechseln mit Fehlermanagement (Status von Bugs)"
                        }
                    ]
                },
                {
                    id: "5.4",
                    title: "Risikomanagement",
                    keyPoints: [
                        {
                            title: "Produktrisiko vs. Projektrisiko",
                            content: "Produktrisiko: Qualitätsrisiko (Fehler im Produkt). Projektrisiko: Termin, Budget, Ressourcen (z.B. Scope Creep, Lieferanten).",
                            coachNote: "🎯 Prüfungsfalle – Risiko-Unterscheidung:\n\n📁 PROJEKTRISIKO (Rahmen):\n• Scope Creep\n• Budgetkürzung\n• Drittanbieter-Probleme\n\n🔧 PRODUKTRISIKO (Software selbst):\n• Langsame Antwortzeit unter Last\n• Sicherheitslücken\n• Funktionsfehler"
                        },
                        {
                            title: "Risikoexposition",
                            content: "Risikoexposition = Wahrscheinlichkeit × Auswirkung. Risikomatrix zur Priorisierung (z.B. mittel × hoch = hoch).",
                            coachNote: "Risikostufe: mittel × hoch = hoch. Nicht verwechseln mit Risikobehandlung."
                        }
                    ]
                },
                {
                    id: "5.5",
                    title: "Fehlermanagement",
                    keyPoints: [
                        {
                            title: "Lebenszyklus eines Fehlers",
                            content: "Erkennen → Melden → Klassifizieren → Beheben → Fehlernachtest. Status und Priorität verfolgen.",
                            coachNote: "Fehlermanagement = von der Meldung bis zum Nachtest."
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
                    title: "Testwerkzeuge – Kategorien",
                    keyPoints: [
                        {
                            title: "Kategorien",
                            content: "Werkzeuge für Testmanagement, statische Analyse, Testentwurf, Testdurchführung (Ausführung, Vergleich), Leistung, Spezialanwendungen.",
                            coachNote: "Prüfung: Welches Werkzeug für welche Aktivität? (Management, Ausführung, Performance.)"
                        },
                        {
                            title: "Testautomatisierung",
                            content: "Werkzeuge führen Tests aus und vergleichen Ergebnisse. Erhöht Wiederholbarkeit, kann Regression unterstützen. Einführung braucht Planung und Pflege.",
                            coachNote: "🎯 Prüfungsfokus – Risiken der Testautomatisierung:\n\n✅ RICHTIGE typische Risiken:\n• Unrealistische Erwartungen\n• Unterschätzte Kosten/Aufwände\n\n❌ FALSCH (keine typischen Risiken):\n• 'Erhöhte Geschwindigkeit führt zu Qualitätsproblemen'"
                        }
                    ]
                },
                {
                    id: "6.2",
                    title: "Effektive Nutzung von Testwerkzeugen",
                    keyPoints: [
                        {
                            title: "Einführung",
                            content: "Pilotprojekt, klare Ziele, Schulung, kontinuierliche Bewertung. Risiken: Abhängigkeit, falsche Erwartungen, Wartungsaufwand.",
                            coachNote: "Werkzeuge einführen = Prozess, nicht nur Installation."
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
