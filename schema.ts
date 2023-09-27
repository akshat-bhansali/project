import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 * Page
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `object`
   *
   * Various titles for the use-cases
   */
  title?: {
    _type: "title";
    /**
     * Main Title — `locale_string`
     *
     *
     */
    main?: LocaleString;

    /**
     * Meta Title — `locale_string`
     *
     *
     */
    meta?: LocaleString;
  };

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Sections — `array`
   *
   *
   */
  sections?: Array<
    | SanityKeyed<CtaSection>
    | SanityKeyed<FaqSection>
    | SanityKeyed<FeatureSection>
    | SanityKeyed<HeroSection>
    | SanityKeyed<NavigatorSection>
    | SanityKeyed<SecondaryHeroSection>
    | SanityKeyed<SecondaryFeaturesSection>
    | SanityKeyed<StepsSection>
    | SanityKeyed<TabsSection>
  >;
}

export type LocaleRichText = {
  _type: "locale_rich_text";
  /**
   * en — `array`
   *
   *
   */
  en?: Array<SanityKeyed<SanityBlock> | SanityKeyed<Photo>>;
};

export type LocaleString = {
  _type: "locale_string";
  /**
   * en — `string`
   *
   *
   */
  en?: string;
};

export type LocaleText = {
  _type: "locale_text";
  /**
   * en — `text`
   *
   *
   */
  en?: string;
};

export type Photo = {
  _type: "photo";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alt Text — `locale_string`
   *
   *
   */
  alt?: LocaleString;
};

export type Cta = {
  _type: "cta";
  /**
   * Title — `locale_string`
   *
   *
   */
  title?: LocaleString;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type CtaSection = {
  _type: "cta_section";
  /**
   * Heading — `locale_rich_text`
   *
   *
   */
  title?: LocaleRichText;

  /**
   * CTA — `cta`
   *
   *
   */
  cta?: Cta;
};

export type FaqSection = {
  _type: "faq_section";
  /**
   * Title — `locale_string`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "faq";
      /**
       * Photo — `photo`
       *
       *
       */
      photo?: Photo;

      /**
       * Question — `locale_string`
       *
       *
       */
      question?: LocaleString;

      /**
       * Answer — `locale_rich_text`
       *
       *
       */
      answer?: LocaleRichText;
    }>
  >;
};

export type FeatureSection = {
  _type: "feature_section";
  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "feature";
      /**
       * Photo — `photo`
       *
       *
       */
      photo?: Photo;

      /**
       * Title — `locale_string`
       *
       *
       */
      title?: LocaleString;

      /**
       * Subtitle — `locale_string`
       *
       *
       */
      subtitle?: LocaleString;
    }>
  >;
};

export type HeroSection = {
  _type: "hero_section";
  /**
   * Title — `locale_string`
   *
   *
   */
  title?: LocaleString;

  /**
   * Subtitle — `locale_string`
   *
   *
   */
  subtitle?: LocaleString;

  /**
   * Button — `cta`
   *
   *
   */
  cta?: Cta;

  /**
   * Photo — `photo`
   *
   *
   */
  photo?: Photo;
};

export type NavigatorSection = {
  _type: "navigator_section";
  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "feature";
      /**
       * Photo — `photo`
       *
       *
       */
      photo?: Photo;

      /**
       * Title — `locale_string`
       *
       *
       */
      title?: LocaleString;

      /**
       * url — `url`
       *
       *
       */
      url?: string;
    }>
  >;
};

export type SecondaryFeaturesSection = {
  _type: "secondary_features_section";
  /**
   * Heading — `locale_string`
   *
   *
   */
  title?: LocaleString;

  /**
   * Sub Heading — `locale_string`
   *
   *
   */
  subtitle?: LocaleString;

  /**
   * Light Heading — `locale_string`
   *
   *
   */
  light?: LocaleString;

  /**
   * CTA — `cta`
   *
   *
   */
  cta?: Cta;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "feature";
      /**
       * Photo — `photo`
       *
       *
       */
      photo?: Photo;

      /**
       * Title — `locale_string`
       *
       *
       */
      title?: LocaleString;

      /**
       * Subtitle — `locale_string`
       *
       *
       */
      subtitle?: LocaleString;
    }>
  >;
};

export type SecondaryHeroSection = {
  _type: "secondary_hero_section";
  /**
   * Title — `locale_string`
   *
   *
   */
  title?: LocaleString;

  /**
   * Subtitle — `locale_rich_text`
   *
   *
   */
  subtitle?: LocaleRichText;

  /**
   * Button — `cta`
   *
   *
   */
  cta?: Cta;

  /**
   * Logos — `array`
   *
   *
   */
  logos?: Array<SanityKeyed<Photo>>;
};

export type StepsSection = {
  _type: "steps_section";
  /**
   * Heading — `locale_string`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "feature";
      /**
       * Photo — `photo`
       *
       *
       */
      photo?: Photo;

      /**
       * Title — `locale_string`
       *
       *
       */
      title?: LocaleString;

      /**
       * Subtitle — `locale_string`
       *
       *
       */
      subtitle?: LocaleString;
    }>
  >;
};

export type TabsSection = {
  _type: "tabs_section";
  /**
   * Heading — `locale_string`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "feature";
      /**
       * Title — `locale_string`
       *
       *
       */
      title?: LocaleString;

      /**
       * Subtitle — `locale_string`
       *
       *
       */
      subtitle?: LocaleString;

      /**
       * Color — `string`
       *
       *
       */
      color?: string;

      /**
       * Points — `array`
       *
       *
       */
      points?: Array<SanityKeyed<LocaleString>>;
    }>
  >;
};

export type Documents = Page;
