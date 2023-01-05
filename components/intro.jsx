import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <svg
          className="w-56"
          viewBox="0 0 3180 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="114" y="175" width="65" height="450" fill="currentColor" />
          <rect x="195" y="175" width="498" height="60" fill="currentColor" />
          <rect x="195" y="565" width="498" height="60" fill="currentColor" />
          <rect x="195" y="252" width="498" height="55" fill="#FF652F" />
          <rect x="195" y="495" width="498" height="55" fill="#FF652F" />
          <rect x="195" y="372" width="498" height="55" fill="#FF652F" />
          <rect x="195" y="307" width="65" height="45" fill="#FF652F" />
          <rect x="628" y="450" width="65" height="45" fill="#FF652F" />
          <path
            d="M899.7 565.4C882.6 565.4 866.7 562.85 852 557.75C837.6 552.65 825 545.3 814.2 535.7C803.4 525.8 795 513.8 789 499.7C783 485.3 780 469.1 780 451.1C780 432.8 783.15 416.6 789.45 402.5C796.05 388.1 804.9 375.95 816 366.05C827.1 356.15 840 348.65 854.7 343.55C869.7 338.45 885.45 335.9 901.95 335.9C919.95 335.9 935.4 339.05 948.3 345.35C961.5 351.65 972.6 359.15 981.6 367.85L963.15 391.7C954.15 383.9 944.7 377.75 934.8 373.25C925.2 368.75 914.7 366.5 903.3 366.5C890.7 366.5 879.15 368.6 868.65 372.8C858.15 376.7 849.15 382.4 841.65 389.9C834.45 397.4 828.75 406.4 824.55 416.9C820.35 427.1 818.25 438.5 818.25 451.1C818.25 463.7 820.2 475.1 824.1 485.3C828.3 495.5 834 504.35 841.2 511.85C848.7 519.05 857.55 524.75 867.75 528.95C878.25 532.85 889.8 534.8 902.4 534.8C915.9 534.8 928.2 532.25 939.3 527.15C950.7 521.75 960.9 515.15 969.9 507.35L986.55 531.2C974.25 542 960.75 550.4 946.05 556.4C931.35 562.4 915.9 565.4 899.7 565.4ZM1112.82 565.4C1098.42 565.4 1084.62 562.85 1071.42 557.75C1058.52 552.65 1047.12 545.3 1037.22 535.7C1027.32 525.8 1019.37 513.8 1013.37 499.7C1007.67 485.3 1004.82 469.1 1004.82 451.1C1004.82 432.8 1007.67 416.6 1013.37 402.5C1019.37 388.1 1027.32 375.95 1037.22 366.05C1047.12 356.15 1058.52 348.65 1071.42 343.55C1084.62 338.45 1098.42 335.9 1112.82 335.9C1127.22 335.9 1140.87 338.45 1153.77 343.55C1166.97 348.65 1178.52 356.15 1188.42 366.05C1198.32 375.95 1206.12 388.1 1211.82 402.5C1217.82 416.6 1220.82 432.8 1220.82 451.1C1220.82 469.1 1217.82 485.3 1211.82 499.7C1206.12 513.8 1198.32 525.8 1188.42 535.7C1178.52 545.3 1166.97 552.65 1153.77 557.75C1140.87 562.85 1127.22 565.4 1112.82 565.4ZM1112.82 534.8C1123.32 534.8 1132.77 532.85 1141.17 528.95C1149.87 524.75 1157.22 519.05 1163.22 511.85C1169.52 504.35 1174.32 495.5 1177.62 485.3C1180.92 475.1 1182.57 463.7 1182.57 451.1C1182.57 438.5 1180.92 427.1 1177.62 416.9C1174.32 406.4 1169.52 397.4 1163.22 389.9C1157.22 382.4 1149.87 376.7 1141.17 372.8C1132.77 368.6 1123.32 366.5 1112.82 366.5C1102.32 366.5 1092.72 368.6 1084.02 372.8C1075.62 376.7 1068.27 382.4 1061.97 389.9C1055.97 397.4 1051.32 406.4 1048.02 416.9C1044.72 427.1 1043.07 438.5 1043.07 451.1C1043.07 463.7 1044.72 475.1 1048.02 485.3C1051.32 495.5 1055.97 504.35 1061.97 511.85C1068.27 519.05 1075.62 524.75 1084.02 528.95C1092.72 532.85 1102.32 534.8 1112.82 534.8ZM1333.6 565.4C1319.2 565.4 1306.15 562.85 1294.45 557.75C1283.05 552.65 1273.15 545.3 1264.75 535.7C1256.35 525.8 1249.9 513.8 1245.4 499.7C1240.9 485.6 1238.65 469.4 1238.65 451.1C1238.65 433.4 1241.35 417.5 1246.75 403.4C1252.45 389 1259.8 376.85 1268.8 366.95C1278.1 357.05 1288.75 349.4 1300.75 344C1312.75 338.6 1325.2 335.9 1338.1 335.9C1351.3 335.9 1363 338.45 1373.2 343.55C1383.7 348.35 1393.75 355.25 1403.35 364.25H1404.7L1402.9 323.75V239.6H1439.8V560H1409.2L1406.05 531.2H1404.7C1395.7 540.5 1384.9 548.6 1372.3 555.5C1360 562.1 1347.1 565.4 1333.6 565.4ZM1341.25 534.35C1362.85 534.35 1383.4 523.4 1402.9 501.5V392.6C1393 383.3 1383.25 376.7 1373.65 372.8C1364.35 368.9 1354.9 366.95 1345.3 366.95C1335.7 366.95 1326.7 369.05 1318.3 373.25C1310.2 377.15 1303 382.85 1296.7 390.35C1290.7 397.55 1285.9 406.25 1282.3 416.45C1278.7 426.65 1276.9 438.05 1276.9 450.65C1276.9 477.05 1282.45 497.6 1293.55 512.3C1304.95 527 1320.85 534.35 1341.25 534.35ZM1593.97 565.4C1577.47 565.4 1562.02 562.85 1547.62 557.75C1533.52 552.65 1521.07 545.15 1510.27 535.25C1499.77 525.35 1491.37 513.35 1485.07 499.25C1479.07 484.85 1476.07 468.5 1476.07 450.2C1476.07 432.5 1479.07 416.6 1485.07 402.5C1491.37 388.4 1499.62 376.4 1509.82 366.5C1520.32 356.6 1532.17 349.1 1545.37 344C1558.87 338.6 1572.97 335.9 1587.67 335.9C1603.27 335.9 1617.22 338.45 1629.52 343.55C1642.12 348.35 1652.62 355.25 1661.02 364.25C1669.72 373.25 1676.32 384.05 1680.82 396.65C1685.32 409.25 1687.57 423.2 1687.57 438.5C1687.57 442.7 1687.42 446.75 1687.12 450.65C1686.82 454.55 1686.37 458 1685.77 461H1513.42C1515.82 485.9 1524.82 504.65 1540.42 517.25C1556.32 529.55 1575.67 535.7 1598.47 535.7C1611.67 535.7 1623.52 533.9 1634.02 530.3C1644.82 526.4 1655.17 521.3 1665.07 515L1678.57 539.3C1667.77 546.5 1655.32 552.65 1641.22 557.75C1627.42 562.85 1611.67 565.4 1593.97 565.4ZM1588.57 365.15C1579.57 365.15 1570.87 366.65 1562.47 369.65C1554.37 372.65 1547.02 377 1540.42 382.7C1533.82 388.1 1528.27 395 1523.77 403.4C1519.27 411.8 1516.12 421.4 1514.32 432.2H1653.82C1652.32 409.7 1645.72 392.9 1634.02 381.8C1622.62 370.7 1607.47 365.15 1588.57 365.15ZM2887.12 560V341.3H2917.72L2920.87 393.05H2922.22C2933.62 375.35 2947.57 361.4 2964.07 351.2C2980.87 341 2999.47 335.9 3019.87 335.9C3027.97 335.9 3035.47 336.65 3042.37 338.15C3049.27 339.35 3056.17 341.6 3063.07 344.9L3054.52 376.85C3046.72 374.15 3040.12 372.2 3034.72 371C3029.62 369.8 3022.72 369.2 3014.02 369.2C2997.52 369.2 2981.62 374 2966.32 383.6C2951.32 392.9 2937.22 408.95 2924.02 431.75V560H2887.12Z"
            fill="#FF652F"
          />
          <path
            d="M1816.55 565.4C1794.95 565.4 1775 561.5 1756.7 553.7C1738.7 545.9 1722.95 535.25 1709.45 521.75L1731.95 495.65C1743.05 506.75 1755.95 515.75 1770.65 522.65C1785.35 529.25 1801.25 532.55 1818.35 532.55C1838.75 532.55 1854.5 528.2 1865.6 519.5C1877 510.8 1882.7 499.55 1882.7 485.75C1882.7 477.95 1881.35 471.35 1878.65 465.95C1875.95 460.55 1872.2 455.9 1867.4 452C1862.6 448.1 1856.9 444.65 1850.3 441.65C1844 438.65 1837.1 435.5 1829.6 432.2L1787.3 413.75C1779.8 410.75 1772.3 407.15 1764.8 402.95C1757.3 398.75 1750.4 393.65 1744.1 387.65C1738.1 381.65 1733.15 374.6 1729.25 366.5C1725.35 358.1 1723.4 348.5 1723.4 337.7C1723.4 326.6 1725.8 316.25 1730.6 306.65C1735.4 297.05 1742 288.8 1750.4 281.9C1759.1 274.7 1769.3 269.15 1781 265.25C1793 261.35 1806.05 259.4 1820.15 259.4C1838.75 259.4 1855.85 262.85 1871.45 269.75C1887.05 276.35 1900.25 285.05 1911.05 295.85L1891.25 320.15C1881.65 311.45 1871 304.7 1859.3 299.9C1847.6 294.8 1834.1 292.25 1818.8 292.25C1801.7 292.25 1787.9 296.15 1777.4 303.95C1766.9 311.45 1761.65 321.95 1761.65 335.45C1761.65 342.65 1763.15 348.8 1766.15 353.9C1769.45 358.7 1773.5 363.05 1778.3 366.95C1783.4 370.55 1789.1 373.7 1795.4 376.4C1801.7 379.1 1808 381.8 1814.3 384.5L1855.7 402.5C1864.7 406.1 1873.1 410.3 1880.9 415.1C1889 419.6 1895.9 425 1901.6 431.3C1907.6 437.3 1912.25 444.5 1915.55 452.9C1919.15 461 1920.95 470.45 1920.95 481.25C1920.95 492.95 1918.55 503.9 1913.75 514.1C1908.95 524.3 1902.05 533.3 1893.05 541.1C1884.05 548.6 1873.1 554.6 1860.2 559.1C1847.3 563.3 1832.75 565.4 1816.55 565.4ZM2029.22 560V296.3H1932.02V264.8H2164.22V296.3H2067.02V560H2029.22ZM2251.35 394.85L2237.4 439.85H2325.6L2311.65 394.85C2306.55 378.35 2301.45 362 2296.35 345.8C2291.55 329.3 2286.9 312.5 2282.4 295.4H2280.6C2275.8 312.5 2271 329.3 2266.2 345.8C2261.4 362 2256.45 378.35 2251.35 394.85ZM2161.35 560L2260.8 264.8H2303.1L2402.55 560H2362.95L2335.05 470H2227.95L2199.6 560H2161.35ZM2538.72 565.4C2520.42 565.4 2503.47 561.95 2487.87 555.05C2472.27 548.15 2458.62 538.25 2446.92 525.35C2435.52 512.15 2426.52 496.1 2419.92 477.2C2413.32 458 2410.02 436.4 2410.02 412.4C2410.02 388.7 2413.32 367.4 2419.92 348.5C2426.52 329.6 2435.67 313.55 2447.37 300.35C2459.07 287.15 2473.02 277.1 2489.22 270.2C2505.42 263 2523.12 259.4 2542.32 259.4C2560.02 259.4 2575.62 263 2589.12 270.2C2602.92 277.4 2614.17 285.8 2622.87 295.4L2601.72 319.25C2593.92 311.15 2585.22 304.7 2575.62 299.9C2566.02 294.8 2554.92 292.25 2542.32 292.25C2528.22 292.25 2515.32 295.1 2503.62 300.8C2492.22 306.2 2482.47 314.15 2474.37 324.65C2466.27 334.85 2459.97 347.3 2455.47 362C2450.97 376.7 2448.72 393.2 2448.72 411.5C2448.72 430.1 2450.97 446.9 2455.47 461.9C2459.97 476.6 2466.27 489.2 2474.37 499.7C2482.47 510.2 2492.22 518.3 2503.62 524C2515.32 529.7 2528.22 532.55 2542.32 532.55C2555.82 532.55 2567.82 529.7 2578.32 524C2589.12 518.3 2599.32 510.2 2608.92 499.7L2630.07 522.65C2618.37 536.15 2605.17 546.65 2590.47 554.15C2575.77 561.65 2558.52 565.4 2538.72 565.4ZM2658.69 560V264.8H2696.49V412.85H2697.84L2822.04 264.8H2864.79L2771.19 376.85L2875.59 560H2833.29L2747.34 405.2L2696.49 465.95V560H2658.69Z"
            fill="currentColor"
          />
        </svg>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Tutorials for all things <code>code</code>
      </h4>
    </section>
  );
};

export default Intro;