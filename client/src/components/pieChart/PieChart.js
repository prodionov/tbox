import React, { Component } from "react";
import { apiRequest } from "../../utils/fetchApi";
import { connect } from "react-redux";
import compileDataSet from "./helper";
import Login from "../login/Login";
import * as d3 from "d3";

const clothesProcess = payload => {
  let result = payload.filter(value => {
    let year = value.date.split("-");
    year = Number(year[0]);
    return year === 2018;
  });
  return result;
};

const percentClothes = arr => {
  let counted = arr.reduce((allClothes, clothes) => {
    if (clothes.clothe in allClothes) {
      allClothes[clothes.clothe]++;
    } else {
      allClothes[clothes.clothe] = 1;
    }
    return allClothes;
  }, {});
  let total = arr.length;
  for (let key in counted) {
    counted[key] /= total;
  }
  return counted;
};

class PieChart extends Component {
  state = {
    ratios: ""
  };

  componentDidMount() {
    apiRequest("./piechart").then(result => {
      let resultThisYear = clothesProcess(result.payload);
      let ratio = percentClothes(resultThisYear);
      this.setState({ ratios: ratio });
    });
  }

  initialise = data => {
    const format = d3.format(".1f");

    const svg = d3.select(".d3-display");
    let width = 300,
      height = 150,
      radius = 70;

    let g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("g").attr("class", "lables");
    svg.append("g").attr("class", "lines");

    const colors = [
      "#234d20",
      "#36802d",
      "#77ab59",
      "#356244",
      "#4b8c61",
      "#788e76"
    ];

    let dataSet = compileDataSet(this.state.ratios, colors);
    let pie = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.value;
      });

    let path = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    let label = d3
      .arc()
      .outerRadius(radius + 10)
      .innerRadius(radius);

    let arc = g
      .selectAll(".arc")
      .data(pie(dataSet))
      .enter()
      .append("g")
      .attr("class", "arc");

    arc
      .append("path")
      .attr("d", path)
      .attr("fill", function(d) {
        return d.data.color;
      });

    arc
      .append("text")
      .attr("transform", function(d) {
        return "translate(" + label.centroid(d) + ")";
      })
      .attr("dy", "0.35em")
      .attr("font-size", "0.6em")
      .text(function(d) {
        return `${d.data.label} (${format(100 * d.data.value)})`;
      });
  };

  render() {
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    let ratios = this.state.ratios;
    if (ratios) {
      this.initialise(ratios);
    }
    return <svg className="d3-display" />;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    username: state.login.username
  };
};

export default connect(mapStateToProps, {})(PieChart);
