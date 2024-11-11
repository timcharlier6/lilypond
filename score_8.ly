
\header {
  title = "Song 8"
  composer = "Tim Charlier"
}

upper = \relative c'' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  gis4 gis4 e4 
  d4 c4 e4 
  e4 gis4 d4 
  a4 gis4 b4 
  \break
  c4 c4 a4 
  a4 e4 b4 
  b4 b4 e4 
  b4 e4 d4 
  \break

}

lower = \relative c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  d4
  c4
  a4
  d4
  \break
  d4
  d4
  f4
  f4
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
    