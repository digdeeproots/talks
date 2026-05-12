param(
    [Parameter(Mandatory=$true, Position=0)]
    [string]$Text
)

Add-Type -AssemblyName System.Speech
$synthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synthesizer.Speak($Text)