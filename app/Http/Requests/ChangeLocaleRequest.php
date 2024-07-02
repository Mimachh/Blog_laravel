<?php

namespace App\Http\Requests;

use App\Enums\Locales;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ChangeLocaleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
           'locale' => ['required', 'string', Rule::in(array_column(Locales::cases(), 'value'))],
        ];
    }
}
