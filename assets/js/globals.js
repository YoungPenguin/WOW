// const labelToColor = {
//     'Horde': '#FF3333',
//     'Alliance': '#3399FF',
//     'Neutral': '#A0A0A0',
//     'Male': '#3399FF',
//     'Female': '#D44ACC',
//     'Alive': '#27CF1F',
//     'Deceased': '#A0A0A0',
//     "Khadgar, Illidan, Lor'themar": '#808000',
//     "Deathwing, Sargeras, Yogg-Saron": '#ff4500',
//     "Sylvanas, Lich King, Varian Wrynn": '#c71585',
//     "Tyrande, Malfurion, Alexstrasza": '#00ff00	',
//     "Thrall, Ner'zhul, Orgrim": '#00ffff',
//     "Anzu, Terokk, Talon King Ikiss": '#0000ff',
//     "Jaina Proudmoore, Anduin Wrynn, Garrosh": '#1e90ff'
// }

const shortCommunityName = (s) => s.replace(' Stormrage', '').replace(' Windrunner', '').replace(' Theron', '').replace(' Whisperwind', '').replace(' Doomhammer', '').replace(' Hellscream', '').replace(' Wrynn', '').replace(' Proudmoore', '')

const labelToRGB = {
    'Alive': ['rgb(34, 139, 34)', 'rgba(34, 139, 34, 0.2)'],
    'Deceased': ['rgb(52, 52, 52)', 'rgba(52, 52, 52, 0.2)'],
    'Unknown': ['rgb(160, 160, 160)', 'rgba(160, 160, 160, 0.2)'],
    'Alliance': ['rgb(51, 153, 255)', 'rgba(51, 153, 255, 0.2)'],
    'Horde': ['rgb(255, 51, 51)', 'rgba(255, 51, 51, 0.2)'],
    'Neutral': ['rgb(160, 160, 160)', 'rgba(160, 160, 160, 0.2)'],
    'Male': ['rgb(51, 153, 255)', 'rgba(51, 153, 255, 0.2)'],
    'Female': ['rgb(212, 74, 204)', 'rgba(212, 74, 204, 0.2)'],
    "Khadgar, Illidan, Lor'themar": ['rgb(128, 128, 0)', 'rgba(128, 128, 0, 0.2)'],
    "Deathwing, Sargeras, Yogg-Saron": ['rgb(255, 69, 0)', 'rgba(255, 69, 0, 0.2)'],
    "Sylvanas, Lich King, Varian Wrynn": ['rgb(199, 21, 133)', 'rgba(199, 21, 133, 0.2)'],
    "Tyrande, Malfurion, Alexstrasza": ['rgb(0, 255, 0)', 'rgba(0, 255, 0, 0.2)'],
    "Thrall, Ner'zhul, Orgrim": ['rgb(0, 255, 255)', 'rgba(0, 255, 255, 0.2)'],
    "Anzu, Terokk, Talon King Ikiss": ['rgb(0, 0, 255)', 'rgba(0, 0, 255, 0.2)'],
    "Jaina Proudmoore, Anduin Wrynn, Garrosh": ['rgb(30, 144, 255)', 'rgba(30, 144, 255, 0.2)']
}

