
\header {
  title = "Song 8"
  composer = "Tim Charlier"
}

upper = \fixed c' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  g'4 g4 g'4 
  d4 a4 d4 
  a4 b4 g'4 
  d4 e4 g4 
  \break
  e4 g4 d4 
  g4 e4 g4 
  e4 g4 a4 
  e4 g4 b4 
  \break

}

lower = \fixed c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  a2.
  e2.
  g2.
  b2.
  \break
  e2.
  b2.
  a2.
  d2.
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
    