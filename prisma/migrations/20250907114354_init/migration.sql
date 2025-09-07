-- CreateTable
CREATE TABLE "public"."SalesDashboardMetric" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "change" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "iconColor" TEXT NOT NULL,

    CONSTRAINT "SalesDashboardMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VisitorInsight" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "loyalCustomers" INTEGER NOT NULL,
    "newCustomers" INTEGER NOT NULL,
    "uniqueCustomers" INTEGER NOT NULL,

    CONSTRAINT "VisitorInsight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TotalRevenue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "onlineSales" INTEGER NOT NULL,
    "offlineSales" INTEGER NOT NULL,

    CONSTRAINT "TotalRevenue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CustomerSatisfactionPoint" (
    "id" SERIAL NOT NULL,
    "dataset" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,

    CONSTRAINT "CustomerSatisfactionPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TargetVsReality" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "reality" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "TargetVsReality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TopProduct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "sales" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "lightColor" TEXT NOT NULL,

    CONSTRAINT "TopProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HighlightedCountry" (
    "id" SERIAL NOT NULL,
    "countryCode" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "HighlightedCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VolumeService" (
    "id" SERIAL NOT NULL,
    "volume" INTEGER NOT NULL,
    "services" INTEGER NOT NULL,

    CONSTRAINT "VolumeService_pkey" PRIMARY KEY ("id")
);
