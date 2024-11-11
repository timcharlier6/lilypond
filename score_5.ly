
\header {
  title = "Song 5"
  composer = "Tim Charlier"
}

upper = \fixed c' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  e4 d4 d4 
  e4 a4 a4 
  a4 g'4 g4 
  d4 d4 e4 
  \break
  a4 d4 b4 
  g4 g'4 g'4 
  d4 d4 g'4 
  a4 b4 a4 
  \break

}

lower = \fixed c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  d2.
  a'2.
  d2.
  g2.
  \break
  d2.
  a2.
  d2.
  e2.
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
    