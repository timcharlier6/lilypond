
\header {
  title = "Song 7"
  composer = "Tim Charlier"
}

upper = \relative c'' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  a4 b4 d4 
  a4 a4 b4 
  gis4 b4 a4 
  e4 d4 d4 
  \break
  gis4 b4 d4 
  e4 gis4 c4 
  gis4 gis4 gis4 
  a4 c4 a4 
  \break

}

lower = \relative c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  c4
  c4
  c4
  a4
  \break
  a4
  f4
  e4
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
    