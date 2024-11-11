
\header {
  title = "Song 1"
  composer = "Tim Charlier"
}

upper = \fixed c' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  b4 g'4 d4 
  b4 g4 g'4 
  e4 e4 g4 
  a4 b4 b4 
  \break
  b4 a4 b4 
  b4 e4 d4 
  g'4 g4 b4 
  a4 a4 g4 
  \break

}

lower = \fixed c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  e2.
  d2.
  b2.
  b2.
  \break
  e2.
  g2.
  a2.
  g2.
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
    