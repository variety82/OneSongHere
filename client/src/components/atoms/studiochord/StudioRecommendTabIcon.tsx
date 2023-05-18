import React from 'react';

interface StudioRecommendTabIconProps {
  width?: number;
  color?: string;
}
const StudioRecommendTabIcon = ({
  width = 50,
  color = 'black',
}: StudioRecommendTabIconProps) => {
  const svgHeight = width * (123 / 115);

  return (
    <svg
      width={width}
      height={svgHeight}
      viewBox="0 0 115 123"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1522_884)">
        <path
          d="M64.9404 8.92023C66.9704 12.4402 68.3604 21.1702 69.0904 32.7302H82.0604V20.4602C81.7804 20.3302 81.5104 20.1802 81.2504 20.0102C80.7604 19.7002 80.3104 19.3402 79.9204 18.9502L79.8704 18.9002C79.1804 18.2102 78.6304 17.3802 78.2504 16.4602C77.8704 15.5502 77.6604 14.5502 77.6604 13.5002C77.6604 12.4602 77.8704 11.4702 78.2504 10.5502C78.6404 9.60023 79.2204 8.75023 79.9204 8.04023C80.6304 7.33023 81.4804 6.76023 82.4304 6.37023C83.3404 5.99023 84.3404 5.78023 85.3804 5.78023C86.4204 5.78023 87.4104 5.99023 88.3304 6.37023C89.2804 6.76023 90.1304 7.34023 90.8404 8.04023C91.5504 8.75023 92.1204 9.60023 92.5104 10.5402L92.5304 10.6002C92.8904 11.5002 93.0904 12.4802 93.0904 13.4902C93.0904 14.5302 92.8804 15.5202 92.5004 16.4402C92.1104 17.3902 91.5304 18.2402 90.8304 18.9502L90.7704 19.0102C90.4204 19.3502 90.0304 19.6702 89.6204 19.9402C89.4004 20.0902 89.1704 20.2202 88.9304 20.3502V36.1902C88.9304 37.1402 88.5404 38.0002 87.9204 38.6202C87.3004 39.2402 86.4404 39.6302 85.4904 39.6302H69.4304C69.5504 42.9202 69.6304 46.3802 69.6604 49.9502H100.1C100.23 49.6902 100.37 49.4402 100.52 49.2002L100.56 49.1502C100.85 48.7002 101.19 48.2902 101.55 47.9302C102.26 47.2202 103.11 46.6502 104.06 46.2602L104.12 46.2402C105.02 45.8802 106 45.6702 107.01 45.6702C108.05 45.6702 109.04 45.8802 109.96 46.2602C110.91 46.6502 111.76 47.2302 112.47 47.9302C113.18 48.6402 113.75 49.4902 114.14 50.4402C114.52 51.3602 114.73 52.3502 114.73 53.3902C114.73 54.4302 114.52 55.4202 114.14 56.3402C113.75 57.2902 113.17 58.1402 112.47 58.8502C111.76 59.5602 110.91 60.1302 109.96 60.5202L109.9 60.5402C109 60.9002 108.02 61.1002 107.01 61.1002C105.97 61.1002 104.97 60.8902 104.06 60.5102C103.12 60.1202 102.27 59.5502 101.55 58.8402C101.17 58.4602 100.83 58.0402 100.53 57.5702C100.37 57.3302 100.23 57.0802 100.1 56.8202H69.6704C69.6404 60.7202 69.5604 64.7102 69.4304 68.7702H106.64C107.59 68.7702 108.45 69.1602 109.07 69.7802C109.69 70.4002 110.08 71.2602 110.08 72.2102V97.7402C110.41 97.8802 110.72 98.0402 111.02 98.2202C111.56 98.5402 112.05 98.9302 112.49 99.3702C113.2 100.08 113.77 100.93 114.16 101.88L114.18 101.94C114.54 102.84 114.75 103.82 114.75 104.83C114.75 105.87 114.54 106.86 114.16 107.78C113.77 108.73 113.19 109.58 112.49 110.29C111.78 111 110.93 111.57 109.98 111.96C109.07 112.34 108.07 112.55 107.03 112.55C105.99 112.55 105 112.34 104.08 111.96C103.13 111.57 102.28 110.99 101.57 110.29C100.86 109.58 100.29 108.73 99.9004 107.78C99.5204 106.87 99.3104 105.87 99.3104 104.83C99.3104 103.79 99.5204 102.79 99.9004 101.88C100.29 100.93 100.87 100.08 101.57 99.3702C101.89 99.0502 102.25 98.7502 102.63 98.4802C102.81 98.3502 103 98.2302 103.2 98.1202V75.6602H69.1604C69.0104 78.9002 68.8304 82.1502 68.6104 85.3902H79.6504C80.6004 85.3902 81.4604 85.7802 82.0804 86.4002C82.7004 87.0202 83.0904 87.8802 83.0904 88.8302V102.49C83.3404 102.62 83.5704 102.76 83.8104 102.91C84.2704 103.21 84.6804 103.55 85.0504 103.92L85.1104 103.98C85.7904 104.68 86.3504 105.51 86.7304 106.43C87.1104 107.34 87.3204 108.34 87.3204 109.38C87.3204 110.42 87.1104 111.42 86.7304 112.33L86.7004 112.39C86.3104 113.32 85.7404 114.15 85.0504 114.84L85.0004 114.89C84.3004 115.58 83.4704 116.14 82.5604 116.52C81.6504 116.9 80.6404 117.11 79.6004 117.11C78.5604 117.11 77.5704 116.9 76.6504 116.52C75.7004 116.13 74.8504 115.55 74.1404 114.85L74.0804 114.79C73.4004 114.09 72.8404 113.26 72.4604 112.34C72.0804 111.42 71.8704 110.43 71.8704 109.39C71.8704 108.35 72.0804 107.36 72.4604 106.44C72.8504 105.49 73.4204 104.64 74.1304 103.93C74.5204 103.54 74.9604 103.19 75.4204 102.89C75.6704 102.73 75.9304 102.58 76.2004 102.45V92.2802H68.1004C67.9904 93.6502 67.8704 95.0202 67.7504 96.3802C67.5904 98.1402 67.0804 101.39 67.4104 103C68.2904 107.27 64.4404 120.15 53.1204 122.52C47.5404 123.68 41.7704 121.97 37.4204 118.57C33.9404 115.86 31.3304 112.05 30.3904 107.74C28.5704 107.67 26.7204 107.3 24.9204 106.7C20.9404 105.36 17.1104 102.75 14.1204 99.2902C11.1104 95.8202 8.93045 91.4602 8.24045 86.6102C7.89045 84.0802 7.94045 81.4402 8.50045 78.7202C6.55045 76.9502 4.87045 74.9602 3.54045 72.7902C1.22045 69.0802 -0.0495543 64.9002 0.000445732 60.6002C0.0504457 56.2702 1.43045 51.8802 4.42045 47.8002C6.16045 45.4302 8.45045 43.1702 11.3504 41.1002C11.3204 40.3102 11.3204 39.5202 11.3404 38.7402C11.5704 32.4202 13.9004 26.8602 17.3004 22.7102C20.8204 18.4102 25.5304 15.6002 30.3704 14.9102H30.3904C30.5604 14.2002 30.7604 13.5002 31.0204 12.8202C32.5804 8.59023 35.7904 4.99023 39.7204 2.70023C43.6804 0.400235 48.4304 -0.619765 53.0604 0.340235C57.5104 1.28023 61.7504 3.94023 64.9404 8.92023ZM30.7704 99.2102C32.4104 94.0502 36.7404 88.9002 44.9104 84.7302C46.9504 83.7002 49.4304 84.5002 50.4804 86.5302C51.5104 88.5702 50.7104 91.0502 48.6804 92.1002C41.1104 95.9702 38.2604 100.41 38.2604 104.28C38.2604 107.3 39.9804 110.12 42.4804 112.08C45.0204 114.05 48.3004 115.08 51.4004 114.44C55.2604 113.64 58.9804 110.07 60.9104 102.29V20.4902C58.9804 12.7702 55.2604 9.22023 51.4104 8.42023C48.8704 7.89023 46.1704 8.49023 43.8704 9.84023C41.5404 11.1902 39.6704 13.2702 38.7804 15.6702C37.6004 18.8702 38.3004 22.8002 42.3004 26.5002C43.9604 28.0502 44.0704 30.6402 42.5204 32.3002C40.9704 33.9602 38.3804 34.0702 36.7204 32.5202C33.6104 29.6402 31.6904 26.5802 30.7304 23.5302C28.2804 24.1202 25.8604 25.7402 23.9004 28.1202C21.6104 30.9102 20.0404 34.6902 19.8804 39.0302C19.8404 40.1802 19.9004 41.4002 20.0704 42.6502H20.0604C20.2804 44.2702 19.5604 45.9502 18.0804 46.8602C15.0804 48.7002 12.8704 50.7302 11.3204 52.8402C9.44045 55.4002 8.58045 58.0902 8.55045 60.6802C8.52045 63.3102 9.33045 65.9302 10.7804 68.2802C12.0104 70.2702 13.6904 72.0902 15.7404 73.6102C17.2804 74.6702 18.0004 76.6502 17.3704 78.5002C16.5604 80.9002 16.3804 83.2302 16.6904 85.4002C17.1304 88.5202 18.5804 91.3702 20.5604 93.6602C22.5504 95.9602 25.0704 97.6802 27.6504 98.5602C28.6904 98.9602 29.7404 99.1602 30.7704 99.2102ZM31.7104 41.1002C33.3304 39.5102 35.9304 39.5302 37.5304 41.1502C39.1204 42.7702 39.1004 45.3702 37.4804 46.9702C33.9504 50.4502 32.1104 54.9302 31.9104 59.5102C31.7204 64.2302 33.2504 69.0902 36.4704 73.0802C37.9004 74.8502 37.6104 77.4402 35.8404 78.8702C34.0704 80.3002 31.4804 80.0102 30.0504 78.2402C25.5404 72.6502 23.4004 65.8502 23.6704 59.1802C23.9604 52.5602 26.6204 46.1002 31.7104 41.1002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1522_884">
          <rect width="114.75" height="122.88" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StudioRecommendTabIcon;
