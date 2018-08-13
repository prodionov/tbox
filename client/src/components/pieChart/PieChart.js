import React, { Component } from "react";
// import { apiRequest } from "../../utils/fetchApi";
import { connect } from "react-redux";
import Login from "../login/Login";
// import * as d3 from "d3";

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
  componentDidMount() {
    // apiRequest("./piechart").then(result => {
    //   let resultThisYear = clothesProcess(result.payload);
    //   let ratio = percentClothes(resultThisYear);
    //   console.log("ratios", ratio);
    //this.setState({ ratios: ratio });
    // });
  }

  // initialise = () => {
  //   const svg = d3.select("#d3_display");
  //   let width = 100,
  //     height = 100,
  //     radius = 50;
  //
  //   let g = svg
  //     .append("g")
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  //
  //   const color = d3.scaleOrdinal([
  //     "#98abc5",
  //     "#8a89a6",
  //     "#7b6888",
  //     "#6b486b",
  //     "#a05d56",
  //     "#d0743c",
  //     "#ff8c00"
  //   ]);
  //
  //   let pie = d3
  //     .pie()
  //     .sort(null)
  //     .value(function(d) {
  //       return d.population;
  //     });
  //
  //   let path = d3
  //     .arc()
  //     .outerRadius(radius - 10)
  //     .innerRadius(0);
  //
  //   let label = d3
  //     .arc()
  //     .outerRadius(radius - 40)
  //     .innerRadius(radius - 40);
  //   let data;
  //
  //   let arc = g
  //     .selectAll(".arc")
  //     .data(pie(data))
  //     .enter()
  //     .append("g")
  //     .attr("class", "arc");
  //
  //   arc
  //     .append("path")
  //     .attr("d", path)
  //     .attr("fill", function(d) {
  //       return color(d.data.clothes);
  //     });
  //
  //   arc
  //     .append("text")
  //     .attr("transform", function(d) {
  //       return "translate(" + label.centroid(d) + ")";
  //     })
  //     .attr("dy", "0.35em")
  //     .text(function(d) {
  //       return d.data.clothes;
  //     });
  // };

  render() {
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    username: state.login.username
  };
};

export default connect(mapStateToProps, {})(PieChart);
