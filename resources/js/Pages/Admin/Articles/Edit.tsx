import TipTap from "@/Components/tiptap/TipTap";
import FormFieldLayout from "@/Components/ui/form-field-layout";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import SubmitButton from "@/Components/ui/submit-button";
import { Switch } from "@/Components/ui/switch";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/Components/ui/tabs";
import { Textarea } from "@/Components/ui/textarea";
import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { EditArticle, Translation } from "@/types/article";
import { Category } from "@/types/category";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import React from "react";
import { toast } from "sonner";

type Props = PageProps & {
    article: EditArticle;
    translations: Translation[];
    categories: Category[]
};

const Edit = (props: Props) => {
    const { article, translations, categories } = props;

    console.log(article);

    const { data, setData, processing, errors, put } = useForm({
      category_id: article.category_id,
      isActive: article.isActive,
      translations: {
          fr: {
              title: translations["fr"].title ?? null, 
              slug: translations["fr"].slug ?? null,
              content: translations["fr"].content ?? null,
              description: translations["fr"].description ?? null,
          },
          en: {
              title: translations["en"].title ?? null,
              slug: translations["en"].slug ?? null,
              content: translations["en"].content ?? null,
              description: translations["en"].description ?? null,
          },
      },
  });

  const handleContentChange = (lang: string, content: any) => {
      const newTranslations = {
          ...data.translations,
          [lang]: {
              // @ts-ignore
              ...data.translations[lang],
              content: content,
          },
      };
      setData("translations", newTranslations);
  };
  const cleanTranslations = (translations: any[]) => {
      return Object.entries(translations).reduce((acc, [lang, values]) => {
          const isEmpty = Object.values(values).every(
              (value) => value === null
          );
          if (!isEmpty) {
              // @ts-ignore
              acc[lang] = values;
          }
          return acc;
      }, {});
  };
  const submit = (e: React.FormEvent) => {
      e.preventDefault();

      const cleanedTranslations = cleanTranslations(data.translations as any);
      
      const cleanedData = {
          ...data,
          translations: cleanedTranslations,
      };

      axios.put(route("bo.articles.update", {article: article.id}), cleanedData).then((response) => {
          console.log(response);
          toast.success("Article modifié avec succès");
      });
  };
    return (
        <Tabs defaultValue="fr" className="max-w-xl mx-auto">
            <TabsList className="w-full">
                <TabsTrigger className="w-full" value="fr">
                    Fr
                </TabsTrigger>
                <TabsTrigger className="w-full" value="en">
                    En
                </TabsTrigger>
            </TabsList>

            <form onSubmit={submit}>
                <div className="">
                    <TabsContent value="fr">
                        <FormFieldLayout
                            fieldName="fr.title"
                            label="Title"
                            error={""}
                        >
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                value={data.translations.fr.title ?? ""}
                                className="mt-1 block w-full py-3 border"
                                onChange={(e) => {
                                    const newTranslations = {
                                        ...data.translations, // Copie toutes les traductions existantes
                                        fr: {
                                            ...data.translations.fr, // Copie toutes les traductions françaises existantes
                                            title: e.target.value, // Met à jour le titre en français
                                        },
                                    };
                                    setData("translations", newTranslations); // Met à jour l'objet translations entier
                                }}
                            />
                        </FormFieldLayout>

                        <FormFieldLayout
                            fieldName="fr.slug"
                            label="Slug"
                            error={""}
                        >
                            <Input
                                id="slug"
                                type="text"
                                name="slug"
                                value={data.translations.fr.slug ?? ""}
                                className="mt-1 block w-full py-3 border"
                                onChange={(e) => {
                                    const newTranslations = {
                                        ...data.translations, // Copie toutes les traductions existantes
                                        fr: {
                                            ...data.translations.fr, // Copie toutes les traductions françaises existantes
                                            slug: e.target.value, // Met à jour le titre en français
                                        },
                                    };
                                    setData("translations", newTranslations); // Met à jour l'objet translations entier
                                }}
                            />
                        </FormFieldLayout>

                        <FormFieldLayout
                            label="Message"
                            fieldName="content"
                            error={""}
                        >
                            <Textarea
                                value={data.translations.fr.description ?? ""}
                                placeholder="Contenu de votre message"
                                className="resize-none"
                                onChange={(e) => {
                                    const newTranslations = {
                                        ...data.translations, // Copie toutes les traductions existantes
                                        fr: {
                                            ...data.translations.fr, // Copie toutes les traductions françaises existantes
                                            description: e.target.value, // Met à jour le titre en français
                                        },
                                    };
                                    setData("translations", newTranslations); // Met à jour l'objet translations entier
                                }}
                            />
                        </FormFieldLayout>

                        <FormFieldLayout
                            fieldName="content"
                            label="Contenu"
                            error=""
                        >
                            <TipTap
                                onChange={(content) =>
                                    handleContentChange("fr", content)
                                }
                                content={data.translations.fr.content ?? ""}
                            />
                        </FormFieldLayout>
                    </TabsContent>

                    <TabsContent value="en">
                        <FormFieldLayout
                            fieldName="en.title"
                            label="Title"
                            error=""
                        >
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                value={data.translations.en.title ?? ""}
                                className="mt-1 block w-full py-3 border"
                                onChange={(e) => {
                                    const newTranslations = {
                                        ...data.translations, // Copie toutes les traductions existantes
                                        en: {
                                            ...data.translations.en, // Copie toutes les traductions françaises existantes
                                            title: e.target.value, // Met à jour le titre en français
                                        },
                                    };
                                    setData("translations", newTranslations); // Met à jour l'objet translations entier
                                }}
                            />
                        </FormFieldLayout>

                        <FormFieldLayout
                            fieldName="en.slug"
                            label="Slug"
                            error={""}
                        >
                            <Input
                                id="slug"
                                type="text"
                                name="slug"
                                value={data.translations.en.slug ?? ""}
                                className="mt-1 block w-full py-3 border"
                                onChange={(e) => {
                                    const newTranslations = {
                                        ...data.translations, // Copie toutes les traductions existantes
                                        en: {
                                            ...data.translations.en, // Copie toutes les traductions françaises existantes
                                            slug: e.target.value, // Met à jour le titre en français
                                        },
                                    };
                                    setData("translations", newTranslations); // Met à jour l'objet translations entier
                                }}
                            />
                        </FormFieldLayout>

                        <FormFieldLayout
                            label="Message"
                            fieldName="content"
                            error={""}
                        >
                            <Textarea
                                value={data.translations.en.description ?? ""}
                                placeholder="Contenu de votre message"
                                className="resize-none"
                                onChange={(e) => {
                                    const newTranslations = {
                                        ...data.translations, // Copie toutes les traductions existantes
                                        en: {
                                            ...data.translations.en, // Copie toutes les traductions françaises existantes
                                            description: e.target.value, // Met à jour le titre en français
                                        },
                                    };
                                    setData("translations", newTranslations); // Met à jour l'objet translations entier
                                }}
                            />
                        </FormFieldLayout>

                        <FormFieldLayout
                            fieldName="content"
                            label="Contenu"
                            error=""
                        >
                            <TipTap
                                onChange={(content) =>
                                    handleContentChange("en", content)
                                }
                                content={data.translations.en.content ?? ""}
                            />
                        </FormFieldLayout>
                    </TabsContent>

                    <FormFieldLayout
                        className="flex-1 min-w-fit"
                        label="Catégorie"
                        fieldName="category_id"
                        error={errors.category_id}
                    >
                        <Select
                            onValueChange={(e) => {
                                setData("category_id", e);
                            }}
                            defaultValue={data.category_id.toString() ?? ""}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Choisir une catégorie" />
                            </SelectTrigger>
                            <SelectContent id="status">
                                {categories.map((key) => (
                                    <SelectItem
                                        key={key.slug}
                                        value={key.id.toString()}
                                    >
                                        {key.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormFieldLayout>

                    <FormFieldLayout
                        label="Activer le formulaire de contact ?"
                        fieldName="accept_messages"
                        className="flex gap-6 w-full items-center border border-muted rounded-lg p-4
bg-background space-y-0
"
                        error={""}
                    >
                        <Switch
                            disabled={processing}
                            checked={data.isActive}
                            onCheckedChange={(e) => {
                                setData("isActive", e);
                            }}
                        />
                    </FormFieldLayout>

                    <SubmitButton
                        disabled={processing}
                        type="submit"
                        className="mt-4 w-full"
                    >
                        Enregistrer
                    </SubmitButton>
                </div>
            </form>
        </Tabs>
    );
};

Edit.layout = (page: React.ReactNode) => {
    return <AdminLayout>{page}</AdminLayout>;
};

export default Edit;