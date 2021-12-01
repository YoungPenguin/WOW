function plotDist() {
    params = {
        metric: document.getElementById("dist_metric").value,
        breakdown: document.getElementById("dist_breakdown").value,
    }
    const commentLines = commentDistData.filter(d => d.breakdown == params.breakdown && d.metric == params.metric)
    const commentsPlotData = commentLines.map(l => {
        const line = { width: 4 }
        const label = l.label.replace(' Stormrage', '').replace(' Windrunner', '').replace(' Theron', '').replace(' Whisperwind', '').replace(' Doomhammer', '').replace(' Hellscream', '')
        if (labelToColor[label]) {
            line.color = labelToColor[label]
        }
        return {
            mode: 'lines+markers',
            name: label,
            legendgroup: label,
            y: l.y,
            x: l.x,
            line,
            marker: {
                size: 10
            }
        }
    })

    const wikiLines = wikiDistData.filter(d => d.breakdown == params.breakdown && d.metric == params.metric)
    const wikiPlotData = wikiLines.map(l => {
        const line = { width: 4 }
        const label = l.label.replace(' Stormrage', '').replace(' Windrunner', '').replace(' Theron', '').replace(' Whisperwind', '').replace(' Doomhammer', '').replace(' Hellscream', '')
        if (labelToColor[label]) {
            line.color = labelToColor[label]
        }
        return {
            mode: 'lines+markers',
            legendgroup: label,
            showlegend: false,
            name: label,
            y: l.y,
            x: l.x,
            xaxis: 'x2',
            yaxis: 'y2',
            line,
            marker: {
                size: 10
            }
        }
    })
    const fixString = s => (s[0].toUpperCase() + s.slice(1)).replace('_', ' ')
    Plotly.newPlot(
        document.getElementById('distPlotElement'),
        [...commentsPlotData, ...wikiPlotData],
        {
            title: 'Compare sentiment distributions',
            xaxis: {
                title: 'Wowhead comments ' + fixString(params.metric)
            },
            yaxis: {
                title: `Density`
            },
            xaxis2: {
                title: 'Wiki quotes ' + fixString(params.metric)
            },
            yaxis2: {
                title: 'Density'
            },
            grid: { rows: 1, columns: 2, pattern: 'independent' }
        },{
            responsive: true
        }
    )
}
plotDist()