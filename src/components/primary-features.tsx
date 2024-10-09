import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const MobileFriendlyCard = () => (
  <Card className="relative lg:row-span-2">
    {/* <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div> */}
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
      <CardHeader>
        <CardTitle className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">
          Mobile friendly
        </CardTitle>
        <CardDescription className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
        <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
          <img
            className="size-full object-cover object-top"
            src="https://tailwindui.starxg.com/plus/img/component-images/bento-03-mobile-friendly.png"
            alt=""
          />
        </div>
      </CardContent>
    </div>
    {/* <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div> */}
  </Card>
);

const PerformanceCard = () => (
  <Card className="relative max-lg:row-start-1">
    {/* <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div> */}
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
      <CardHeader>
        <CardTitle className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">
          Performance
        </CardTitle>
        <CardDescription className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores
          impedit.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
        <img
          className="w-full max-lg:max-w-xs"
          src="https://tailwindui.starxg.com/plus/img/component-images/bento-03-performance.png"
          alt=""
        />
      </CardContent>
    </div>
    {/* <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div> */}
  </Card>
);

const SecurityCard = () => (
  <Card className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
    {/* <div className="absolute inset-px rounded-lg bg-white"></div> */}
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
      <CardHeader>
        <CardTitle className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">
          Security
        </CardTitle>
        <CardDescription className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
          Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
          semper morbi.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
        <img
          className="h-[min(152px,40cqw)] object-cover object-center"
          src="https://tailwindui.starxg.com/plus/img/component-images/bento-03-security.png"
          alt=""
        />
      </CardContent>
    </div>
    {/* <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div> */}
  </Card>
);

const PowerfulAPIsCard = () => (
  <Card className="relative lg:row-span-2">
    {/* <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div> */}
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
      <CardHeader>
        <CardTitle className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">
          Network
        </CardTitle>
        <CardDescription className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
          Aenean vulputate justo commodo auctor vehicula in malesuada semper.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
        <img
          alt=""
          src="https://tailwindui.starxg.com/plus/img/component-images/bento-01-network.png"
          className="h-80 object-cover object-center"
        />
      </CardContent>
    </div>
    {/* <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div> */}
  </Card>
);

export function PrimaryFeatures() {
  return (
    <div className="bg-background py-24 sm:py-32 border-t">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Everything you need to deploy your app.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <MobileFriendlyCard />
          <PerformanceCard />
          <SecurityCard />
          <PowerfulAPIsCard />
        </div>
      </div>
    </div>
  );
}
