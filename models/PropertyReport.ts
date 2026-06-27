import mongoose from 'mongoose';

interface IPropertyReport {
  address: string;
  latitude: number;
  longitude: number;
  urbanPlanning: {
    zoneType?: string;
    buildingCoverageRatio?: number;
    floorAreaRatio?: number;
    fireDesignation?: string;
    semiFireDesignation?: string;
    heightDistrict?: string;
    urbanPlanningArea?: string;
  };
  hazards: {
    flood?: {
      riskLevel: string;
      depth?: number;
      estimatedWaterDepth?: string;
    };
    landslide?: {
      riskLevel: string;
    };
    tsunami?: {
      riskLevel: string;
      estimatedWaterDepth?: string;
    };
    highTide?: {
      riskLevel: string;
      estimatedWaterDepth?: string;
    };
  };
  evacuationSites: Array<{
    name: string;
    latitude: number;
    longitude: number;
    distance?: number;
  }>;
  salesMemo?: string;
  acquisitionMemo?: string;
  acquisitionDecision?: 'approve' | 'reject' | 'pending';
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const PropertyReportSchema = new mongoose.Schema<IPropertyReport>(
  {
    address: {
      type: String,
      required: true,
      index: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    urbanPlanning: {
      type: {
        zoneType: String,
        buildingCoverageRatio: Number,
        floorAreaRatio: Number,
        fireDesignation: String,
        semiFireDesignation: String,
        heightDistrict: String,
        urbanPlanningArea: String,
      },
      default: {},
    },
    hazards: {
      type: {
        flood: {
          riskLevel: String,
          depth: Number,
          estimatedWaterDepth: String,
        },
        landslide: {
          riskLevel: String,
        },
        tsunami: {
          riskLevel: String,
          estimatedWaterDepth: String,
        },
        highTide: {
          riskLevel: String,
          estimatedWaterDepth: String,
        },
      },
      default: {},
    },
    evacuationSites: [
      {
        name: String,
        latitude: Number,
        longitude: Number,
        distance: Number,
      },
    ],
    salesMemo: String,
    acquisitionMemo: String,
    acquisitionDecision: {
      type: String,
      enum: ['approve', 'reject', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

PropertyReportSchema.index({ latitude: '2dsphere', longitude: '2dsphere' });

const PropertyReport =
  mongoose.models.PropertyReport || mongoose.model<IPropertyReport>('PropertyReport', PropertyReportSchema);

export default PropertyReport;
