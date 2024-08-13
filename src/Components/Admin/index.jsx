import {
  AudioOutlined,
  CommentOutlined,
  CopyOutlined,
  DesktopOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  GiftOutlined,
  MoreOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import LayoutEl from "../Shared/Layout";
import { Button, Card, Select } from "antd";
import ReactApexChart from "react-apexcharts";

const productChart = {
  series: [
    {
      data: [
        {
          x: "2018",
          y: [2800, 4500],
        },
        {
          x: "2019",
          y: [3200, 4100],
        },
        {
          x: "2020",
          y: [2950, 7800],
        },
        {
          x: "2021",
          y: [3000, 4600],
        },
        {
          x: "2022",
          y: [3500, 4100],
        },
        {
          x: "2023",
          y: [4500, 6500],
        },
        {
          x: "2024",
          y: [4100, 5600],
        },
      ],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: false,
      },
      toolbar: false,
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [["#008FFB", "#00E396"]],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Product A", "Product B"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#00E396"],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
    },
    yaxis: {
      min: 0,
      max: 8000,
      tickAmount: 8,
      label: {
        formatter: function (value) {
          return value.toFixed(0);
        },
      },
    },
  },
};
const circleChart = {
  series: [95],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  },
};
const lineChart={series: [{
  name: "Desktops",
  data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
options: {
chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'Followers',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
}
},}
const Admin = () => {
  const display = (
    <>
      <LayoutEl>
        <div className="flex items-center justify-between">
          <h1 className="text-sm text-zinc-400 font-semibold">Overview</h1>
          <Select
            showSearch
            placeholder="Select Duration"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "this month",
                label: "This Month",
              },
              {
                value: "last month",
                label: "Last Month",
              },
              {
                value: "six month",
                label: "Six Month",
              },
            ]}
          />
        </div>
        <div className="grid md:grid-cols-4 gap-3 my-3">
          <Card className="shadow-sm">
            <div className="flex gap-x-3 items-center">
              <Button
                icon={<UsergroupAddOutlined />}
                size="large"
                shape="circle"
                className="bg-rose-100 text-rose-500"
              />
              <div>
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">New Members</p>
              </div>
            </div>
          </Card>
          <Card className="shadow-sm">
            <div className="flex gap-x-3 items-center">
              <Button
                icon={<EnvironmentOutlined />}
                size="large"
                shape="circle"
                className="bg-green-100 text-green-500"
              />
              <div>
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">Place Added</p>
              </div>
            </div>
          </Card>
          <Card className="shadow-sm">
            <div className="flex gap-x-3 items-center">
              <Button
                icon={<AudioOutlined />}
                size="large"
                shape="circle"
                className="bg-orange-100 text-orange-500"
              />
              <div>
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">Support Members</p>
              </div>
            </div>
          </Card>
          <Card className="shadow-sm">
            <div className="flex gap-x-3 items-center">
              <Button
                icon={<GiftOutlined />}
                size="large"
                shape="circle"
                className="bg-blue-100 text-blue-500"
              />
              <div>
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">Tags Used</p>
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <ReactApexChart
            options={productChart.options}
            series={productChart.series}
            type="rangeBar"
            height={350}
          />
        </Card>
        <div className="grid my-4 md:grid-cols-3 gap-3">
          <div className="grid md:grid-cols-2 gap-2 ">
            <Card className="shadow-sm">
              <div className="flex items-center flex-col">
                <Button
                  icon={<DesktopOutlined />}
                  size="large"
                  type="text"
                  shape="circle"
                />
                <h1 className="font-bold text-zinc-700 text-2xl">24</h1>
                <p>New Post</p>
              </div>
            </Card>
            <Card className="shadow-sm">
              <div className="flex items-center flex-col">
                <Button
                  icon={<CopyOutlined />}
                  size="large"
                  type="text"
                  shape="circle"
                />
                <h1 className="font-bold text-zinc-700 text-2xl">24</h1>
                <p>Attached File</p>
              </div>
            </Card>
            <Card className="shadow-sm">
              <div className="flex items-center flex-col">
                <Button
                  icon={<CommentOutlined />}
                  size="large"
                  type="text"
                  shape="circle"
                />
                <h1 className="font-bold text-zinc-700 text-2xl">24</h1>
                <p>Comments</p>
              </div>
            </Card>
            <Card className="shadow-sm">
              <div className="flex items-center flex-col">
                <Button
                  icon={<EyeOutlined />}
                  size="large"
                  type="text"
                  shape="circle"
                />
                <h1 className="font-bold text-zinc-700 text-2xl">24</h1>
                <p>Total Views</p>
              </div>
            </Card>
          </div>
          <Card
            className="shadow-sm"
            title="STATISTICS"
            extra={<Button icon={<MoreOutlined />} shape="circle" />}
          >
            <ReactApexChart options={circleChart.options} series={circleChart.series} type="radialBar" height={350}/>
          </Card>
          <Card>
          <ReactApexChart options={lineChart.options} series={lineChart.series} type="line" height={350}/>
          </Card>
        </div>
      </LayoutEl>
    </>
  );
  return display;
};
export default Admin;
