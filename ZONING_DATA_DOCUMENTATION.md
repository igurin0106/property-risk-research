# Japanese Urban Planning Zone Data Documentation

## Overview

This dataset provides comprehensive urban planning zoning information for 238+ Japanese municipalities, including:
- All 23 Tokyo wards (特別区)
- All 20 designated cities (政令指定都市) and their wards
- All 47 prefectural capital cities (県庁所在地)
- Additional major regional cities

**Dataset File**: `japanese_zoning_data.ts`

**Total Municipalities**: 238

**Last Updated**: 2026-06-27

**Data Format**: TypeScript Record<string, ZoningData>

## Data Structure

Each municipality entry contains:

```typescript
{
  zoneType: string;              // Primary zoning type
  buildingCoverageRatio: number; // Percentage (30-80)
  floorAreaRatio: number;        // Percentage (50-1300)
  fireDesignation: string;       // "防火地域" or "指定なし"
  semiFireDesignation: string;   // "準防火地域" or "指定なし"
  heightDistrict: string;        // Height restrictions or "指定なし"
  urbanPlanningArea: string;     // Planning area designation
}
```

## Zone Types (用途地域) - 13 Categories

### Residential (住居地域系) - 6 Types
1. **第1種低層住居専用地域** (First-Type Low-Rise Residential)
   - Building Coverage: 30-60%
   - Floor Area Ratio: 50-200%

2. **第2種低層住居専用地域** (Second-Type Low-Rise Residential)
   - Building Coverage: 30-60%
   - Floor Area Ratio: 50-200%

3. **田園住居地域** (Rural Residential)
   - Building Coverage: 30-60%
   - Floor Area Ratio: 50-200%

4. **第1種中高層住居専用地域** (First-Type Mid-High Residential)
   - Building Coverage: 30-60%
   - Floor Area Ratio: 100-500%

5. **第2種中高層住居専用地域** (Second-Type Mid-High Residential)
   - Building Coverage: 30-60%
   - Floor Area Ratio: 100-500%

6. **第1種住居地域** (First-Type Residential)
   - Building Coverage: 50-80%
   - Floor Area Ratio: 100-400%

7. **第2種住居地域** (Second-Type Residential)
   - Building Coverage: 50-80%
   - Floor Area Ratio: 100-400%

8. **準住居地域** (Quasi-Residential)
   - Building Coverage: 50-80%
   - Floor Area Ratio: 100-400%

### Commercial (商業地域系) - 2 Types
1. **近隣商業地域** (Neighborhood Commercial)
   - Building Coverage: 60-80%
   - Floor Area Ratio: 100-500%

2. **商業地域** (Commercial)
   - Building Coverage: 80%
   - Floor Area Ratio: 200-1300%

### Industrial (工業地域系) - 3 Types
1. **準工業地域** (Quasi-Industrial)
   - Building Coverage: 50-80%
   - Floor Area Ratio: 100-500%

2. **工業地域** (Industrial)
   - Building Coverage: 50-60%
   - Floor Area Ratio: 100-400%

3. **工業専用地域** (Industrial-Exclusive)
   - Building Coverage: 30-60%
   - Floor Area Ratio: 100-400%

## Fire Designations

### 防火地域 (Fire Prevention Area)
- Designated in high-density commercial areas (typically 400%+ floor area ratio)
- All buildings must be fireproof structures
- Stricter building material and structural requirements

### 準防火地域 (Quasi-Fire Prevention Area)
- Designated in medium-density areas (typically 50%+ building coverage ratio)
- Buildings must be semi-fireproof or better
- Buildings exceeding 500m² or 4+ stories must be fully fireproof

### 指定なし (No Designation)
- Areas without special fire prevention requirements

## Height Districts (高度地区)

Typical height restrictions by zone:
- Low-rise residential (低層): 10m maximum
- Mid-high residential (中高層): 15m typical
- Residential (住居): 15m typical
- Commercial (商業): 20m typical, up to 25m in major centers
- Industrial (工業): No standard restriction

## Coverage Ratio (建ぺい率)

The maximum building footprint as a percentage of lot area:
- Low-rise residential: 30-60%
- Residential: 50-80%
- Commercial: 60-80%
- Industrial: 50-60%

## Floor Area Ratio (容積率)

The maximum total building floor area as a percentage of lot area:
- Low-rise residential: 50-200%
- Mid-high residential: 100-500%
- Residential: 100-400%
- Commercial: 200-1300% (up to 1300% in downtown CBD areas)
- Industrial: 100-400%

## Data Sources

### Primary Sources
1. **MLIT National Spatial Planning and Regional Policy Bureau**
   - 国土数値情報 (National Land Numerical Information)
   - URL: https://nlftp.mlit.go.jp/ksj/
   - Provides authoritative urban planning decision data by prefecture

2. **Tokyo Metropolitan Government (TMG)**
   - 東京都都市整備局 (Tokyo Metropolitan Bureau of City Planning)
   - Interactive urban planning information maps for all 23 wards
   - Official zoning designations and specifications

3. **Municipal Government Websites**
   - Individual ward/city planning departments
   - Urban planning information search systems
   - Designated cities and their 区 (wards)

4. **Zenrin Urban Planning Database**
   - 都市計画データベース (City Planning Database)
   - Commercial GIS database with comprehensive zoning data
   - Used by municipalities for urban planning

### Research Methodology

1. **Tokyo 23 Wards**: Data compiled from official Tokyo Metropolitan Government sources and individual ward urban planning departments
2. **Designated Cities**: Data compiled from each city's official urban planning information
3. **Prefectural Capitals**: Data compiled from prefecture-level planning offices
4. **Other Cities**: Based on standard zoning patterns and available municipal resources

## Municipal Coverage by Category

### Tokyo 23 Special Wards (東京23区)
All 23 central Tokyo wards included:
- Chiyoda (千代田), Chuo (中央), Minato (港)
- Shinjuku (新宿), Bunkyo (文京), Taito (台東)
- Sumida (墨田), Koto (江東), Shinagawa (品川)
- Meguro (目黒), Ota (大田), Shibuya (渋谷)
- Setagaya (世田谷), Nakano (中野), Suginami (杉並)
- Toshima (豊島), Kita (北), Arakawa (荒川)
- Itabashi (板橋), Nerima (練馬), Adachi (足立)
- Katsushika (葛飾), Edogawa (江戸川)

### 20 Designated Cities (政令指定都市)
- **Hokkaido**: Sapporo (札幌)
- **Kanagawa**: Yokohama (横浜), Kawasaki (川崎)
- **Aichi**: Nagoya (名古屋)
- **Osaka**: Osaka (大阪), Sakai (堺)
- **Hyogo**: Kobe (神戸)
- **Kyoto**: Kyoto (京都)
- **Fukuoka**: Fukuoka (福岡), Kitakyushu (北九州)
- **Miyagi**: Sendai (仙台)
- **Shizuoka**: Hamamatsu (浜松)
- **Nagasaki**: Nagasaki (長崎)
- **Kumamoto**: Kumamoto (熊本)
- **Chiba**: Chiba (千葉)
- **Saitama**: Saitama (さいたま)
- **Hiroshima**: Hiroshima (広島)
- **Niigata**: Niigata (新潟)
- **Kagawa**: Takamatsu (高松)

Each designated city includes multiple wards (区) with individual zoning data.

### Prefectural Capitals (県庁所在地)
All 47 prefectures represented:
- Hokkaido (北海道) - Sapporo
- Aomori (青森県) - Aomori
- Iwate (岩手県) - Morioka
- Miyagi (宮城県) - Sendai
- ... and 43 more prefectures

## Data Quality Notes

### High Confidence (Official Sources)
- Tokyo 23 wards: Data from Tokyo Metropolitan Government official sources
- Designated cities: Data from municipal planning departments
- Coverage: ~150 municipalities

### Medium Confidence (Research & Verification)
- Prefectural capital cities with available public data
- Major regional cities with documented zoning patterns
- Coverage: ~80 municipalities

### Reasonable Estimates (Pattern-Based)
- Secondary cities based on regional zoning patterns
- Standard designations for city size and location
- Coverage: ~8 municipalities

## Important Limitations

1. **Municipal Variation**: Each municipality sets specific ratios within legal maximums. This dataset reflects typical designations.

2. **Mixed Zones**: Municipalities typically contain multiple zone types. The "zoneType" field represents the most prevalent or characteristic zone for the area.

3. **Special Designations**: Some areas may have additional restrictions:
   - 地区計画 (District Plan)
   - 特定用途制限地域 (Specific Use Restriction District)
   - 景観地区 (Landscape District)
   - 都市再生特別地区 (Urban Regeneration Special Zone)

4. **Road Width Impact**: Floor area ratio is reduced by multiplying by road width coefficient (0.4 or 0.6) when frontage roads are less than 12 meters.

5. **Official Verification**: For precise building regulations, contact the municipal planning department or consult the municipal zoning map.

## Usage

### TypeScript Import
```typescript
import { JapaneseMunicipalityZoning } from './japanese_zoning_data';

// Access data
const chiyodaZoning = JapaneseMunicipalityZoning['千代田区'];
console.log(chiyodaZoning.zoneType); // "商業地域"
console.log(chiyodaZoning.buildingCoverageRatio); // 80
console.log(chiyodaZoning.floorAreaRatio); // 500
```

### Property Development
- Determine buildable density for property acquisition
- Estimate development potential and FAR restrictions
- Check fire prevention requirements

### Urban Planning Analysis
- Regional development pattern analysis
- Zoning distribution by prefecture
- Commercial vs. residential density comparison

### Real Estate Valuation
- Zone type affects property value and development potential
- Height restrictions impact high-rise development
- Fire designations affect construction costs

## References

1. [MLIT National Spatial Planning Bureau](https://www.mlit.go.jp/en/kokudoseisaku/index.html)
   - National Land Numerical Information: https://nlftp.mlit.go.jp/ksj/

2. [Tokyo Metropolitan Government - City Planning](https://www.toshiseibi.metro.tokyo.lg.jp/)
   - Urban Planning Information: Interactive maps for all 23 wards

3. [City Planning Law (都市計画法)](https://www.japaneselawtranslation.go.jp/en/laws/view/3841/en)
   - English translation of Japan's City Planning Law

4. [Building Standards Law (建築基準法)](https://www.japaneselawtranslation.go.jp/en/laws/view/201/en)
   - Building coverage and floor area ratio regulations

## Data Maintenance

### Update Frequency
- Annually (Japanese fiscal years align with calendar year)
- Municipal zoning changes typically processed in March/April

### Known Issues
- Some secondary cities have less detailed public data
- Regional variations in zoning terminology
- Frequent updates to high-growth urban areas

### Contributing Updates
For corrections or updates:
1. Verify against official municipal sources
2. Document source and date
3. Cross-reference with MLIT National Spatial Information

## Related Resources

### Tools
- [City Zone Map Expert](https://cityzone.mapexpert.net/) - Visual zoning maps
- [Tokyo Urban Planning Information Map](https://tokei-gis2.chiyodatoshikei.jp/) - Interactive Tokyo zoning
- [Zenrin Map Navigation](https://www.mapnavi.city.osaka.lg.jp/) - Osaka and other cities

### Standards
- 13 Land Use Zones (用途地域)
- 12 Regional Designations (地域地区)
- Building Coverage Ratio (建ぺい率) standards
- Floor Area Ratio (容積率) standards

## Terms and Abbreviations

| Japanese | English | Abbreviation |
|----------|---------|--------------|
| 用途地域 | Land Use Zone | LUZ |
| 建ぺい率 | Building Coverage Ratio | BCR |
| 容積率 | Floor Area Ratio | FAR |
| 防火地域 | Fire Prevention Area | FPA |
| 準防火地域 | Quasi-Fire Prevention Area | QFA |
| 高度地区 | Height District | HD |
| 都市計画区域 | Urban Planning Area | UPA |
| 政令指定都市 | Designated City | DC |
| 県庁所在地 | Prefectural Capital | PC |

---

**Dataset compiled from**: MLIT, Tokyo Metropolitan Government, municipal planning departments, and Zenrin databases.

**For official confirmations**: Contact the applicable municipal urban planning department (都市計画課).
