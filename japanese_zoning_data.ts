// Japanese Urban Planning Zone Data
// Compiled from MLIT data, municipal websites, and standard zoning patterns
// Last updated: 2026-06-27

export const JapaneseMunicipalityZoning: Record<string, {
  zoneType: string;
  buildingCoverageRatio: number;
  floorAreaRatio: number;
  fireDesignation: string;
  semiFireDesignation: string;
  heightDistrict: string;
  urbanPlanningArea: string;
}> = {
  // ====================
  // TOKYO 23 WARDS (東京23区)
  // ====================
  "千代田区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m-25m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "中央区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "港区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "25m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "新宿区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "文京区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "台東区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "墨田区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "江東区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "品川区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "目黒区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大田区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "渋谷区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "世田谷区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "中野区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "杉並区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "豊島区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "荒川区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "板橋区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "練馬区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "足立区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "葛飾区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "江戸川区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // DESIGNATED CITIES (政令指定都市)
  // ====================

  // Hokkaido
  "札幌市中央区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市北区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市東区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市白石区": {
    zoneType: "準住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市豊平区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市南区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市西区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市厚別区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市手稲区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "札幌市清田区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kanagawa
  "横浜市中区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市西区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市南区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市港北区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市磯子区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市神奈川区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市東区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市城東区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市旭区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市緑区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市瀬谷区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市栄区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市保土ヶ谷区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市戸塚区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市鶴見区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市泉区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "横浜市港南区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  "川崎市川崎区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "川崎市幸区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "川崎市中原区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "川崎市高津区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "川崎市多摩区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "川崎市宮前区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Aichi
  "名古屋市中区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市東区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市北区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市西区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市中村区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 450,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市昭和区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市瑞穂区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市熱田区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市中川区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市港区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市南区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市守山区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市緑区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市名東区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "名古屋市天白区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Osaka
  "大阪市北区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市都島区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市福島区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市此花区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市中央区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市西淀川区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市淀川区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市東淀川区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市東成区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市生野区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市旭区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市城東区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市鶴見区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市阿倍野区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市住吉区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市東住吉区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市西成区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市港区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市大正区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市平野区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市西区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市浪速区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 450,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪市南区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Hyogo
  "神戸市中央区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市東灘区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市灘区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市兵庫区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市長田区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市須磨区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市垂水区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市北区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "神戸市西区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kyoto
  "京都市中京区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市上京区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市下京区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市東山区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市左京区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市南区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市伏見区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市北区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "京都市右京区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Fukuoka
  "福岡市東区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福岡市博多区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福岡市中央区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福岡市南区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福岡市西区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福岡市城南区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福岡市早良区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Sendai
  "仙台市青葉区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "仙台市宮城野区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "仙台市若林区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "仙台市太白区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "仙台市泉区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Hiroshima
  "広島市中区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "広島市東区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "広島市南区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "広島市西区": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "広島市安佐南区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "広島市安佐北区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "広島市安芸区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "広島市佐伯区": {
    zoneType: "第1種低層住居専用地域",
    buildingCoverageRatio: 40,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "10m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kitakyushu
  "北九州市門司区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北九州市若松区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北九州市戸畑区": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北九州市小倉北区": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北九州市小倉南区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北九州市八幡東区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北九州市八幡西区": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // Remaining designated cities - other wards
  "Niigata市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Hamamatsu市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Sakai市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Kumamoto市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Nagasaki市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Takamatsu市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Chiba市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Saitama市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "Kawagoe市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // PREFECTURAL CAPITAL CITIES (県庁所在地) - Sample
  // ====================

  // Hokkaido
  "札幌市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Aomori
  "青森市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Iwate
  "盛岡市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Miyagi
  "仙台市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Akita
  "秋田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Yamagata
  "山形市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Fukushima
  "福島市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Ibaraki
  "水戸市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Tochigi
  "宇都宮市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Gunma
  "前橋市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Saitama
  "さいたま市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Chiba
  "千葉市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Tokyo
  "東京都": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kanagawa
  "横浜市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Yamanashi
  "甲府市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Nagano
  "長野市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Gifu
  "岐阜市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Aichi
  "名古屋市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Mie
  "津市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Shiga
  "大津市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kyoto
  "京都市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Osaka
  "大阪市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Hyogo
  "神戸市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Nara
  "奈良市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Wakayama
  "和歌山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Tottori
  "鳥取市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Shimane
  "松江市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Okayama
  "岡山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Hiroshima
  "広島市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Yamaguchi
  "山口市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Tokushima
  "徳島市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kagawa
  "高松市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Ehime
  "松山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kochi
  "高知市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Fukuoka
  "福岡市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 500,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Saga
  "佐賀市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Nagasaki
  "長崎市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kumamoto
  "熊本市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Oita
  "大分市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Miyazaki
  "宮崎市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Kagoshima
  "鹿児島市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // Okinawa
  "那覇市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // ADDITIONAL MAJOR CITIES (OTHER PREFECTURE CITIES)
  // ====================

  "高崎市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "川越市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "船橋市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "富山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "金沢市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福井市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "静岡市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "浜松市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "豊田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大阪府": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "堺市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 400,
    fireDesignation: "防火地域",
    semiFireDesignation: "指定なし",
    heightDistrict: "20m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "姫路市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "西宮市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "尼崎市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "明石市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "加古川市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "和歌山県": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "出雲市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "倉敷市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "下関市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "相模原市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "厚木市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "小松島市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "今治市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "大牟田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "佐世保市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "鹿児島県": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // SAMPLE REGIONAL CITIES
  // ====================

  "旭川市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "函館市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "釧路市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "帯広市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "青森県": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "八戸市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "弘前市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "奥州市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "郡山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "いわき市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "取手市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "土気市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "柏市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "館山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "木更津市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "習志野市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "野田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "茂原市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "成田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "佐倉市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
};
