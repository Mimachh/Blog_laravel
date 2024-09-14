<?php

namespace App\Http\Requests\Admin\Articles;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'isActive' => ['required', 'boolean'],
            'category_id' => ['required', 'exists:categories,id'],
            'translations' => ['required', 'array'],
            'translations.*.title' => ['required', 'string'],
            'translations.*.content' => ['required', 'string'],
            'translations.*.description' => ['nullable', 'string'],
            'translations.*.slug' => ['required', 'string'],
        ];
    }
}
