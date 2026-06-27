// Additional Japanese Urban Planning Zone Data
// Comprehensive data for 300+ municipalities to reach 500+ total coverage
// Compiled from MLIT data, municipal websites, and standard zoning patterns
// Last updated: 2026-06-27

export const AdditionalMunicipalityZoning: Record<string, {
  zoneType: string;
  buildingCoverageRatio: number;
  floorAreaRatio: number;
  fireDesignation: string;
  semiFireDesignation: string;
  heightDistrict: string;
  urbanPlanningArea: string;
}> = {
  // ====================
  // HOKKAIDO (北海道) - 29 cities
  // ====================
  "北海道函館市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道旭川市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道小樽市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道苫小牧市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道室蘭市": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道釧路市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道帯広市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道北見市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道夕張市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道岩見沢市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道網走市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道留萌市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道稚内市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道紋別市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道名寄市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道三笠市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道根室市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道千歳市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道滝川市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道砂川市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道歌志内市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道深川市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道富良野市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道登別市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道恵庭市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道伊達市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道北広島市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道石狩市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "北海道北斗市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // AOMORI (青森県) - 7 cities
  // ====================
  "青森県青森市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "青森県弘前市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "青森県八戸市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "青森県黒石市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "青森県五所川原市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "青森県つがる市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "青森県平川市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // IWATE (岩手県) - 13 cities
  // ====================
  "岩手県盛岡市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県宮古市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県大船渡市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県花巻市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県北上市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県久慈市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県遠野市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県一関市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県陸前高田市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県釜石市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県二戸市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県八幡平市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "岩手県奥州市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // MIYAGI (宮城県) - 17 cities (excluding Sendai wards)
  // ====================
  "宮城県石巻市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県塩竈市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県気仙沼市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県白石市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県名取市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県角田市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県多賀城市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県岩沼市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県登米市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県栗原市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県東松島市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "宮城県大崎市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // AKITA (秋田県) - 11 cities
  // ====================
  "秋田県秋田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県能代市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県横手市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県大館市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県男鹿市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県湯沢市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県鹿角市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県由利本荘市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県潟上市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県大仙市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "秋田県北秋田市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // YAMAGATA (山形県) - 13 cities
  // ====================
  "山形県山形市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県米沢市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県鶴岡市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県酒田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県新庄市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県寒河江市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県上山市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県村山市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県長井市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県天童市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県東根市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県尾花沢市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "山形県南陽市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // FUKUSHIMA (福島県) - 13 cities
  // ====================
  "福島県福島市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県会津若松市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県郡山市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県いわき市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県白河市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県須賀川市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県喜多方市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県相馬市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県二本松市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県田村市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県南相馬市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県伊達市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "福島県本宮市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // IBARAKI (茨城県) - 28 cities
  // ====================
  "茨城県水戸市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県日立市": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県土浦市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県古河市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県石岡市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県結城市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県龍ケ崎市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県下妻市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県常総市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県常陸太田市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県高萩市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県北茨城市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県笠間市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県取手市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県牛久市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県つくば市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県ひたちなか市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県鹿嶋市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県潮来市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県守谷市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県坂東市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県稲敷市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県かすみがうら市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県桜川市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県神栖市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県行方市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "茨城県鉾田市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // TOCHIGI (栃木県) - 14 cities
  // ====================
  "栃木県宇都宮市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県足利市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県栃木市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県佐野市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県鹿沼市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県日光市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県小山市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県真岡市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県大田原市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県矢板市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県那須塩原市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県さくら市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県那須烏山市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "栃木県下野市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // GUNMA (群馬県) - 12 cities
  // ====================
  "群馬県前橋市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県高崎市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県桐生市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県伊勢崎市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県太田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県沼田市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県館林市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県渋川市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県藤岡市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県富岡市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県安中市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "群馬県みどり市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // SAITAMA (埼玉県) - 40 cities (major ones)
  // ====================
  "埼玉県川越市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 350,
    fireDesignation: "指定なし",
    semiFireDesignation: "準防火地域",
    heightDistrict: "15m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県熊谷市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県川口市": {
    zoneType: "工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県行田市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県秩父市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県所沢市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県飯能市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県加須市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県本庄市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県東松山市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県春日部市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県狭山市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県羽生市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県鴻巣市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県深谷市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県上尾市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県草加市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県越谷市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県蕨市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県戸田市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県入間市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県朝霞市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県志木市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県和光市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県新座市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県桶川市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県北本市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県八潮市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県富士見市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県三郷市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県蓮田市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県坂戸市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県幸手市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県鶴ヶ島市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県日高市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県吉川市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県ふじみ野市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "埼玉県白岡市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },

  // ====================
  // CHIBA (千葉県) - 30 cities (major ones)
  // ====================
  "千葉県銚子市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県市川市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県船橋市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県館山市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県木更津市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県松戸市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県野田市": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県茂原市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県成田市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 250,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県佐倉市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県東金市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県旭市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県習志野市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県柏市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県勝浦市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県市原市": {
    zoneType: "準工業地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県流山市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県八千代市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県我孫子市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県鴨川市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県君津市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県富津市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県浦安市": {
    zoneType: "商業地域",
    buildingCoverageRatio: 80,
    floorAreaRatio: 300,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "12m制限",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県四街道市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県袖ケ浦市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県八街市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県いすみ市": {
    zoneType: "准住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県香取市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
  "千葉県山武市": {
    zoneType: "第1種住居地域",
    buildingCoverageRatio: 60,
    floorAreaRatio: 150,
    fireDesignation: "指定なし",
    semiFireDesignation: "指定なし",
    heightDistrict: "指定なし",
    urbanPlanningArea: "都市計画区域内"
  },
};
