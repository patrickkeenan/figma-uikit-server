import { useState } from "react";
import {
  Root,
  Fullscreen,
  Container,
  Text,
  Image,
  Content,
  SvgIconFromText,
} from "@react-three/uikit";
export default function Layout() {
  const [on, setOn] = useState(false);
  const geo = {
    id: "I233:627;71:7855",
    name: "1538_vector",
    type: "VECTOR",
    scrollBehavior: "SCROLLS",
    blendMode: "PASS_THROUGH",
    absoluteBoundingBox: {
      x: 103.93045043945312,
      y: 929.7675170898438,
      width: 80.43988800048828,
      height: 102.30549621582031,
    },
    absoluteRenderBounds: {
      x: 101.21720123291016,
      y: 927.2138671875,
      width: 90.97368621826172,
      height: 112.8392333984375,
    },
    constraints: {
      vertical: "CENTER",
      horizontal: "CENTER",
    },
    relativeTransform: [
      [1, 0, 41.78012466430664],
      [0, 1, 30.76752281188965],
    ],
    size: {
      x: 80.43988800048828,
      y: 102.30549621582031,
    },
    fills: [
      {
        blendMode: "NORMAL",
        type: "SOLID",
        color: { r: 1, g: 1, b: 1, a: 1 },
      },
    ],
    fillGeometry: [
      {
        path: "M76.6681 0.0183768C76.3043 0.051794 73.0719 0.624063 72.683 0.703429L27.9399 9.72189L27.9232 9.72607C26.7566 9.97252 25.8408 10.3861 25.1341 10.9792C24.281 11.6935 23.8085 12.7044 23.6287 13.8823C23.5911 14.133 23.5284 14.6426 23.5284 15.3945C23.5284 15.3945 23.5284 61.059 23.5284 71.3348C23.5284 72.6423 23.4238 73.9121 22.5373 74.994C21.6508 76.0759 20.5553 76.4017 19.2715 76.6607C18.2972 76.857 17.3229 77.0533 16.3486 77.2497C12.652 77.9932 10.2476 78.4986 8.06901 79.3424C5.98658 80.1486 4.42685 81.1762 3.18491 82.4794C0.721953 85.0567 -0.277447 88.553 0.0654435 91.8279C0.358155 94.6224 1.61682 97.2958 3.7787 99.2716C5.23808 100.608 7.06125 101.623 9.21059 102.054C11.4394 102.501 13.8145 102.346 17.2852 101.644C19.1335 101.272 20.8647 100.692 22.5122 99.7185C24.1431 98.7578 25.5397 97.4754 26.6311 95.9132C27.7267 94.3467 28.4334 92.6049 28.8223 90.7544C29.2237 88.8454 29.3199 87.1203 29.3199 85.2155L29.3199 36.6979C29.3199 34.0997 30.0558 33.4147 32.155 32.9051C32.155 32.9051 69.3461 25.4113 71.0814 25.0729C73.5026 24.6092 74.6442 25.2985 74.6442 27.834L74.6442 60.9546C74.6442 62.2662 74.6316 63.5946 73.7368 64.6806C72.8503 65.7625 71.7547 66.0883 70.4709 66.3473C69.4966 66.5436 68.5223 66.74 67.548 66.9363C63.8515 67.6798 61.4471 68.1852 59.2684 69.029C57.186 69.8352 55.6263 70.8628 54.3843 72.1661C51.9214 74.7434 50.8342 78.2396 51.1771 81.5145C51.4698 84.309 52.8162 86.9824 54.9781 88.9582C56.4375 90.2949 58.2607 91.2807 60.41 91.7151C62.6388 92.1621 65.014 92.0033 68.4847 91.3058C70.3329 90.934 72.0641 90.3784 73.7117 89.4052C75.3425 88.4444 76.7391 87.162 77.8305 85.5998C78.9261 84.0333 79.6328 82.2915 80.0217 80.441C80.4231 78.532 80.4398 76.8069 80.4398 74.9021L80.4398 3.96996C80.4482 1.39684 79.0892 -0.190481 76.6681 0.0183768Z",
        windingRule: "EVENODD",
      },
    ],
    strokes: [],
    strokeWeight: 0.15960295498371124,
    strokeAlign: "INSIDE",
    strokeGeometry: [],
    effects: [
      {
        type: "DROP_SHADOW",
        visible: true,
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.05000000074505806,
        },
        blendMode: "NORMAL",
        offset: {
          x: 2.55364727973938,
          y: 2.713250160217285,
        },
        radius: 5.266897678375244,
        showShadowBehindNode: false,
      },
      {
        type: "DROP_SHADOW",
        visible: true,
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.14000000059604645,
        },
        blendMode: "NORMAL",
        offset: {
          x: 0.9576177597045898,
          y: 1.9152355194091797,
        },
        radius: 1.9152355194091797,
        showShadowBehindNode: false,
      },
    ],
    parentNode: null,
    nextSibling: null,
    prevSibling: null,
  };
  const geo2 = {
    id: "4:43",
    name: "4235_vector",
    type: "VECTOR",
    scrollBehavior: "SCROLLS",
    blendMode: "PASS_THROUGH",
    absoluteBoundingBox: {
      x: -807.1588134765625,
      y: -2589.794189453125,
      width: 23.437530517578125,
      height: 18.731204986572266,
    },
    absoluteRenderBounds: {
      x: -807.1588134765625,
      y: -2589.794189453125,
      width: 23.4375,
      height: 18.731201171875,
    },
    constraints: {
      vertical: "SCALE",
      horizontal: "SCALE",
    },
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 0.646881103515625],
    ],
    size: {
      x: 23.437530517578125,
      y: 18.731204986572266,
    },
    fills: [
      {
        opacity: 0.8500000238418579,
        blendMode: "NORMAL",
        type: "SOLID",
        color: {
          r: 0.9803921580314636,
          g: 0.9764705896377563,
          b: 0.9607843160629272,
          a: 1,
        },
      },
    ],
    fillGeometry: [
      {
        path: "M2.40938 15.5531L21.0281 15.5531C21.8218 15.5531 22.4219 15.35 22.8281 14.9437C23.2344 14.5375 23.4375 13.9375 23.4375 13.1437L23.4375 2.4C23.4375 1.6125 23.2344 1.01562 22.8281 0.609372C22.4219 0.203124 21.8218 0 21.0281 0L2.40938 0C1.61563 0 1.01562 0.203124 0.609375 0.609372C0.203125 1.01562 0 1.6125 0 2.4L0 13.1437C0 13.9375 0.203125 14.5375 0.609375 14.9437C1.01562 15.35 1.61563 15.5531 2.40938 15.5531ZM2.4375 14.0437C2.13125 14.0437 1.9 13.9672 1.74375 13.8141C1.5875 13.6609 1.50938 13.4312 1.50938 13.125L1.50938 2.42812C1.50938 2.12187 1.5875 1.89219 1.74375 1.73906C1.9 1.58593 2.13125 1.50937 2.4375 1.50937L21 1.50937C21.3125 1.50937 21.5453 1.58593 21.6984 1.73906C21.8515 1.89219 21.9281 2.12187 21.9281 2.42812L21.9281 13.125C21.9281 13.4312 21.8515 13.6609 21.6984 13.8141C21.5453 13.9672 21.3125 14.0437 21 14.0437L2.4375 14.0437ZM7.00312 18.7312L16.4343 18.7312C16.6406 18.7312 16.8187 18.6578 16.9688 18.511C17.1188 18.3641 17.1938 18.1844 17.1938 17.9718C17.1938 17.7656 17.1188 17.5875 16.9688 17.4375C16.8187 17.2875 16.6406 17.2125 16.4343 17.2125L7.00312 17.2125C6.79688 17.2125 6.61875 17.2875 6.46875 17.4375C6.31875 17.5875 6.24375 17.7656 6.24375 17.9718C6.24375 18.1844 6.31875 18.3641 6.46875 18.511C6.61875 18.6578 6.79688 18.7312 7.00312 18.7312ZM14.5499 6.06563C14.775 6.00938 14.9281 5.93906 15.0094 5.85469C15.0906 5.77031 15.1312 5.59062 15.1312 5.31563L15.1312 3.47813C15.1312 3.29688 15.0906 3.17031 15.0094 3.09844C14.9281 3.02656 14.7625 3.02187 14.5125 3.08438L11.775 3.75937C11.5437 3.81562 11.3922 3.8875 11.3203 3.975C11.2484 4.0625 11.2125 4.24687 11.2125 4.52812L11.2125 8.74688C11.2125 8.95938 11.1859 9.10001 11.1328 9.16874C11.0797 9.23748 10.9344 9.30624 10.6969 9.37504L9.83433 9.59997C9.40936 9.71249 9.04219 9.90001 8.73281 10.1625C8.42343 10.425 8.26875 10.7875 8.26875 11.25C8.26875 11.65 8.40781 11.9781 8.68593 12.2344C8.96406 12.4907 9.34062 12.6188 9.81561 12.6188C10.4843 12.6188 11.025 12.4031 11.4375 11.9718C11.85 11.5406 12.0563 10.9844 12.0563 10.3031L12.0563 7.07813C12.0563 6.90937 12.0781 6.79375 12.1219 6.73125C12.1656 6.66875 12.2406 6.625 12.3468 6.6L14.5499 6.06563Z",
        windingRule: "NONZERO",
      },
    ],
    strokes: [],
    strokeWeight: 0.9599998593330383,
    strokeAlign: "INSIDE",
    strokeGeometry: [],
    effects: [],
    parentNode: null,
    nextSibling: null,
    prevSibling: null,
  };
  // FIGMA
  // node.strokeCap
  // NONE
  // ROUND
  // SQUARE
  // LINE_ARROW
  // TRIANGLE_ARROW
  // DIAMOND_FILLED
  // CIRCLE_FILLED
  // TRIANGLE_FILLED
  // WASHI_TAPE_1
  // WASHI_TAPE_2
  // WASHI_TAPE_3
  // WASHI_TAPE_4
  // WASHI_TAPE_5
  // WASHI_TAPE_6

  // SVG
  // strokeLinecap
  // "butt", "round", or "square"
  // strokeLinejoin
  // "miter", "round", or "bevel"
  return (
    <Root pixelSize={0.01} sizeX={4.39} sizeY={3.63}>
      <Container>
        <Text>Test</Text>
        <SvgIconFromText
          svgWidth={geo.size.x}
          svgHeight={geo.size.y}
          text={`<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <path d="${geo.fillGeometry[0].path}" />
        </svg>`}
          width={200}
        />
      </Container>
    </Root>
  );
}
