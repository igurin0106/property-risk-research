# Japanese Zoning Data - Quick Reference Guide

## How to Use the Dataset

### 1. Import the Data
```typescript
import { JapaneseMunicipalityZoning } from './japanese_zoning_data';
```

### 2. Access Zoning Info for a Municipality
```typescript
// Get Tokyo ward zoning
const chiyodaZoning = JapaneseMunicipalityZoning['千代田区'];

// Access properties
console.log(chiyodaZoning.zoneType);           // "商業地域"
console.log(chiyodaZoning.buildingCoverageRatio);  // 80
console.log(chiyodaZoning.floorAreaRatio);     // 500
console.log(chiyodaZoning.fireDesignation);    // "防火地域"
```

### 3. Calculate Building Restrictions
```typescript
// Max building footprint for 1000 m² lot
const maxFootprint = 1000 * (chiyodaZoning.buildingCoverageRatio / 100);
console.log(maxFootprint); // 800 m²

// Max total floor area for same lot
const maxFloorArea = 1000 * (chiyodaZoning.floorAreaRatio / 100);
console.log(maxFloorArea); // 5000 m²
```

## Quick Lookup: Tokyo 23 Wards

| Ward | Zone Type | BCR | FAR | Fire | Height |
|------|-----------|-----|-----|------|--------|
| 千代田区 | Commercial | 80% | 500% | Yes | 20-25m |
| 中央区 | Commercial | 80% | 600% | Yes | 20m |
| 港区 | Commercial | 80% | 500% | Yes | 25m |
| 新宿区 | Commercial | 80% | 600% | Yes | 20m |
| 渋谷区 | Commercial | 80% | 500% | Yes | 20m |
| 豊島区 | Commercial | 80% | 500% | Yes | 20m |
| 台東区 | Commercial | 80% | 500% | Yes | 20m |
| 文京区 | 1st Residential | 60% | 300% | No | 15m |
| 品川区 | 1st Residential | 60% | 300% | No | 15m |
| 目黒区 | 1st Residential | 60% | 300% | No | 15m |
| 世田谷区 | Low-Rise | 40% | 150% | No | 10m |
| 杉並区 | Low-Rise | 40% | 150% | No | 10m |
| 練馬区 | Low-Rise | 40% | 150% | No | 10m |
| 中野区 | 1st Residential | 60% | 300% | No | 15m |
| 北区 | 1st Residential | 60% | 300% | No | 15m |
| 足立区 | Quasi-Residential | 60% | 250% | No | None |
| 葛飾区 | Quasi-Residential | 60% | 250% | No | None |
| 江戸川区 | Quasi-Residential | 60% | 250% | No | None |
| 荒川区 | Quasi-Industrial | 60% | 300% | No | None |
| 板橋区 | Quasi-Industrial | 60% | 300% | No | None |
| 大田区 | Quasi-Industrial | 60% | 300% | No | None |
| 墨田区 | Quasi-Industrial | 60% | 300% | No | 15m |
| 江東区 | Quasi-Industrial | 60% | 300% | No | None |

## Abbreviations Reference

| Term | Japanese | Meaning |
|------|----------|---------|
| BCR | 建ぺい率 | Building Coverage Ratio (%) |
| FAR | 容積率 | Floor Area Ratio (%) |
| FPA | 防火地域 | Fire Prevention Area |
| QFA | 準防火地域 | Quasi-Fire Prevention Area |
| HD | 高度地区 | Height District |
| UPA | 都市計画区域 | Urban Planning Area |

## Zone Types Quick Guide

### Residential Zones
- **第1種低層住居専用地域** (Low-rise 1st): 30-60% BCR, 50-200% FAR - Single-family homes, quiet streets
- **第2種低層住居専用地域** (Low-rise 2nd): 30-60% BCR, 50-200% FAR - Similar to 1st type
- **第1種中高層住居専用地域** (Mid-high 1st): 30-60% BCR, 100-500% FAR - Mid-rise apartments, mixed residential
- **第2種中高層住居専用地域** (Mid-high 2nd): 30-60% BCR, 100-500% FAR - Similar to 1st type
- **第1種住居地域** (General 1st): 50-80% BCR, 100-400% FAR - Residential with some shops
- **第2種住居地域** (General 2nd): 50-80% BCR, 100-400% FAR - Similar to 1st type
- **準住居地域** (Quasi-residential): 50-80% BCR, 100-400% FAR - Mix of residential and commercial

### Commercial Zones
- **近隣商業地域** (Neighborhood Commercial): 60-80% BCR, 100-500% FAR - Local shopping areas
- **商業地域** (Commercial): 80% BCR, 200-1300% FAR - Dense downtown commercial, very tall buildings

### Industrial Zones
- **準工業地域** (Quasi-industrial): 50-80% BCR, 100-500% FAR - Mix of light industry and residential
- **工業地域** (Industrial): 50-60% BCR, 100-400% FAR - Manufacturing and warehouses
- **工業専用地域** (Industrial-exclusive): 30-60% BCR, 100-400% FAR - Factories only, no residential

## Common Zoning Combinations

### Dense Urban Centers (Downtown CBD)
- Zone: **商業地域** (Commercial)
- BCR: 80%
- FAR: 400-600%
- Fire: 防火地域 (Fire Prevention)
- Height: 20-25m
- **Example**: Chiyoda, Chuo, Minato wards in Tokyo

### Mid-Density Mixed Use
- Zone: **准住居地域** (Quasi-Residential)
- BCR: 60%
- FAR: 200-300%
- Fire: 準防火地域 (Quasi-Fire) or None
- Height: 15m or unrestricted
- **Example**: Outer wards of Tokyo, regional city centers

### Residential Neighborhoods
- Zone: **第1種住居地域** (General Residential)
- BCR: 60%
- FAR: 250-300%
- Fire: 準防火地域 or None
- Height: 15m
- **Example**: Chiyoda, Bunkyo, Shinagawa wards in Tokyo

### Single-Family Residential
- Zone: **第1種低層住居専用地域** (Low-Rise Residential)
- BCR: 40%
- FAR: 150%
- Fire: None
- Height: 10m
- **Example**: Setagaya, Suginami, Nerima wards in Tokyo

### Industrial/Mixed
- Zone: **準工業地域** (Quasi-Industrial)
- BCR: 60%
- FAR: 250%
- Fire: None
- Height: Unrestricted
- **Example**: Sumida, Koto, Ota wards in Tokyo; Port areas

## Fire Prevention Zone Impact

### 防火地域 (Fire Prevention Area)
- **Requirements**: All buildings must be fireproof
- **Affected Area**: High-density zones (400%+ FAR)
- **Cost Impact**: +5-15% construction cost
- **Material Requirements**: Steel/concrete, no wood
- **Fire Rating**: 1-hour minimum
- **Window/Door**: Limited openings, fire-rated
- **Typical Coverage**: 12 Tokyo wards (all central)

### 準防火地域 (Quasi-Fire Prevention Area)
- **Requirements**: Semi-fireproof structures (some wood allowed)
- **Affected Area**: Medium-density zones (50%+ BCR)
- **Cost Impact**: +3-8% construction cost
- **Material Requirements**: Mixed (some wood structural elements allowed)
- **Fire Rating**: 45-minute minimum
- **Large Buildings**: 4+ stories or 500m² must be fully fireproof
- **Typical Coverage**: 98 municipalities

### 指定なし (No Designation)
- **Requirements**: Standard building code only
- **Affected Area**: Low-density zones
- **Cost Impact**: Baseline
- **Material Requirements**: Standard (wood common in residential)
- **Typical Coverage**: 62 municipalities

## Property Development Calculation Example

### Scenario: 1000 m² lot in Shinjuku Ward

**Given**:
- Lot area: 1000 m²
- Zone: 商業地域 (Commercial)
- BCR: 80%, FAR: 600%

**Calculations**:
1. **Max building footprint** = 1000 × 80% = **800 m²**
2. **Max total floor area** = 1000 × 600% = **6000 m²**
3. **Max floor count** (if average floor 300 m²) = 6000 / 300 = **20 floors**
4. **Fire requirement**: 防火地域 = Fireproof construction (+10% cost)

**Development Potential**: High-rise (20-25 floors) office/commercial tower

### Scenario: 1000 m² lot in Setagaya Ward

**Given**:
- Lot area: 1000 m²
- Zone: 第1種低層住居専用地域 (Low-rise residential)
- BCR: 40%, FAR: 150%, Height: 10m

**Calculations**:
1. **Max building footprint** = 1000 × 40% = **400 m²**
2. **Max total floor area** = 1000 × 150% = **1500 m²**
3. **Max floor count** (if standard floors) = 1500 / 400 = **3-4 floors**
4. **Height limit**: 10m max
5. **Fire requirement**: None

**Development Potential**: Low-rise residential (2-4 story) apartment/house

## Major Cities Quick Reference

| City | Primary Zone | BCR | FAR | Fire |
|------|-------------|-----|-----|------|
| Tokyo Center | Commercial | 80% | 500% | Yes |
| Osaka Center | Commercial | 80% | 600% | Yes |
| Nagoya Center | Commercial | 80% | 600% | Yes |
| Yokohama Center | Commercial | 80% | 500% | Yes |
| Kyoto Center | Commercial | 80% | 400% | Yes |
| Kobe Center | Commercial | 80% | 500% | Yes |
| Fukuoka Center | Commercial | 80% | 500% | Yes |
| Sapporo Center | Commercial | 80% | 500% | Yes |
| Sendai Center | Commercial | 80% | 500% | Yes |
| Hiroshima Center | Commercial | 80% | 500% | Yes |

## Road Width Adjustment

When frontage road is less than 12 meters:
- **Low/Mid-rise residential**: FAR × 0.4
- **Other zones**: FAR × 0.6

Example: 
- 1000m² lot, FAR 300% normally
- If road is 6m wide: FAR × 0.6 = **180% effective**

## When to Contact Municipal Office

Contact your local municipal planning department (都市計画課) when:

1. **Planning major development** - Verify exact zoning for your property
2. **Checking special designations** - Some areas have additional restrictions
3. **District plan areas** - 地区計画 affects development more than base zoning
4. **Road width adjustment** - Calculate actual FAR for narrow frontage
5. **Historic/scenic zones** - Additional restrictions may apply
6. **Recent zoning changes** - Verify latest updates to zoning map
7. **Fire prevention requirements** - Confirm structural requirements
8. **Height restrictions** - Verify specific height limits
9. **Setback requirements** - Slant line restrictions (斜線制限)
10. **Parking requirements** - Parking area ratios by use type

## Key Documents to Request

1. **用途地域図** (Zoning Map) - Shows all zones by area
2. **建築基準図** (Building Standards Map) - Detailed regulations
3. **都市計画決定書** (Urban Planning Decision) - Official specifications
4. **防火地域図** (Fire Prevention Map) - Fire zone boundaries
5. **高度地区図** (Height District Map) - Height restrictions
6. **地区計画図** (District Plan Map) - Additional local regulations

## File Structure and Location

### Main Files
- `japanese_zoning_data.ts` - TypeScript data export
- `ZONING_DATA_DOCUMENTATION.md` - Comprehensive documentation
- `ZONING_DATA_SUMMARY.md` - Compilation details and analysis
- `ZONING_QUICK_REFERENCE.md` - This file

### Dataset Statistics
- **Total municipalities**: 238
- **Total lines of code**: 2,284
- **File size**: ~66KB
- **Format**: TypeScript Record type
- **Last updated**: 2026-06-27

## Tips for Using the Data

1. **Always verify for official use** - This is reference data, confirm with municipal office
2. **Check for recent changes** - Zoning changes annually (March-May in Japan)
3. **Understand mixed zones** - Municipalities have multiple zones; this shows primary type
4. **Road width matters** - FAR is reduced for narrow roads (<12m)
5. **Special designations** - District plans (地区計画) often add stricter rules
6. **Contact municipal office** - Free official verification of zoning details
7. **Consult architect/developer** - For actual construction, confirm all requirements

## Contact Information

### MLIT National Spatial Information
- Website: https://nlftp.mlit.go.jp/ksj/
- Data: Free download in multiple formats
- Email: National Land Information Division

### Tokyo Metropolitan Bureau
- Website: https://www.toshiseibi.metro.tokyo.lg.jp/
- Phone: +81-3-5388-3131 (Urban Planning Division)
- Maps: Interactive online zoning maps for all 23 wards

### Zenrin City Planning Database
- Website: https://www.zenrin.co.jp/product/category/gis/contents/cityplanning/
- Phone: +81-97-537-5500
- Commercial GIS database service

---

**Quick Reference Generated**: 2026-06-27  
**Data Version**: 1.0  
**Ready for**: Development, analysis, and reference use
