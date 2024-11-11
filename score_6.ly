
\header {
  title = "Song 6"
  composer = "Tim Charlier"
}

upper = \fixed c' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  b4 e4 b4 
  e4 g4 g4 
  g4 b4 d4 
  d4 g'4 e4 
  \break
  b4 b4 b4 
  d4 g4 b4 
  b4 g'4 b4 
  a4 a4 g'4 
  \break

}

lower = \fixed c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  e2.
  a'2.
  e2.
  g2.
  \break
  b2.
  b2.
  b2.
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
    