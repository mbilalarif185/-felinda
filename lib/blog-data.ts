import matter from "gray-matter";

export type BlogAuthor = {
  name: string;
  role?: string;
  avatarSrc?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  author: BlogAuthor;
  publishedAt: string;
  featuredImage: string;
  imageFit?: "cover" | "contain";
  readingMinutes: number;
  tags: string[];
  seoKeywords: string[];
  contentMarkdown: string;
};

type PostFrontmatter = {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  publishedAt: string;
  featuredImage: string;
  imageFit?: "cover" | "contain";
  readingMinutes?: number;
  tags?: string[];
  seoKeywords?: string[];
};

const RAW_POSTS: string[] = [
  `---
slug: how-to-design-custom-engagement-ring-malaysia
title: "How to Design a Custom Engagement Ring in Malaysia: Complete Guide"
metaTitle: "Custom Engagement Ring Malaysia: First-Timer's Complete Guide"
excerpt: First time designing a custom engagement ring in Malaysia? This complete guide covers gemstones, metals, settings, budget & Felinda's bespoke process.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2026-05-21"
featuredImage: /images/Blog/Design-a-Custom-Engagement-Ring-in-Malaysia.webp
imageFit: contain
readingMinutes: 14
tags:
  - custom engagement ring Malaysia
  - bespoke engagement ring
  - engagement ring design
  - custom jewellery
  - bespoke
seoKeywords:
  - custom engagement ring Malaysia
  - bespoke engagement ring Malaysia
  - design engagement ring Malaysia
  - handmade engagement ring Malaysia
  - custom rings Malaysia
  - engagement ring design process
  - custom jewellery Malaysia
  - engagement ring consultation Malaysia
  - proposal ring Malaysia
  - unique engagement ring Malaysia
  - custom made rings Malaysia
  - engagement ring gemstone Malaysia
  - ring setting styles Malaysia
  - personalised engagement ring
  - Felinda jewelry Malaysia
---

Proposing is something you would like to do. However, you would like your proposal to be meaningful and not simply about looking nice but being special to her as well. One of the things you are not going to do to achieve this is to walk into a mall or shop and pick something out of a display case.

You are right about this; a custom-made engagement ring will be a much more unique and personalised option than what might be available in stores. You can determine the design, the stone, the metal, and your budget. You do not have to settle on something because that is what happens to be available. When she sees it for the first time, it is the only one like it that exists, and it is made specifically for her.

If you have never ordered a fine piece of jewellery before, the ordering process might be unfamiliar to you. How should you begin? Which decisions need to be made? How long will it take? What can you do to ensure you maintain the element of surprise?

This guide is a complete reference for each step of the engagement ring design process in Malaysia, from starting with an idea through having the finished ring in your possession — written for first-time buyers.

## Step 1: Start with a Budget Range, Not a Fixed Number

To begin, you should create a **realistic budget range**, not a firm upper limit, before doing anything else. That is important because your choices of gemstone, metal, and how complicated the setting is depend on each other, so a budget range that is flexible by even 10–15% will allow your jeweller to help you find the best possible combination within your budget.

A custom made engagement ring from a high-end jewellery store in Malaysia typically starts at RM3,000 and goes up depending on the centre stone and complexity of design. You can get a well-made 18K gold engagement ring with either a good quality moissanite or another type of semi-precious centre stone, for a moderately priced mid-priced budget. If you want to spend more money, the centre stone will likely be a natural diamond, especially if you want it to be over 0.5 carat and have strong colour and clarity.

Here is the honest truth: a carefully thought out bespoke engagement ring at a moderate cost is going to look and feel much more special than a mass-produced engagement ring that costs twice as much. You are paying for the craftsmanship, not just for the material.

A framework for planning your budget:

- Spend **50%–65%** of your budget on the centre stone
- Spend **25%–35%** of your budget on the setting and the band
- Keep **10%** of your budget for any design changes or size adjustments you might need after delivery

## Step 2: Learn the Four Ring Design Decisions

There are four major decisions regarding all engagement rings. Being aware of those decisions prior to seeing a jeweller means you will have knowledge of what you want before entering the store and leaving with a ring that will satisfy you.

### The Size of Your Centre Gemstone

The size of your centre stone (or gem) is the most important component to consider. In Malaysia, the most popular gemstones for engagement rings are:

**Diamond**

The most commonly used gemstone is the diamond. When buying a diamond, you should be familiar with the 4Cs: Cut, Colour, Clarity, and Carat. If your budget permits, the soundest decision you could make would be to prioritise Cut above all else, because an exceptionally cut diamond will outshine a diamond of higher colour or clarity that is cut poorly.

**Moissanite**

Moissanite is a lab-created stone that replicates the same beauty as the diamond but at a much lower cost. More and more Malaysian couples are choosing moissanite as their centre stone — a diamond alternative with the same splendour at a fraction of the cost.

**Sapphire**

Sapphire is a great choice if you want colour in addition to the durability needed for everyday wear. The most commonly desired sapphire for engagement rings is deep blue; however, there are pink, yellow, and white sapphires — the actual colour is up to the woman you are purchasing for. With the right setting, sapphire can be one of the more romantic stones.

**Ruby and Emerald**

For the daring, ruby and emerald bring more consideration into the design and can be even more stunning when used in the right setting — a fabulous choice for a partner whose personality is unconventional.

At Felinda, we will find gemstones to fit your requirements — not just use something from stock.

### The Metal

You have three different options for gold: yellow, white, and rose. Each has its own unique qualities and maintenance. A more in-depth breakdown can be found in our [gold comparison guide](/blog/white-gold-vs-yellow-gold-vs-rose-gold-ring), but here is a summary:

- **Yellow gold** is warm and traditional, closely associated with culture, and requires less maintenance.
- **White gold** is the latest and most modern, with a crisp and clean style that serves as a backdrop for diamonds — though it needs periodic re-plating.
- **Rose gold** is romantic and flattering on all skin tones. It is also the hardest of all three options.

Our custom wedding rings are always made in **18K gold** — the benchmark for fine jewellery in terms of purity and longevity.

Related reading: [Rose Gold vs White Gold vs Yellow Gold — Which Is Right for Your Ring?](/blog/white-gold-vs-yellow-gold-vs-rose-gold-ring)

### The Setting Style

The way in which a stone sits on the ring will greatly determine the overall appearance of the design. The following are the most often used engagement ring setting styles:

- **Solitaire:** A single stone tells a story all by itself. Simple and sophisticated — a classic engagement ring design.
- **Halo or pavé:** Smaller accent diamonds that surround the centre stone produce a larger, brighter appearance. Best suited for maximum visibility.
- **Three-stone:** A large centre stone with two smaller stones flanking it — often read as past, present, and future.
- **Bezel:** A metal rim surrounds the main stone instead of prongs. More modern and smooth; well suited for active daily wear.
- **Vintage / intricate:** Milgrain edges, hand engraving, Art Deco, and floral motifs — for a partner who loves detailed design and avoids mainstream pieces.

### The Band Profile

The band profile is something that is generally overlooked but plays an important role in how a ring feels and looks. A knife-edge band is sleek and dramatic, while a comfort-fit rounded band is more comfortable for someone who has never worn a ring. A twisted or split-shank band adds an interesting architectural element. Many features discussed during the design process affect the finished piece in ways you may not think about until you see your first ring.

## Step 3: Gather References — But Loosely

Create a collection of visual reference materials prior to your consultation — Pinterest boards, Instagram posts, screenshots, and anything that represents design elements that inspire you. You do not need a fully developed idea; collect enough examples to foster a discussion.

Similarly, collect examples of designs your partner does not like. If she does not like yellow gold, that narrows the scope quickly because you have learned something about her preferences.

If you already have her ring size, bring this information to your meeting. If you do not (because the proposal is likely a surprise), we can estimate the size and resize after the proposal — an automatic part of the final design process.

## Step 4: Book a Consultation at a Bespoke Atelier

This is where a private jewellery studio differs fundamentally from a chain store. Your appointment at Felinda will **not** be a sales appointment; it will be a conversation about designing an item of jewellery.

The first appointment at Felinda will include:

- Discussion about your partner's personality, lifestyle, and aesthetic choices
- Discussion about your budget and how to allocate money for the most impact
- An opportunity to see stones in natural light, as they will look in everyday wear
- Metal samples against your wrist, so you can see tone and finish
- An introduction to design direction — refining a reference you love or designing something entirely new

There is no pressure and no commitment. We spend as long as it takes to get your design direction right, without rushing into a design that does not meet your expectations.

**What to bring:**

- Visual references you have collected
- An approximate budget
- Your partner's ring size, if you have it
- Any stones or heirloom gold you may want to use in the design

## Step 5: The Design and Approval Process

With your brief confirmed, Felinda follows four design phases:

1. **Design sketches and rendered images:** We develop concepts from your brief and send them for feedback. Most commissioned rings are digitally rendered first so you can envision the finished piece in three dimensions before any metal is used.
2. **Refinements:** Most commissions have one to two rounds of revision before finalisation — we want you to be absolutely happy with the design that will be created.
3. **Final approval and craftsmanship:** Once you approve the final design, craftsmanship begins in our workshop. We do not outsource or mass produce.
4. **Final fitting and delivery:** You pick up your ring and see the finished product for the first time. Minor size adjustments may be made at this stage if necessary.

## Step 6: Timeline Planning — Do Not Leave This Late

Most first-time customers underestimate this step. A custom proposal ring cannot be hurried without losing quality, and the most stressful commissions are always those that start too close to the proposal date.

The typical custom engagement ring commission takes **4–6 weeks** from approved design to delivery at Felinda; intricate hand-engraving, multiple stone settings, and complex metalwork take longer.

After consulting with us, allow these time frames for your proposal:

- **At least 8 weeks** before your proposal date — begin the consultation process
- **2 weeks** for design development and approval
- **4–6 weeks** for craftsmanship and finishing
- **1 week** buffer for refinements if any arise

If you will be proposing during a popular period (Valentine's Day, her birthday, or your anniversary), start earlier than you think. December and February are always peak seasons for our business.

Related reading: [How to Repurpose Heirloom Jewellery in Malaysia](/blog/how-to-repurpose-or-redesign-old-jewellery) · [Custom Engagement Rings Malaysia](/custom-rings) · [Bespoke Process](/bespoke)

## What Makes a Felinda Ring Different?

Felinda is an exclusive, appointment-only workshop. We only accept a small number of commission projects at a time and do not create rings at high volume. Each ring we create is unique — made for a specific individual and their relationship at a specific moment in time.

This is not a marketing gimmick; it is how we choose to do business. The rings we create cannot be produced in a factory setting or sold from a mall. Creating a ring worth wearing every day for the rest of your life — and possibly passing to future generations — takes time, skill, and a jeweller's undivided attention.

## Frequently Asked Questions

### What is the average price for a custom engagement ring made in Malaysia?

From a fine jewellery atelier, custom-made engagement rings generally start at RM3,000 depending on your choice of gems, metals, and depth of design. The main stone will typically be between 50% and 65% of the overall cost. At Felinda we work closely with you to find the best selection within your budget, with complete transparency and no pressure to go beyond it — no hidden costs, and we are always upfront about what each option will cost.

### How do I find out the size of the engagement ring without ruining the surprise?

Some options include borrowing an existing ring she wears on her ring finger; asking a relative or close friend who may know her size; or having us estimate based on her overall size (then resize after the proposal). Most rings can be resized up to two sizes without disrupting the overall shape or design of the ring.

### Is it possible to use a family diamond or heirloom stone in my custom engagement ring?

Yes — this is a very special part of what we can do. If you have an inherited diamond, sapphire, or any other heirloom gemstone, we will evaluate its condition, grade, and suitability for your chosen design, then create a piece that incorporates your family stone. The sentimental value of using a family stone cannot be matched by any newly purchased stone. Bring the stone to your first appointment and we will handle everything from there.

## Ready to Begin?

If you want to create a custom engagement ring in Malaysia, it does not have to be stressful. With the right help, designing the perfect ring for your future wife can become one of the most enjoyable parts of planning your proposal — and at the end you will have created something unique to her that cannot be found anywhere else in the world.

At Felinda, we have guided many first-time customers through the entire process of designing and creating a custom engagement ring. We know the questions you have not thought of yet, and we know how to interpret "I want something that feels like her" into a beautiful engagement ring she will cherish forever.

The first step is a casual conversation with one of our experts.

[Book your private engagement ring consultation at our atelier in Dataran Sunway, Petaling Jaya](/contact) — by appointment only, because your ring deserves more than a counter visit.`,
  `---
slug: white-gold-vs-yellow-gold-vs-rose-gold-ring
title: "White Gold vs Yellow Gold vs Rose Gold Ring: Which Metal Is Right for Your Custom Jewellery"
metaTitle: "White Gold vs Yellow Gold vs Rose Gold Ring Malaysia Guide"
excerpt: White gold, yellow gold, or rose gold ring? Compare durability, skin tone matching & cultural fit to choose the best metal for your custom ring in Malaysia.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2026-05-15"
featuredImage: /images/Blog/White Gold vs Yellow Gold Vs Rose Gold Ring.webp
imageFit: contain
readingMinutes: 12
tags:
  - gold ring Malaysia
  - white gold
  - yellow gold
  - rose gold
  - custom jewellery
  - bespoke
seoKeywords:
  - rose gold ring Malaysia
  - white gold ring Malaysia
  - yellow gold ring Malaysia
  - custom gold ring Malaysia
  - gold ring Malaysia
  - best gold for engagement ring Malaysia
  - 18k gold ring Malaysia
  - rose gold vs white gold
  - gold ring skin tone
  - gold ring durability
  - gold purity Malaysia
  - metal type for rings
  - bespoke ring Malaysia
  - custom engagement ring Malaysia
  - gold jewellery Malaysia
---

You have made the decision to commission a custom ring, whether you are ordering an engagement ring, a wedding band, or a meaningful personal gift. You know what your design looks like, but now comes the question that stops nearly every buyer cold:

**What type of gold should I choose?**

Is it a rose gold ring? White gold? Or yellow gold? Three different alloys, three very different visual stories. And because this ring will be worn every day for the rest of your life, the metal you choose makes a real difference to how much you enjoy wearing it.

This guide has been written specifically for ring buyers in Malaysia. Culture, climate, skin tone, and lifestyle all influence which metal will suit you best, and at Felinda we discuss this with every client before any design work begins. Choosing the right gold is not only about looks — it is about how the ring fits into the way you live.

## First: What Is Gold Actually Made Of?

Pure 24K gold is too soft for everyday wear. It scratches easily, bends out of shape, and wears thin over time. To make gold strong enough for fine jewellery, it is alloyed with other metals. The proportion of pure gold to alloy determines the **karat**, and the type of alloy used determines the **colour** of the gold.

This is why all of our fine jewellery at Felinda, including bespoke commissions, is made in **18K gold**. At 18K, the metal is 75% pure gold — enough to retain its investment value, warmth, and prestige, with the durability to stand up to daily wear in Malaysia's hot and humid climate.

A quick reference for gold in the Malaysian market:

- **24K**: Pure gold. Too soft for rings, used in investment bars and traditional gold ornaments.
- **22K**: High purity, still soft for ring construction. Common in Indian and traditional Malay wedding ornaments.
- **18K**: The standard for fine jewellery. The right balance between purity, durability, and craftsmanship.
- **14K**: Lower purity, very durable. Uncommon in fine jewellery in Malaysia.

With that in mind, let's look at the three colours and why one may or may not be the right choice for you.

## Yellow Gold: The Classic Choice

Yellow gold is the most familiar colour for a gold ring in Malaysia. It is the classic, culturally rooted choice for the vast majority of buyers. With the right design, it reads as timelessly elegant and quietly modern at the same time.

### How It Works

When gold is alloyed with silver and copper, you get yellow gold. An 18K yellow gold alloy produces a warm, rich tone that is noticeably more refined than lower karat yellow golds.

### Who It Suits

If you have a light olive or warm skin tone — which describes a large portion of the Malaysian population — yellow gold will enhance rather than overpower your complexion. It complements skin with golden, peachy, or amber undertones beautifully.

Those drawn to vintage or heritage looks also tend to gravitate to yellow gold. It has been used for generations in fine jewellery and works exceptionally well with intricate hand engraving, milgrain detailing, and Art Deco inspired settings.

### Cultural Context in Malaysia

In Chinese and Malay culture, gold carries deep meaning. It signifies wealth, blessing, and continuity. Couples looking for an engagement ring that reflects both heritage and personal taste often choose yellow gold. It is also the most natural metal for remodelling or creating bespoke pieces that incorporate **family gold**.

### Practical Considerations

Yellow gold is the easiest of the three metals to live with. It does not lose its colour over time. The colour you see on the day you collect your ring will be the same in ten years. It may develop a soft patina, which many people see as character rather than wear.

## White Gold: The Contemporary Standard

For the last two decades, white gold has been the dominant choice in fine jewellery, and for good reason. It has a sleek, modern presence, it pairs beautifully with diamonds, and it suits the cleaner architectural styles that define current ring design.

### What It Is

White gold begins as yellow gold alloyed with white metals — typically palladium or nickel — and is then plated with **rhodium**, a bright, mirror-white metal. Without the rhodium plating, white gold has a soft greyish or champagne tone underneath.

### Who It Suits

White gold flatters cool and neutral skin tones — those with pink, rosy, or bluish undertones. It also suits anyone who prefers an understated, contemporary look rather than a traditional gold tone.

For engagement rings in the Malaysian market, white gold has long been the favourite. Its neutral surface lets a centre diamond do the talking. A diamond set in white gold reads brighter and crisper than the same stone set in yellow or rose gold.

### The Rhodium Question

Here is the honest truth: white gold requires more maintenance than yellow or rose gold. The rhodium plating wears down with everyday contact. Depending on your lifestyle, you may need to have your ring **re-plated every one to three years** to keep it at its brightest white.

At Felinda, we share this honestly with every client before the design is finalised. Re-plating is straightforward and affordable, but it is an ongoing commitment, and you should know that before choosing white gold for daily wear.

### Platinum vs White Gold

Many clients ask about platinum, especially when comparing white-toned metals. Platinum is naturally white, requires no plating, is denser than white gold, and is significantly more hard-wearing — but it also costs noticeably more. For most custom ring commissions, 18K white gold strikes an excellent balance of look, longevity, and price. When clients want to weigh both options, we walk through them together during the consultation.

## Rose Gold: The Modern Romantic

Rose gold has been one of the most talked-about metals in modern fine jewellery. Many predicted it would be a passing trend, but it has proven its staying power. Its soft blush tone reads as both modern and timeless at once.

### What It Is

Rose gold gets its colour from a higher proportion of **copper** in the alloy. The more copper, the deeper and more saturated the pink. Different jewellers use different recipes, so the exact tone of rose gold varies — some leaning peachy, others distinctly pink. At Felinda, our 18K rose gold is blended to produce a warm, refined blush rather than an over-saturated pink.

### Who Looks Beautiful in Rose Gold

Rose gold is remarkably universal. Its warm copper tones flatter cool, warm, and neutral skin tones alike, which is why it is often the safest "I look great in it" choice for clients who are unsure.

Aesthetically, rose gold is arguably the most expressive of the three metals. Its blush hue suits delicate and feminine designs, organic motifs such as leaves and flowers, and detailed pavé work. In Malaysia, custom rose gold rings have become increasingly popular among women who want something a little more personal than traditional yellow or white gold.

### Practical Considerations

Thanks to its copper content, rose gold is the **most scratch-resistant** of the three. It does not require rhodium plating, so its colour stays consistent for life. The trade-off is that the higher copper content can occasionally cause a reaction in people with sensitive skin or metal allergies. If you know your skin reacts to copper or brass, please let us know during your consultation so we can plan accordingly.

## Choosing by Skin Tone: A Practical Guide

Skin tone and metal pairing is one of the most common questions we hear at Felinda. Here is a simple guide for Malaysian buyers:

- **Fair / light skin with cool undertones** (pink, bluish) — **White gold** sits cleanly against the skin.
- **Fair / light skin with warm undertones** (peachy, golden) — **Rose gold or yellow gold** brings warmth.
- **Medium / tan skin, neutral to warm** — **Rose gold or yellow gold** glows beautifully.
- **Olive skin, warm undertones** — **Yellow gold or rose gold** harmonises with the complexion.
- **Deep / dark skin, warm undertones** — **Yellow gold** is richly, unmistakably beautiful.

That said, skin tone is a guideline, not a rule. At Felinda, we always encourage clients to try samples against their wrist before committing. The best metal is ultimately the one that feels right to you.

## How Metal Choice Affects Bespoke Design

This is a point that most general guides overlook, and where bespoke expertise matters most. Different metals behave differently on the bench, which means your choice of metal directly influences what is possible in your custom design.

- **Yellow gold** is the most workable of the three. It is the natural choice for elaborate hand engraving, fine milgrain edges, and sculptural detail. If your custom design carries intricate surface work, yellow gold lets a craftsperson push the detail further.
- **White gold** is harder than yellow gold. It holds crisp, clean lines exceptionally well and is excellent for prong settings. If your design is architectural in spirit — sharp angles and restrained ornament — white gold reads the cleanest.
- **Rose gold** sits in the middle. The copper content adds strength and structural integrity, which makes it well-suited to delicate but load-bearing settings: knife-edge bands, intricate lattice work, and pavé settings with many small diamonds.

During your design consultation at Felinda, we discuss metal and design together. The right metal is the one that serves the design, not chosen in isolation.

## Gold Ring Care Tips: Making Your Choice Last

Whichever metal you choose, a few habits will keep your ring at its best in Malaysia's humid climate:

- **Remove your ring before swimming.** Both chlorine and salt water degrade gold alloys over time.
- **Avoid contact with harsh chemicals.** Cleaning agents, hand sanitiser, and perfume can dull the finish.
- **Store gold pieces separately.** Keep each ring in its own soft pouch to prevent scratching against other jewellery.
- **Clean gently at home.** Warm water, a drop of mild dish soap, and a soft-bristled toothbrush is all you need.
- **Schedule an annual professional clean.** We recommend bringing every Felinda bespoke piece in once a year for a check-up.
- **For white gold, plan for rhodium re-plating** every one to two years, depending on wear.

## Which Gold Is Right for You?

There are no wrong answers here, which is why a proper conversation matters more than an online quiz.

- **Yellow gold** — if you value tradition, heritage, and warmth, or if your skin has olive or golden undertones. It is the easiest of the three to maintain, and it carries deep cultural resonance for many Malaysian families.
- **White gold** — if you prefer a clean, modern, polished look that lets a diamond or coloured stone read at its brightest. It does require periodic re-plating, but it delivers a sleek, contemporary feel.
- **Rose gold** — if you want a piece that feels romantic and a little more personal while still reading as timelessly stylish. It is exceptionally hard-wearing and holds its colour permanently.

If you are still undecided, the best next step is a conversation in person. At Felinda, we have long been the destination for custom-made gold rings in Malaysia. We bring out metal samples, talk through your design ideas, hold colour swatches against your wrist, and make sure you commit to a piece that you will cherish for life.

[Book your consultation with Felinda Jewelry](/contact).

Related reading: [How to Repurpose Heirloom Jewellery in Malaysia](/blog/how-to-repurpose-or-redesign-old-jewellery) · [Custom Engagement Rings Malaysia](/custom-rings) · [Bespoke Process](/bespoke)

## Frequently Asked Questions

### Is rose gold more expensive than yellow or white gold in Malaysia?

Not significantly. Because all three are typically 18K gold, the base material cost is essentially the same. Price differences come from craftsmanship and design complexity rather than the colour of the metal. White gold may carry a small additional lifetime cost due to periodic rhodium re-plating.

### Which gold is most durable for everyday wear in Malaysia's humid climate?

Rose gold is technically the most durable of the three, as its copper alloy content makes it harder and more scratch-resistant. White gold is close behind. Yellow gold is the softest, but at 18K it is perfectly suited for daily wear — the key is choosing a well-crafted piece with a band thickness that matches your lifestyle.

### Can I mix metals in a custom ring design, for example rose gold and white gold together?

Yes, and it is a beautiful design choice. Two-tone and three-tone rings combine metals within a single piece, often using white gold for the prong setting and rose or yellow gold for the band. We design these regularly at Felinda, and they work particularly well for couples who cannot quite agree on a single metal.

### Will white gold turn yellow over time?

White gold itself does not turn yellow, but the rhodium plating that gives it its bright white finish will gradually wear away with daily contact, revealing the slightly warm grey or champagne tone of the gold beneath. Re-plating every one to two years restores it fully. Proper care — avoiding harsh chemicals and removing your ring before swimming — extends the time between re-platings significantly.

## Ready to Choose Your Perfect Metal?

The right gold is not just about colour. It is about how it feels on your hand, how it suits your skin, and how it will wear through the years of your life. At Felinda, we walk every client through this decision in person, with sample metals, a real design conversation, and no pressure.

[Book your private consultation at our atelier in Dataran Sunway, Petaling Jaya](/contact), and leave knowing exactly what your custom ring will be made of.`,
  `---
slug: how-to-repurpose-or-redesign-old-jewellery
title: "How to Repurpose or Redesign Old Jewellery: Giving Your Heirloom Pieces a New Life"
excerpt: Discover how to repurpose heirloom jewellery in Malaysia. Reset gemstones, recast gold & redesign old pieces into modern jewellery you will actually wear.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2026-05-11"
featuredImage: /images/Blog/Repurpose or Redesign Old Jewellery.webp
imageFit: contain
readingMinutes: 14
tags:
  - jewellery redesign
  - heirloom
  - bespoke
  - gold recast
  - gemstone resetting
---

In nearly every home in Malaysia, there will likely be a drawer containing items from the past. In that drawer, you might find an old jade bangle from your grandmother that has been smoothed from wear over many years, and a gold chain from a wedding in 1970. You may find a ruby ring that no one appears to fit into anymore or a piece of pearl jewellery that just feels too formal for today's lifestyles.

Jewellery isn't generally worn; however, it is also rarely disposed of.

The emotional value that the pieces represent will remain long after the pieces themselves have been removed to live quietly for many years to come.

If you experience any of these scenarios, you are not alone and this guide is for you. The [redesign of jewellery in Malaysia](https://www.felindajewelry.com/regal-revivals) is one of the most underappreciated, as well as one of the most meaningful, services available in the world of fine jewellery. At Felinda, we have worked with families throughout Klang Valley to create new life out of heirloom pieces, by transforming old gold and forgotten gemstones into jewellery that is once again worn, cherished, and passed on.

This guide will provide you with the complete understanding of how to repurpose old jewellery in Malaysia: the product available, the process necessary, and whether or not it may be suitable for your needs.

## Why Do So Many People Have Heirloom Jewellery Sitting Idle?

Jewellery has a significant emotional value attached to it as a reflection of Malaysia's unique cultural history. The immense value of gold and gemstone gifts exchanged during weddings, the birth of a child and other important occasions among the Chinese, Indian and Malay communities demonstrates how much more than simply decorative pieces they represent; they are also testament to one's family ancestry, wealth and affection.

For many Chinese families, an entire generation of family members may have inherited grand 22K or 24K gold bangles, pendants and unique rings that were popular in an entirely different decade. Likewise, Indian families may also have intricate temple jewellery made of gold as well as vintage uncut diamonds. As such, they don't just serve as decorative items; rather, they are living records of their family's heritage, security…and Love.

## How Does the New Fashion Era Change this Concept?

This generational issue is here now; fashions have changed significantly; therefore, this younger generation has different style needs than the generations that created these heirlooms. For instance, the children who receive these pieces will often prefer lightweight gold chains, simple bands and a modern style and look; therefore, those beautiful heirlooms are kept in a locked box by the original heir because there is no way he/she would like to sell them, however, this also means that they have no way of wearing them themselves.

This is why the redesigning of an heirloom piece of jewellery is an opportunity not only for the heir but also an opportunity for preserving your family's history; therefore, it is important to respect the original intent of the designer while creating a new, unique piece for the next generation.

## What Does It Mean to Redesign or Repurpose Old Jewellery?

There is a large range of types of changes that can take place with the reworking of jewellery in Malaysia. At a basic level, this is simply taking the material (gold, gemstones, jade) from one old piece of jewellery and then transforming that material into something new. Below are some of the most common types of transformation that occur within this.

### 1. Resetting a Gemstone

Perhaps your grandmother's diamond has an old fashioned claw set from the 1960's and the stone itself is a perfect flawless sentimental stone. Resetting a gemstone is the process of removing that stone carefully and remounting it into a completely new mounting, which could be a sleek modern bezel, delicate pavé or beautiful solitaire ring perhaps that suits how you presently dress.

The stone itself does not change, only the way that it tells its story.

### 2. Melting Down Gold and Recasting

Melting down gold to create new pieces of jewelry is a simple and effective way to do so. Regardless of whether the rings are made from 18K, 22K, or 24K, the gold retains its full material value. All of the melted down gold can be used to make any type of jewelry that you need, whether it be an entirely new ring, a pendant or a pair of earrings; everything will be converted but nothing will be lost.

Melting down gold that is also associated with someone's memories will hold additional meaning. For example, wearing an Ethiopian ring that is made from your mother's bangles can represent having your mother right there with you every time you wear it.

### 3. Old Ring Transformation

When redesigning an old ring from another time period, it is possible to make the new piece look very different from the old one in almost any way you want. The overall shape of the new product can be extremely different than before, because it is possible to reshape the existing band. In addition to changing the shape of the ring, it is also possible to add, remove or move any of the gemstones. Your new transformed piece will begin with a discussion of how you want it to feel, while at the end of the process you will have something you'll want to wear every day.

### 4. Jewellery Remodelling: Combining Multiple Pieces

If you have received several small items of jewellery (a loose sapphire here, a little gold pendant there, a broken bracelet with significant stones, etc.), but none of them make up a complete piece of jewellery on their own, consider combining some of them into one piece of jewellery through Jewellery Remodelling. You can create a bangle that includes all of your inherited stones or create a necklace that incorporates the stories of three generations into one piece.

### 5. Jade and Heritage Stone Reworking

When working with jade, this stone has a different set of factors to consider as compared to gold; you cannot just melt it down and recast it the same as gold. Jade must be handled with care and may need to be cut again in order to be set. Therefore, you will want to ensure that whoever works with your jade has a good understanding of how to work with jade and its properties. At Felinda we value jade and other heritage stones (specifically ones used in Malaysia and China) as their origins warrant more care when working on them.

## The Emotional Logic of Jewellery Upcycling

There's a very human need to retain something that was once an heirloom in its original material but in a new form.

Changing the way you've worn your sentimental piece doesn't mean you're taking away from the past — it simply allows you a way of keeping that history present. If your sentimental jewelry stays in the drawer and is not being worn, it isn't being appreciated; it's simply being stored. If you take your sentimental jewelry and change it into a piece that you would wear on a special occasion, you will see that piece every time you look at your hand, and it will remind you of the person who gave that piece to you — a silent conversation with that person.

At Felinda, many of our clients come to us after the death of a parent or after having settled an estate. The jewelry they inherit from their deceased family member(s) is of little monetary value to them, but it means more to them than what it was worth; it's about the meaning behind the piece of jewelry. Our role is to help our clients carry that meaning with them in a manner that does not require them to wear a style that doesn't fit them or their personality. This is custom jewelry made from old pieces at its most meaningful.

## What Felinda Can Do with Your Existing Stones and Metals?

Felinda is a private, bespoke jewellery atelier located in Petaling Jaya within a shopping complex known as Dataran Sunway. The company only takes appointments for customers to be seen, not because of any exclusivity, but because we believe jewellery should be given one's complete and undivided attention at the time of commissioning.

### What Felinda Accepts

- Old gold in all karat (18K, 22K, and 24K), all types of jewellery (e.g., rings, bangles, chains, pendants) that are broken or have already been used
- Diamonds, rubies, sapphires, emeralds and all precious stones
- Jade (e.g., imperial jade & commercial jade) with appropriate care
- Pearls (e.g., pearls that can be re-strung, framed in a new setting or incorporated with new designs)
- Semi-precious stones with sentimental value

### What We Offer

- Custom-made engagement rings for people who have inherited either stones or gold or both
- Rings designed for men from their family heirlooms
- Earrings that have had the existing stones reset
- Pendants/necklaces made using the old gold of the original item, but using a new design
- Bangles and/or bracelets made that incorporate multiple family heirlooms
- Entirely custom-made pieces designed around the materials provided

The starting point for creating any one-of-a-kind piece of jewellery is to have a consultation with Felinda and examine the customer's existing pieces. Felinda will inform the customer of what can be accomplished using the existing materials and create a design that creates an entirely new piece while still honouring the original.

## The Jewellery Redesign Process at Felinda: Step by Step

Here's a general overview of designing and redesigning your pieces at Felinda, the processes involved at each stage:

### Step 1: The Initial Consultation (By Appointment)

Bring your pieces to our studio at Dataran Sunway so we can evaluate them together — the quality and condition of the gold, the quality and condition of the stones, the quality of the current settings. This is an informal discussion (as opposed to a strict inspection). Before we talk about how your pieces may be redesigned, we need to understand how they have sentimental value to you.

This is the first of three stages in the redesign process. Neither you nor we are obligated to continue to the next stage after this initial consultation.

### Step 2: Design Exploration

We will work with you to create design concepts based on your materials/parts and desired style. Some clients provide a very clear description of the piece they want (i.e., "I want a simple solitaire made with my grandmother's diamond"). Other clients give us a more general description of the type of piece desired (i.e., "I have all of this gold; I would like you to create a piece I can wear every day"). Either way, we help the clients work through design options and refine them until the overall design is agreed upon.

During the design exploration, we provide sketches and/or renderings through digital technology as a way for our clients to visualize their designs before any work begins on the piece.

### Step 3: Material Assessment and Quotation

When the design is finalized, we provide you with a full quote for the handcrafted work, any additional materials required (like gold if there is not enough gold available, or additional small diamonds), and a clear time frame.

At this point, we absolutely believe in being completely transparent. You will know exactly how much you are spending, and why.

### Step 4: Craftsmanship

Your piece will be hand-created at our workshop. The re-modelling of jewellery from inherited pieces requires a skilled craftsman. The process requires melting and re-melting the gold, removing and replacing stones, and creating new settings for these stones requires technical expertise and a level of respect for the history of the material. We value these processes immensely.

### Step 5: Final Fitting and Delivery

After the completion of your piece, you will have a final appointment to view it. It will be your first time seeing the finished product. This moment is what we are in business for, having a client wear a piece made from their grandmother's ring.

## Common Questions About Jewellery Redesign in Malaysia

### Will I lose any of my original gold in the process?

Unfortunately, some materials will be lost during both casting and finishing and this is normal for any type of casting project; there will be some losses. As is the case with material losses, we will disclose this information to you at the beginning of the project; when you're given your estimate or quote.

### Can you match the karat of my old gold in the new piece?

In most cases the answer is yes. If an older piece of Jewelry is 22kt and you want the new piece to be 18kt, we can alloy it to match the desired karatage. This is part of your initial design consultation and helps us to determine how to construct each part of your design to create your new piece.

### What if my stones are not high quality?

Some stones have great sentimental value while others have great gemstone value; these are two different things. We will give you our opinion on the stones we are using, and if you want to use stones with poor quality for your new design we will let you know before starting to create the design and give you alternatives to consider.

### How long does the redesign take?

Typically redesigns can be completed within three months to eight months; depending on the complexity of the project. We will give you a specific timeframe for your project during your consultation.

### Do I need to bring all the pieces at once?

In order to optimise the options of which stones, metals, and colours can be combined at the workshop. It is recommended to bring all pieces (even if unsure) that you're considering for redesigning an existing piece into a new piece.

## A Final Word: Jewellery That Keeps Moving Forward

Contemporary jewellery is not just expensive jewellery. It's jewellery that continues to have a story over the years; from being passed on from person-to-person, from generation-to-generation, and through different times and cultures, gaining more sentimental value with each new experience.

At Felinda, our belief is that the ability to redesign and repurpose family or heirloom jewellery is one of the greatest services that a fine jeweller provides. It is not simply a mechanical service, but an opportunity to blend old traditions with new dreams, and share both experiences between the past owner's experience, and future owner's experience of wearing the newly created piece.

If you own existing pieces which could be reworked into something incredible, we would like to visit with you and meet the pieces that mean the most to you.

[Book Your Consultation with Felinda Jewelry Now!](/contact)`,
  `---
slug: the-quiet-language-of-bespoke-jewelry
title: The quiet language of bespoke jewelry
excerpt: How proportion, patina, and patience shape a piece that feels unmistakably yours, without shouting for attention.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-11-12"
featuredImage: /images/felinda-jewelry/EarRings/FJ Insta-Red Ruby Earring.webp
readingMinutes: 7
tags:
  - bespoke
  - design
  - craft
---

## Why bespoke feels different

Bespoke work begins where catalog design ends: with your story, your skin tone, the way you move, and the occasions you want to mark.

We sketch in pencil before we touch metal. We consider **weight**, **balance**, and how light will catch a facet at dinner, not only under showroom spots.

### Three principles we return to

1. **Restraint:** ornament that earns its place.
2. **Longevity:** alloys and stones chosen for life, not seasons.
3. **Fit:** comfort you forget you are wearing.

> The best compliment is not "Where did you buy that?" but "That is *so* you."

When you are ready, [book a private consultation](/contact) and we will translate your references into a calm, confident design direction.`,
  `---
slug: choosing-pearls-with-intention
title: Choosing pearls with intention
excerpt: From lustre to surface and silhouette, a practical guide to selecting pearls that age beautifully in the tropics.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-09-03"
featuredImage: /images/felinda-jewelry/Pearl-Series/FJ Insta-Akoya Necklace.webp
readingMinutes: 6
tags:
  - pearls
  - materials
  - education
---

## Lustre first

**Lustre** is the sharpness of reflection on the pearl surface. In soft daylight, roll the strand slowly: crisp highlights signal healthy nacre.

### Surface and shape

- **Surface**: tiny blemishes are natural; clouds that dull the skin are not.
- **Shape**: baroque can feel modern; rounds read classic. There is no wrong answer, only *your* vocabulary.

### Wear and care

Rinse after salt or sunscreen. Store flat, away from heat vents. Restring silk every few years if you wear a necklace weekly.

\`\`\`
Pearl + diamond + warm gold = evening without trying too hard.
\`\`\`

Explore our [pearl creations](/pearl-creations) for inspiration.`,
  `---
slug: custom-rings-from-first-sketch-to-final-polish
title: Custom rings from first sketch to final polish
excerpt: A transparent look at milestones, timelines, and the decisions that keep a custom ring both beautiful and wearable.
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-06-21"
featuredImage: /images/felinda-jewelry/Custom-Rings/Engagement Rings/FJ Insta-Engagement ring 63.webp
readingMinutes: 8
tags:
  - rings
  - process
  - bespoke
---

## Milestones you can expect

| Phase | What happens |
| --- | --- |
| Discovery | References, lifestyle, budget guardrails |
| Design | Sketches and 3D where helpful |
| Bench | Casting, setting, polish |

### Wearability checks

We validate **stack height**, **palm clearance**, and prong geometry for daily life, not only the reveal moment.

#### Sizing and seasons

Fingers change with heat and travel. We plan a sensible sizing window and discuss *when* the ring should feel its best.

See [custom rings](/custom-rings) for starting points and mood boards.`,
  `---
slug: layering-necklaces-without-the-tangle
title: Layering necklaces without the tangle
excerpt: "Spacing, clasp strategy, and weight pairing: small choices that keep delicate layers feeling effortless."
authorName: Felinda Atelier
authorRole: Design studio
publishedAt: "2025-04-08"
featuredImage: /images/felinda-jewelry/Pendants-Necklaces/FJ Insta-Sun and Moon Pendant.webp
readingMinutes: 5
tags:
  - styling
  - necklaces
  - tips
---

## Start with spacing

Aim for **2–4 cm** between station lengths. If two pendants sit at the same height, they will argue.

### Weight pairing

Heavier chains anchor lighter ones. Mixing ultra-fine chains of similar weight invites knots, especially in humidity.

- Use a **detangler** for two-layer days.
- Alternate textures: one smooth snake, one cable.

### When bespoke helps

If you know your ideal stack, we can design **bail height** and **chain gauge** so the composition reads intentional from day one.

Browse [pendants and necklaces](/pendants-necklaces).`,
];

function readingMinutesFromMarkdown(body: string, fallback: number | undefined): number {
  if (typeof fallback === "number" && fallback > 0) return Math.round(fallback);
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function parsePost(raw: string): BlogPost {
  const { data, content } = matter(raw);
  const d = data as PostFrontmatter;
  const body = content.trim();
  return {
    slug: d.slug,
    title: d.title,
    metaTitle: d.metaTitle,
    excerpt: d.excerpt,
    author: {
      name: d.authorName,
      role: d.authorRole,
      avatarSrc: d.authorAvatar,
    },
    publishedAt: d.publishedAt,
    featuredImage: d.featuredImage,
    imageFit: d.imageFit,
    readingMinutes: readingMinutesFromMarkdown(body, d.readingMinutes),
    tags: Array.isArray(d.tags) ? d.tags.map(String) : [],
    seoKeywords: Array.isArray(d.seoKeywords) ? d.seoKeywords.map(String) : [],
    contentMarkdown: body,
  };
}

const parsedPosts: BlogPost[] = RAW_POSTS.map(parsePost);

export function getAllPosts(): BlogPost[] {
  return [...parsedPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return parsedPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return parsedPosts.map((p) => p.slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const tagSet = new Set(current.tags);
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.reduce((n, t) => n + (tagSet.has(t) ? 1 : 0), 0),
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        new Date(b.post.publishedAt).getTime() - new Date(a.post.publishedAt).getTime(),
    )
    .slice(0, limit)
    .map((x) => x.post);
}

export function formatBlogDate(iso: string, locale = "en-MY"): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
