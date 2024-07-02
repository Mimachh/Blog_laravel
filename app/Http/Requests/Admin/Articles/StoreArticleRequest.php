<?php

namespace App\Http\Requests\Admin\Articles;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->isSuperAdmin();
    }

    public function rules(): array
    {
        return [
            'isActive' => ['required', 'boolean'],
            'category_id' => ['required', 'exists:categories,id'],
            'translations' => ['required', 'array', 'min:1'],
            'translations.*.title' => ['nullable', 'string'],
            'translations.*.content' => ['nullable', 'string'],
            'translations.*.description' => ['nullable', 'string'],
            'translations.*.slug' => ['nullable', 'string', 'unique:article_translations,slug'],
        ];
    }
}
