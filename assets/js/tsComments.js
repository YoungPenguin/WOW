const labelToColor = {
    'Horde': '#FF3333',
    'Alliance': '#3399FF',
    'Neutral': '#A0A0A0',
    'Male': '#3399FF',
    'Female': '#D44ACC',
    'Alive': '#27CF1F',
    'Deceased': '#A0A0A0',
    "Khadgar, Illidan, Lor'themar": '#808000',
    "Deathwing, Sargeras, Yogg-Saron": '#ff4500',
    "Sylvanas, Lich King, Varian Wrynn": '#c71585',
    "Tyrande, Malfurion, Alexstrasza": '#00ff00	',
    "Thrall, Ner'zhul, Orgrim": '#00ffff',
    "Anzu, Terokk, Talon King Ikiss": '#0000ff',
    "Jaina Proudmoore, Anduin Wrynn, Garrosh": '#1e90ff'
}

function plotTs() {
    params = {
        metric: document.getElementById("ts_metric").value,
        breakdown: document.getElementById("ts_breakdown").value,
        resample: document.getElementById("ts_resample").value,
        replies: document.getElementById("ts_replies").value != "include"
    }
    const lines = commentData.filter(
        d => d.breakdown == params.breakdown && d.metric == params.metric && d.resample == params.resample && d.replies == params.replies
    )
    const plotData = lines.map(l => {
        const line = { width: 4 }
        if (labelToColor[l.label]) {
            line.color = labelToColor[l.label]
        }
        return {
            mode: 'lines+markers',
            name: l.label.replace(' Stormrage', '').replace(' Windrunner', '').replace(' Theron', '').replace(' Whisperwind', '').replace(' Doomhammer', '').replace(' Hellscream', ''),
            y: l.y,
            x: l.x,
            line,
            marker: {
                size: 10
            }
        }
    })
    const fixString = s => (s[0].toUpperCase() + s.slice(1)).replace('_', ' ')
    Plotly.newPlot(
        document.getElementById('tsPlotElement'),
        plotData,
        {
            title: 'Wowhead comments',
            xaxis: {
                title: 'Date'
            },
            yaxis: {
                title: `${fixString(params.metric)}`
            },
            margin: {
                l: 100,
                r: 20,
                t: 100
            },
        }
    )
}
plotTs()