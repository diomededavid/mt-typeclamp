import Head from "next/head";
import {
  Typography,
  Card,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>MT Typeclamp </title>
      </Head>
      <div className="relative grid min-h-[75vh] w-screen p-8">
        <div className="flex-col gap-2 pt-56 pb-40 text-center">
          <Typography variant="h1" color="blue-gray" placeholder="">
            MT Typeclamp
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 self-end">
          <Card
            placeholder=""
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <div className="w-full py-4">
              <form>
                <fieldset className="flex flex-col gap-y-12">
                  <legend className="pb-4">Common values</legend>
                  <Input
                    label="Base size (px)"
                    variant="static"
                    crossOrigin={undefined}
                  />
                  <Select label="Type Scale" placeholder="Type Scale">
                    {/* 1.067 */}
                    <Option value="1.125">Major Second</Option> {/* 1.125 */}
                    <Option value="1.067">Minor Second</Option>
                    <Option value="1.200">Minor Third</Option> {/* 1.200 */}
                    <Option value="1.250">Major Third</Option> {/* 1.250 */}
                    <Option value="1.333">Perfect Fourth</Option> {/* 1.333 */}
                    <Option value="1.444">Augmented Fourth</Option>
                    {/* 1.444 */}
                    <Option value="1.500">Perfect Fifth</Option> {/* 1.500 */}
                    <Option value="1.618">Golden Ratio</Option> {/* 1.618 */}
                  </Select>
                </fieldset>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
