
\header {
  title = "Song 7"
  composer = "Tim Charlier"
}

upper = \fixed c' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  g4 b4 d4 
  a4 d4 d4 
  g4 d4 g'4 
  e4 e4 g4 
  \break
  e4 b4 g4 
  g4 e4 e4 
  a4 a4 g'4 
  a4 a4 e4 
  \break

}

lower = \fixed c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  a2.
  a'2.
  a'2.
  g2.
  \break
  b2.
  d2.
  e2.
  a'2.
  \break

}

\score {
  \new PianoStaff \with { instrumentName = "Piano" }
  <<
    \new Staff = "upper" \upper
    \new Staff = "lower" \lower
  >>
  \layout { }
  \midi { }
}
    