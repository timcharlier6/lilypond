
\header {
  title = "Song 3"
  composer = "Tim Charlier"
}

upper = \fixed c' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  b4 g4 g'4 
  g'4 g'4 g4 
  e4 b4 g'4 
  e4 g'4 e4 
  \break
  g'4 a4 g'4 
  a4 e4 a4 
  g4 b4 g'4 
  e4 g4 g4 
  \break

}

lower = \fixed c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  g2.
  g2.
  d2.
  d2.
  \break
  d2.
  e2.
  a2.
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
    