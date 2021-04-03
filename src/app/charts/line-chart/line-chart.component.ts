import { Component, OnInit } from '@angular/core';
import {LINE_CHART_CLORS} from '../../shared/chart.colors'

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [35,14,46,23,38,56], label: 'Sentiment Analysis'},
  { data: [15,18,26,13,26,28], label: 'Image Recognition'},
  { data: [55,34,49,53,66,62], label: 'Forecasting'},
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_CLORS


  ngOnInit(): void {
  }

}
