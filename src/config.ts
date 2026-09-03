import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-hasumi-gym",
  slug: "hasumi-gym",
  title: "Hasumi (Gym)",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 12.000000953674316,
    "lines": [
      {
        "id": "ch0190_memoriallobby_1",
        "text": {
          "zh-cn": "唔……嗯……唔……唉……！",
          "ja": "ううん…うぅっ…\nくっ…ふっ…！",
          "ko": "으음…. 윽….\n읏…. 흐읏…!",
          "en": "Um... Ugh... Argh... Ugh!"
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 19.33333396911621,
    "lines": [
      {
        "id": "ch0190_memoriallobby_2_1",
        "text": {
          "zh-cn": "啊……虽然已经预料到了，但果然还是太勉强了。",
          "ja": "分かってはいましたが…\nやはり難しいようですね。",
          "ko": "예상은 했지만,\n역시 무리인 것 같군요.",
          "en": "As I suspected... It's simply more than I can handle."
        }
      },
      {
        "id": "ch0190_memoriallobby_2_2",
        "text": {
          "zh-cn": "老师，对不起……您也看到了，现在变成这样了……",
          "ja": "先生、すみません…\nご覧の通り、このような\n状況となってしまいまして…",
          "ko": "선생님, 죄송합니다….\n보시다시피 이런\n상황이 되어 버려서….",
          "en": "I apologize, Sensei. As you can see...the situation is quite..."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 13.666666984558105,
    "lines": [
      {
        "id": "ch0190_memoriallobby_3_1",
        "text": {
          "zh-cn": "老师本来就很忙了，",
          "ja": "そうでなくても\nお忙しいのに…",
          "ko": "그러잖아도 바쁘실 텐데,",
          "en": "I'm sure you already have a lot on your plate..."
        }
      },
      {
        "id": "ch0190_memoriallobby_3_2",
        "text": {
          "zh-cn": "我还给您添了更多的麻烦，真的很对不起。",
          "ja": "余計にお手間を\nおかけしてしまって、\n申し訳ございません。",
          "ko": "공연히 곤란하게\n만들어드린 것 같아\n죄송합니다.",
          "en": "And now I feel that I've inadvertently put you in an awkward position. I'm terribly sorry."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 13.333333969116211,
    "lines": [
      {
        "id": "ch0190_memoriallobby_4_1",
        "text": {
          "zh-cn": "明明到去年为止，还经常穿这件衣服，",
          "ja": "去年まではよく\n着ていた服のはずなのに…",
          "ko": "작년만 해도\n곧잘 입던 옷이었는데",
          "en": "I used to wear this all the time... Up until last year."
        }
      },
      {
        "id": "ch0190_memoriallobby_4_2",
        "text": {
          "zh-cn": "为什么，只过了一年就变成了这样……",
          "ja": "どうして…\n一年の間にこのような…。",
          "ko": "어째서\n1년 사이에 이런….",
          "en": "How could so much have changed in a year?"
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 24.33333396911621,
    "lines": [
      {
        "id": "ch0190_memoriallobby_5_1",
        "text": {
          "zh-cn": "没，没有，应该没有很大变化……",
          "ja": "い、いえ、\nあまり大きな違いは…。",
          "ko": "아, 아뇨.\n그렇게 큰 차이는….",
          "en": "Oh, uh, I mean... It's not that much of a difference..."
        }
      },
      {
        "id": "ch0190_memoriallobby_5_2",
        "text": {
          "zh-cn": "那个……体重，应该……没什么大的变化。",
          "ja": "その…あまり、\n体重は変わってないはず…\nなのですが",
          "ko": "그게… 그렇게 체중은\n변하지 않았을…텐데",
          "en": "It's just... My weight shouldn't...have changed that much..."
        }
      },
      {
        "id": "ch0190_memoriallobby_5_3",
        "text": {
          "zh-cn": "……应，应该。",
          "ja": "た、たぶん…。",
          "ko": "…아, 아마도….",
          "en": "No way... Right?"
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
