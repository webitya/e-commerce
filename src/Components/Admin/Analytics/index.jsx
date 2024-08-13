import LayoutEl from "../../Shared/Layout";
import Card from "antd/es/card/Card";
import {
  AudioOutlined,
  CaretDownFilled,
  CaretDownOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  LikeOutlined,
  MessageOutlined,
  UsergroupAddOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
const Analytics=()=>{
      const display=(
        <>
            <LayoutEl>
               <div>
                   <div className="grid md:grid-cols-4 gap-3 my-3">
          <Card className="shadow-sm">
            <div className="flex gap-y-3 flex-col justify-center items-center">
              <Button
                icon={<UsergroupAddOutlined />}
                size="large"
                shape="circle"
                className="bg-blue-100 text-blue-500"
              />
              <div className="text-center"> 
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">Followers</p>
              </div>
              <Button style={{borderRadius:20}} className="bg-blue-50 text-blue-600" icon={<CaretDownOutlined/>}>1.6%</Button>
            </div>
          </Card>
          <Card className="shadow-sm">
            <div className="flex gap-y-3 items-center flex-col justify-center">
              <Button
                icon={<LikeOutlined />}
                size="large"
                shape="circle"
                className="bg-green-100 text-green-500"
              />
              <div className="text-center">
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">Impression</p>
              </div>
              <Button style={{borderRadius:20}} className="bg-green-50 text-green-600" icon={<CaretDownOutlined/>}>1.6%</Button>
            </div>
          </Card>
          <Card className="shadow-sm">
            <div className="flex gap-y-3 items-center flex-col">
              <Button
                icon={<WifiOutlined />}
                size="large"
                shape="circle"
                className="bg-rose-100 text-rose-500"
              />
              <div className="text-center">
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">Connect</p>
              </div>
              <Button style={{borderRadius:20}} className="bg-rose-50 text-rose-600" icon={<CaretDownOutlined/>}>1.6%</Button>
            </div>
          </Card>
          <Card className="shadow-sm">
            <div className="flex gap-y-3 flex-col justify-center items-center">
              <Button
                icon={<MessageOutlined />}
                size="large"
                shape="circle"
                className="bg-blue-100 text-blue-500"
              />
              <div className="text-center">
                <h1 className="text-5xl font-semibold text-zinc-700">10,535</h1>
                <p className="mt-2 text-sm text-zinc-400">Rate Reviews</p>
              </div>
              <Button style={{borderRadius:20}} className="bg-blue-50 text-blue-600" icon={<CaretDownOutlined/>}>1.6%</Button>
            </div>
          </Card>
                   </div>
               </div>
            </LayoutEl>
        </>
      )
      return display;
}
export default Analytics;